import { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [showLogin, setShowLogin] = useState(false);
    const [showRegister, setShowRegister] = useState(false);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const API_REGISTER_URL = `${process.env.REACT_APP_BASE_URL2}/auth/register`;
    const API_LOGIN_URL = `${process.env.REACT_APP_BASE_URL2}/auth/login`;

    useEffect(() => {
        const stroredUser = localStorage.getItem('user');
        if (stroredUser) {
            setUser(JSON.parse(stroredUser));
        }
        setLoading(false);
    }, []);

    const login = async (account, password) => {
        try {
            setLoading(true);
            const res = await axios.post(API_LOGIN_URL, {
                account: account,
                password: password,
            });

            if (res.status === 200) {
                localStorage.setItem('token', res.data.token);
                localStorage.setItem('user', JSON.stringify(res.data.user));
                setUser(res.data.user);
            }
            return { success: true };
        } catch (err) {
            setError(err.response.data.message);
            return { success: false, message: err.response.data.message };
        } finally {
            setLoading(false);
        }
    };

    const register = async (account, username, email, password, displayname) => {
        try {
            setLoading(true);
            const res = await axios.post(API_REGISTER_URL, {
                account,
                username,
                email,
                password,
                displayname,
            });

            if (res.status === 201) {
                localStorage.setItem('token', res.data.token);
                localStorage.setItem('user', JSON.stringify(res.data.user));
                setUser(res.data.user);
            }
            return { success: true };
        } catch (error) {
            setError(error.response.data.message);
            return { success: false, message: error.response.data.message };
        } finally {
            setLoading(false);
        }
    };

    const logout = () => {
        setUser(null);
    };

    const openLogin = () => setShowLogin(true);
    const closeLogin = () => {
        setError(null);
        setShowLogin(false);
    };
    const openRegister = () => setShowRegister(true);
    const closeRegister = () => {
        setError(null);
        setShowRegister(false);
    };
    return (
        <AuthContext.Provider
            value={{
                user,
                login,
                logout,
                openLogin,
                closeLogin,
                showLogin,
                showRegister,
                register,
                openRegister,
                closeRegister,
                loading,
                error,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}
export function useAuth() {
    return useContext(AuthContext);
}

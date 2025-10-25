import { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [showLogin, setShowLogin] = useState(false);
    const [showRegister, setShowRegister] = useState(false);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const API_REGISTER_URL = `${process.env.REACT_APP_BASE_URL}auth/register`;
    const API_LOGIN_URL = `${process.env.REACT_APP_BASE_URL}auth/login`;

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

    const register = async (account, username, email, password, displayname, avatar) => {
        try {
            setLoading(true);
            const formData = new FormData();
            formData.append('account', account);
            formData.append('username', username);
            formData.append('email', email);
            formData.append('password', password);
            formData.append('displayname', displayname);
            if (avatar) {
                formData.append('avatar', avatar);
            }
            const res = await axios.post(API_REGISTER_URL, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
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
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        window.location.reload();
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

import { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [showLogin, setShowLogin] = useState(false);
    const [showRegister, setShowRegister] = useState(false);
    const [loading, setLoading] = useState(false);
    const API_URL = 'https://tiktok-backend-yimh.onrender.com/api/auth/register';

    useEffect(() => {
        const stroredUser = localStorage.getItem('user');
        if (stroredUser) {
            setUser(JSON.parse(stroredUser));
        }
        setLoading(true);
    }, []);
    const login = (username) => {};
    const register = async (username, email, password) => {
        try {
            const res = await axios.post(API_URL, {
                username,
                email,
                password,
            });
            console.log(res);
            if (res.status === 201) {
                localStorage.setItem('token', res.data.token);
                localStorage.setItem('user', JSON.stringify(res.data.user));
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };
    const logout = () => {
        setUser(null);
    };
    const openLogin = () => setShowLogin(true);
    const closeLogin = () => setShowLogin(false);
    const openRegister = () => setShowRegister(true);
    const closeRegister = () => setShowRegister(false);
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
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}
export function useAuth() {
    return useContext(AuthContext);
}

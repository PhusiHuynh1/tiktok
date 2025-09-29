import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [showLogin, setShowLogin] = useState(false);
    const login = (username) => {
        setUser({ name: username });
    };
    const logout = () => {
        setUser(null);
    };
    const openLogin = () => setShowLogin(true);
    const closeLogin = () => setShowLogin(false);
    return (
        <AuthContext.Provider value={{ user, login, logout, openLogin, closeLogin, showLogin }}>
            {children}
        </AuthContext.Provider>
    );
}
export function useAuth() {
    return useContext(AuthContext);
}

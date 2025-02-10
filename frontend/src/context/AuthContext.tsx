import { createContext, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import api from "@/api";

interface AuthContextType {
    isLoggedIn: boolean;
    login: (email: string, password: string) => void;
    logout: () => void;
    error?: string;
    setError?: (values: string) => void;
    success?: string;
    resetMessages: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('user') !== null);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const navigate = useNavigate();

    const resetMessages = () => {
        setError('');
        setSuccess('');
    }

    const login = async (email: string, password: string) => {
        resetMessages();
        try {
            const res = await api.post("/api/token/", { email, password });
            localStorage.setItem("ACCESS_TOKEN", res.data.access);
            localStorage.setItem("REFRESH_TOKEN", res.data.refresh);
            setIsLoggedIn(true);
            setSuccess("Login successful!");
            navigate("/marketplace");
            setError('');
            setSuccess('');
        } catch (error) {
            console.error(error);
            setError("An unexpected error occurred! Please try again.");
        }
    };

    const logout = () => {
        localStorage.clear();
        setIsLoggedIn(false);
        navigate("/login");
    }

    return (
        <AuthContext.Provider value={{ isLoggedIn, login, logout, error, success, setError, resetMessages }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = (): AuthContextType => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};

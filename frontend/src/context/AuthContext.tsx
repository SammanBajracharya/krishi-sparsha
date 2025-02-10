import * as z from "zod";

import { createContext, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import api from "@/api";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "@/constants";
import { UserSchema } from "@/schemas";

interface AuthContextType {
    isLoggedIn: boolean;
    login: (email: string, password: string) => void;
    logout: () => void;
    error?: string;
    setError?: (values: string) => void;
    success?: string;
    resetMessages: () => void;
    fetchUserData: () => z.infer<typeof UserSchema> | null;
    userData: z.infer<typeof UserSchema> | null;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem(ACCESS_TOKEN) !== null);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [userData, setUserData] = useState<z.infer<typeof UserSchema> | null>(null);
    const navigate = useNavigate();

    const resetMessages = () => {
        setError('');
        setSuccess('');
    }

    const fetchUserData = async () => {
        try {
            const res = await api.get("/api/user/profile/");
            setUserData(res.data);
            return res.data;
        } catch (error) {
            console.error(error);
            return null;
        }
    }

    const login = async (email: string, password: string) => {
        resetMessages();
        try {
            const res = await api.post("/api/token/", { email, password });
            localStorage.setItem(ACCESS_TOKEN, res.data.access);
            localStorage.setItem(REFRESH_TOKEN, res.data.refresh);
            await fetchUserData();
            setIsLoggedIn(true);
            setSuccess("Login successful!");
            navigate("/marketplace");
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
        <AuthContext.Provider value={{ isLoggedIn, login, logout, error, success, setError, resetMessages, userData, fetchUserData }}>
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

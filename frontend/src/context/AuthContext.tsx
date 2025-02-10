import * as z from "zod";

import { createContext, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import api from "@/api";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "@/constants";
import { UserSchema } from "@/schemas";

interface AuthContextType {
    isLoggedIn: boolean;
    isLoading: boolean;
    login: (
        email: string,
        password: string,
        setError: (values: string) => void,
        setSuccess: (values: string) => void,
    ) => void;
    logout: () => void;
    fetchUserData: () => Promise<z.infer<typeof UserSchema> | null>;
    userData: z.infer<typeof UserSchema> | null;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem(ACCESS_TOKEN) !== null);
    const [isLoading, setIsLoading] = useState(false);
    const [userData, setUserData] = useState<z.infer<typeof UserSchema> | null>(null);
    const navigate = useNavigate();

    const fetchUserData = async () => {
        setIsLoading(true);
        try {
            const res = await api.get("/api/user/profile/");
            setUserData(res.data);
            return res.data;
        } catch (error) {
            console.error(error);
            return null;
        } finally {
            setIsLoading(false);
        }
    }

    const login = async (
        email: string,
        password: string,
        setError: (values: string) => void,
        setSuccess: (values: string) => void,
    ) => {
        try {
            const res = await api.post("/api/token/", { email, password });
            localStorage.setItem(ACCESS_TOKEN, res.data.access);
            localStorage.setItem(REFRESH_TOKEN, res.data.refresh);
            await fetchUserData();
            if (!userData) {
                throw new Error("An unexpected error occurred! Please try again.");
            }
            setIsLoggedIn(true);
            setSuccess("Login successful!");
            if (userData.user_type.toLowerCase() === "farmer") {
                console.log(userData);
                navigate(`/dashboard/${userData.id}/`);
            } else {
                navigate("/marketplace");
            }
        } catch (error) {
            console.error(error);
            setError("An unexpected error occurred! Please try again.");
        }
    };

    const logout = () => {
        localStorage.removeItem(ACCESS_TOKEN);
        localStorage.removeItem(REFRESH_TOKEN);
        setIsLoggedIn(false);
        navigate("/login");
    }

    return (
        <AuthContext.Provider value={{ isLoggedIn, isLoading, login, logout, userData, fetchUserData }}>
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

import * as z from "zod";

import { jwtDecode } from "jwt-decode";
import { createContext, useState, useContext, useEffect } from "react";
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

    useEffect(() => {
        auth().catch(() => setIsLoggedIn(false))
    }, [])

    const refreshToken = async () => {
        const refreshToken = localStorage.getItem(REFRESH_TOKEN);
        try {
            const res = await api.post("/api/token/refresh/", {
                refresh: refreshToken,
            });
            if (res.status === 200) {
                localStorage.setItem(ACCESS_TOKEN, res.data.access)
                setIsLoggedIn(true)
            } else {
                setIsLoggedIn(false)
            }
        } catch (error) {
            console.log(error);
            setIsLoggedIn(false);
        }
    };

    const auth = async () => {
        const token = localStorage.getItem(ACCESS_TOKEN);
        if (!token) {
            setIsLoading(false);
            return;
        }
        const decoded = jwtDecode(token);
        const tokenExpiration = decoded.exp;
        const now = Date.now() / 1000;

        if (tokenExpiration < now) {
            await refreshToken();
        } else {
            setIsLoggedIn(true);
        }
    };

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
            const fetchedUserData = await fetchUserData();
            if (!fetchedUserData) {
                throw new Error("An unexpected error occurred! Please try again.");
            }
            setIsLoggedIn(true);
            setSuccess("Login successful!");
            if (fetchedUserData.user_type.toLowerCase() === "farmer") {
                console.log(fetchedUserData);
                navigate(`/dashboard/${fetchedUserData.id}/`);
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

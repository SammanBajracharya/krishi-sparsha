import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../constants";
import { jwtDecode } from "jwt-decode";
import api from "../api";
import { LOGIN_PATH } from "@/routes";

const ProtectedRoute = ({ children } : { children: React.ReactNode }) => {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

    useEffect(() => {
        auth().
            catch(() => setIsAuthenticated(false));
    }, []);

    const refreshToken = async () => {
        const token = localStorage.getItem(REFRESH_TOKEN);
        try {
            const res = await api.post("/api/token/refresh/", {
                refresh: token,
            });

            if (res.status === 200) {
                localStorage.setItem(ACCESS_TOKEN, res.data.access);
                setIsAuthenticated(true);
            } else {
                setIsAuthenticated(false);
            }
        } catch (error) {
            console.log(error);
            setIsAuthenticated(false);
        }
    }

    const auth = async () => {
        const token = localStorage.getItem(ACCESS_TOKEN);
        if (!token) {
            setIsAuthenticated(false);
            return;
        }

        const decoded = jwtDecode(token);
        const expirationDate = decoded.exp as number;
        const now = Date.now() / 1000;

        if (expirationDate < now) { await refreshToken(); }
        else { setIsAuthenticated(true); }
    }

    if (isAuthenticated == null) {
        return (
            <div className="h-screen w-screen flex flex-col items-center justify-center gap-y-4">
                <div className="w-8 h-8 animate-spin" />
                Loading...
            </div>
        );
    }

    return isAuthenticated ? children : <Navigate to={LOGIN_PATH} />;
}

export default ProtectedRoute;

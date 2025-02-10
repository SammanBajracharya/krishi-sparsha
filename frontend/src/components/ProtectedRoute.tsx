import { Navigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import { useEffect } from "react";

interface ProtectedRouteProps {
    children: React.ReactNode;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
    const { isLoggedIn, userData, fetchUserData } = useAuth();

    useEffect(() => {
        fetchUserData().catch((error) => {
            console.error("Failed to fetch user data:", error);
        });
    }, []);

    if (!isLoggedIn) { return children; }

    if (!userData) {
        return;
    }

    if (userData.user_type === "farmer") { return <Navigate to={`/dashboard/${userData.id}`} />; }
    else { return <Navigate to="/marketplace" />; }
};

export default ProtectedRoute;

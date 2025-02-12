import React, { useEffect } from 'react';
import { useAuth } from '@/context/AuthContext';
import { useNavigate } from 'react-router-dom';

const JWTProvider = ({ children }: { children: React.ReactNode }) => {
    const { isLoggedIn, fetchUserData, refreshToken } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        const checkAuth = async () => {
            if (isLoggedIn) {
                try {
                    await fetchUserData();
                } catch (error) {
                    console.error("Failed to fetch user data:", error);
                    await refreshToken();
                }
            }
        };

        checkAuth();
    }, [isLoggedIn, fetchUserData, refreshToken, navigate]);

    return <>{children}</>;
};

export default JWTProvider;

import { useEffect, useState } from "react";

import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
} from '@/components/ui/dropdown-menu';
import { useAuth } from '@/context/AuthContext';
import { Loader } from "lucide-react";

export const UserButton = () => {
    const { userData, isLoading, logout, fetchUserData } = useAuth();
    const [isUserDataLoaded, setIsUserDataLoaded] = useState(false);

    useEffect(() => {
        const loadUserData = async () => {
            await fetchUserData();
            setIsUserDataLoaded(true);
        };
        loadUserData().catch((error) => {
            console.error("Failed to fetch user data:", error);
        });
    }, []);

    if ( !isUserDataLoaded) {
        return (
            <div className="flex justify-end">
                <Loader />;
            </div>
        );
    }

    console.log(isLoading);

    if (!userData) {
        return null;
    }

    return (
        <div className="cursor-pointer">
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                    <DropdownMenuGroup>
                        { userData.user_type === "farmer" ? (
                            <>
                                <a href={`/profile/${userData.id}`} className="cursor-pointer">
                                    <DropdownMenuItem>{userData.username}</DropdownMenuItem>
                                </a>
                                <a href={`/dashboard/${userData.id}`} className="cursor-pointer">
                                    <DropdownMenuItem>Dashboard</DropdownMenuItem>
                                </a>
                            </>
                        ) : (
                                <DropdownMenuItem>{userData.username}</DropdownMenuItem>
                        ) }
                    </DropdownMenuGroup>
                    <DropdownMenuGroup>
                        <DropdownMenuItem onClick={logout}>Logout</DropdownMenuItem>
                    </DropdownMenuGroup>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    );
};

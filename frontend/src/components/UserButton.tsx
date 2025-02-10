import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
} from '@/components/ui/dropdown-menu';
import { useAuth } from '@/context/AuthContext';

export const UserButton = () => {
    const { logout, userData } = useAuth();

    console.log(userData);

    if (!userData) {
        return null;
    }

    return (
        <div className="cursor-pointer flex justify-end">
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                    <DropdownMenuGroup>
                        <a href={`/profile/${userData.id}`}>
                            <DropdownMenuItem>{ userData.username }</DropdownMenuItem>
                        </a>
                    </DropdownMenuGroup>
                    <DropdownMenuGroup>
                        <DropdownMenuItem onClick={logout}>Logout</DropdownMenuItem>
                    </DropdownMenuGroup>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    );
};

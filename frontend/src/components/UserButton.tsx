import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

export const UserButton = () => {
    return (
        <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
        </Avatar>
    );
};

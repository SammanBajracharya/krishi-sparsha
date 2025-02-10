"use client";

import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface BackButtonProps {
    href: string;
    label: string;
}

export const BackButton = ({ label, href }: BackButtonProps) => {
    return (
        <Button
            variant="link"
            className="font-nomral w-full"
            size="sm"
        >
            <Link className="text-sm text-black" to={href}>
                {label}
            </Link>
        </Button>
    );
};

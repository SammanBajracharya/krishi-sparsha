import { cn } from "@/lib/utils";

export const Separator = ({ className } : { className?: string }) => {
    return (
        <div id="separator" className={cn("w-full h-[1px] bg-gray-400/40", className)} />
    );
};

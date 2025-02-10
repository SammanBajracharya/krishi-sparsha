import * as z from "zod";
import { Card } from "@/components/ui/card";

import { Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TodoSchema } from "@/schemas/index";

interface TodoCardProps {
    todo: z.infer<typeof TodoSchema>;
    onDelete: (id: string) => void;
    key?: string | number,
};

export const TodoCard = ({ todo, onDelete }: TodoCardProps) => {
    return (
        <Card className="flex items-center justify-between px-3 py-1 rounded-md">
            <span>{ todo.title }</span>
            <Button variant="ghost" size="icon" onClick={() => onDelete(todo.id)}>
                <Trash2 className="text-red-700" />
            </Button>
        </Card>
    );
};

"use client";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { useToast } from "@/hooks/use-toast";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { TodoCard } from "./TodoCard";

import api from "@/api";
import { TodoSchema } from "@/schemas/index";

const Home = () => {
    const { toast } = useToast();
    const [todos, setTodos] = useState([]);
    const navigate = useNavigate();

    const form = useForm<z.infer<typeof TodoSchema>>({
        resolver: zodResolver(TodoSchema),
        defaultValues: {
            title: "",
        }
    });

    useEffect(() => {
        getTodos();
        console.log(todos);
    }, []);

    const getTodos = () => {
        api.get("/api/todos/").
            then((res) => res.data).
            then((data) => {
                setTodos(data);
            }).
            catch((err) => console.log(err));
    }

    const createTodo = (values: z.infer<typeof TodoSchema>) => {
        const validatedData = TodoSchema.safeParse(values);
        if (!validatedData.success) {
            return;
        }
        const { title } = validatedData.data;
        console.log("title: ", title);

        api.post("/api/todos/", { title }).
            then((res) => {
                if (res.status === 201) toast({ title: "Todo created!", variant: "success" });
                else toast({ title: "Failed to make todo.", variant: "destructive" });
                getTodos();
            }).
            catch((err) => console.log(err));

        form.reset({
            title: ""
        });
    }

    const deleteTodo = (id: string) => {
        api.delete(`/api/todos/delete/${id}/`).
            then((res) => {
                if (res.status === 204) toast({ title: "Todo deleted!", variant: "success" });
                else toast({ title: "Failed to delete todo.", variant: "destructive" });
                getTodos();
            }).
            catch((err) => {
                if (err.response?.status === 401) {
                    toast({ title: "Unathorized! Please log in.", variant: "destructive" });
                    navigate("/auth/login");
                } else {
                    console.log(err);
                }
            });
    }

    return (
        <main className="flex flex-col gap-y-6 px-16 py-4">
            <section>
                <Card className="max-w-lg mx-auto flex flex-col px-2 py-1">
                    <CardHeader>
                        Your Todos
                    </CardHeader>
                    <CardContent>
                        <Form {...form}>
                            <form
                                className="space-y-2"
                                onSubmit={form.handleSubmit(createTodo)}
                            >
                                <Button
                                    variant="outline"
                                    size="lg"
                                    className="w-full"
                                >
                                    Add Todo
                                </Button>
                                <FormField
                                    control={form.control}
                                    name="title"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormControl>
                                                <Input
                                                    type="text"
                                                    {...field}
                                                    disabled={false}
                                                    placeholder="Enter todos..."
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </form>
                        </Form>
                        <div className="w-full my-6 h-[1px] bg-gray-200"/>
                        <div className="space-y-2">
                            { todos.length === 0 ? (
                                <p>No Todos..</p>
                            ) :
                                todos.map((todo) => (
                                    <TodoCard todo={todo} onDelete={deleteTodo} key={todo.id} />
                                ))
                            }
                        </div>
                    </CardContent>
                </Card>
            </section>
        </main>
    );
};

export default Home;

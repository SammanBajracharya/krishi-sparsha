import * as z from "zod";

import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import api from "@/api";
import axios from "axios";

import { CardWrapper } from "@/components/auth/card-wrapper";

import { RegisterSchema } from "@/schemas/index";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FormError } from "@/components/form-error";
import { FormSuccess } from "@/components/form-success";
import { useNavigate } from "react-router-dom";
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "@/components/ui/select";

import { USER_TYPE } from "@/constants";

const Register = () => {
    const [error, setError] = useState<string | undefined>("");
    const [success, setSuccess] = useState<string | undefined>("");
    const [isPending, startTransition] = useTransition();
    const navigate = useNavigate();
    const form = useForm<z.infer<typeof RegisterSchema>>({
        resolver: zodResolver(RegisterSchema),
        defaultValues: {
            username: "",
            email: "",
            password: "",
            address: "",
            phone: "",
            user_type: undefined,
        }
    });

    const onSubmit = (values: z.infer<typeof RegisterSchema>) => {
        const validatedFields = RegisterSchema.safeParse(values);
        if (!validatedFields.success) {
            setError("Invalid Fields!");
            return;
        }

        const { username, email, password } = validatedFields.data;

        startTransition(async () => {
            try {
                await api.post("/api/user/register/", { username, email, password });
                setSuccess("Register successful!");
                navigate("/login");
            } catch (error: any) {
                if (axios.isAxiosError(error)) {
                    if (error.response) {
                        const errorMessages = error.response.data;

                        const formErrors: string[] = [];
                        if (errorMessages.email) {
                            formErrors.push(`${errorMessages.email.join(", ")}`);
                        }
                        if (errorMessages.username) {
                            formErrors.push(`${errorMessages.username.join(", ")}`);
                        }
                        if (errorMessages.password) {
                            formErrors.push(`${errorMessages.password.join(", ")}`);
                        }

                        setError(formErrors.join(" | "));
                    } else {
                        setError("No response from the server. Please check your network connection.");
                    }
                } else {
                    setError("An unexpected error occurred.");
                }
            }
        });
    };

    return (
        <div className="w-screen px-4 py-16">
            <CardWrapper
                headerLabel="Create an account"
                footerLabel="Already have an account!"
                footerHref="/login"
            >
                <Form {...form}>
                    <form
                        className="space-y-6"
                        onSubmit={form.handleSubmit(onSubmit)}
                    >
                        <div className="space-y-4">
                            <FormField
                                control={form.control}
                                name="username"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Username</FormLabel>
                                        <FormControl>
                                            <Input
                                                type="username"
                                                {...field}
                                                disabled={isPending}
                                                placeholder="John Doe"
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Email</FormLabel>
                                        <FormControl>
                                            <Input
                                                type="email"
                                                {...field}
                                                disabled={isPending}
                                                placeholder="john.doe@domail.com"
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="password"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Password</FormLabel>
                                        <FormControl>
                                            <Input
                                                type="password"
                                                {...field}
                                                disabled={isPending}
                                                placeholder="******"
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="address"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Address</FormLabel>
                                        <FormControl>
                                            <Input
                                                type="address"
                                                {...field}
                                                disabled={isPending}
                                                placeholder="1234 Main St"
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="phone"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Phone</FormLabel>
                                        <FormControl>
                                            <Input
                                                type="phone"
                                                {...field}
                                                disabled={isPending}
                                                placeholder="+1234567890"
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="user_type"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>User Type</FormLabel>
                                        <Select
                                            disabled={isPending}
                                            onValueChange={field.onChange}
                                            defaultValue={field.value}
                                        >
                                            <FormControl>
                                                <SelectTrigger
                                                >
                                                    <SelectValue placeholder="Select User Type" className="placeholder:text-muted-foreground placeholder:text-base" />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                {USER_TYPE.map((type) => (
                                                    <SelectItem className="text-sm" key={type} value={type}>
                                                        {type}
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <FormError message={error} />
                        <FormSuccess message={success} />
                        <Button
                            disabled={isPending}
                            variant="default"
                            size="lg"
                            className="w-full"
                        >
                            Sign up
                        </Button>
                    </form>
                </Form>
            </CardWrapper>
        </div>
    );
};

export default Register;

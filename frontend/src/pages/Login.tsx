import * as z from "zod";

import { useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { CardWrapper } from "@/components/auth/card-wrapper";

import { LoginSchema } from "@/schemas/index";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FormError } from "@/components/form-error";
import { FormSuccess } from "@/components/form-success";
import { useAuth } from "@/context/AuthContext";

const Login = () => {
    const [isPending, startTransition] = useTransition();
    const { login, error, success, resetMessages } = useAuth();

    const form = useForm<z.infer<typeof LoginSchema>>({
        resolver: zodResolver(LoginSchema),
        defaultValues: {
            email: "",
            password: "",
        }
    });

    const onSubmit = (values: z.infer<typeof LoginSchema>) => {
        const validatedFields = LoginSchema.safeParse(values);
        if (!validatedFields.success) {
            resetMessages();
            return;
        }

        const { email, password } = validatedFields.data;

        startTransition(async () => {
            resetMessages();
            login(email, password);
        });
    };

    return (
        <div className="w-screen px-4 py-16 flex items-center justify-center">
            <CardWrapper
                headerLabel="Welcome back!"
                footerLabel="Don't have an account!"
                footerHref="/register"
            >
                <Form {...form}>
                    <form
                        className="space-y-6"
                        onSubmit={form.handleSubmit(onSubmit)}
                    >
                        <div className="space-y-4">
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
                        </div>
                        <FormError message={error} />
                        <FormSuccess message={success} />
                        <Button
                            disabled={isPending}
                            variant="default"
                            size="lg"
                            className="w-full"
                        >
                            Log in
                        </Button>
                    </form>
                </Form>
            </CardWrapper>
        </div>
    );
};

export default Login;

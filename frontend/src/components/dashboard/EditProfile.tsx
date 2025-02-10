import { useEffect, useTransition, useState } from "react";
import { useAuth } from "@/context/AuthContext";

import * as z from "zod";
import { UserSchema } from "@/schemas";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FormError } from "@/components/form-error";
import { FormSuccess } from "@/components/form-success";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Textarea } from "../ui/textarea";

interface EditProfileProps {
    user: z.infer<typeof UserSchema>;
}

const EditProfile = ({ user }: EditProfileProps) => {
    const [error, setError] = useState<string | null>("");
    const [success, setSuccess] = useState<string | null>("");
    const [isPending, startTransition] = useTransition();
    const { userData, isLoading, fetchUserData } = useAuth();

    useEffect(() => {
        fetchUserData().catch((error) => {
            console.error("Failed to fetch user data:", error);
        });
    }, []);

    const form = useForm<z.infer<typeof UserSchema>>({
        resolver: zodResolver(UserSchema),
        defaultValues: {
            email: userData?.email || "",
            username: userData?.username || "",
            description: userData?.description || "",
            phone: userData?.phone || "",
            address: userData?.address || "",
        }
    });

    const onSubmit = (value: z.infer<typeof UserSchema>) => {
        console.log(value);
    }

    return (
        <>
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
                                                disabled={true}
                                                placeholder="john.doe@domail.com"
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
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
                                                disabled={false}
                                                placeholder="john.doe"
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="description"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Description</FormLabel>
                                        <FormControl>
                                            <Textarea
                                                {...field}
                                                disabled={false}
                                                placeholder="Tell us about yourself..."
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
                                                type="number"
                                                {...field}
                                                disabled={false}
                                                placeholder="98********"
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
                                                type="text"
                                                {...field}
                                                disabled={false}
                                                placeholder="Kathmandu, Nepal"
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <FormError message={error as string} />
                        <FormSuccess message={success as string} />
                        <Button
                            disabled={isPending}
                            variant="default"
                            size="lg"
                            className="w-full"
                        >
                            Update
                        </Button>
                    </form>
                </Form>
        </>
    );
};

export default EditProfile;

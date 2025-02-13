import { useTransition, useState } from "react";

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
import api from "@/api";

interface EditProfileProps {
    user: z.infer<typeof UserSchema>;
}

const EditProfile = ({ user }: EditProfileProps) => {
    const [error, setError] = useState<string | null>("");
    const [success, setSuccess] = useState<string | null>("");
    const [isPending, startTransition] = useTransition();

    const form = useForm<z.infer<typeof UserSchema>>({
        resolver: zodResolver(UserSchema),
        defaultValues: {
            username: user.username || "",
            description: user.description || "",
            phone: user.phone || "",
            address: user.address || "",
            email: user.email || "",
        }
    });

    const onSubmit = (values: z.infer<typeof UserSchema>) => {
        console.log(values);
        const validatedFields = UserSchema.safeParse(values);
        if (!validatedFields.success) {
            setError("Invalid Fields!");
            console.log("Validation failed:", validatedFields.error);
            return null;
        }

        const { username, address, phone, description, email } = validatedFields.data;
        startTransition(async () => {
            try {
                const res = await api.patch(`/users/update/${user.id}`, {
                    username,
                    address,
                    phone,
                    description,
                    email
                });
                console.log("API response:", res);
                setSuccess("Successfully updated user!");
            } catch (error) {
                setError("Failed to update user.");
                console.error("Update error:", error);
            }
        });
    }

    return (
        <section className="flex flex-col gap-y-6 px-12 py-4">
            <h2>Edit Your Profile</h2>
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
                                            type="text"
                                            {...field}
                                            disabled={true}
                                            placeholder="john.doe"
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
                                            type="text"
                                            {...field}
                                            disabled={isPending}
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
                                            disabled={isPending}
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
                                            type="tel"
                                            {...field}
                                            disabled={isPending}
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
        </section>
    );
};

export default EditProfile;

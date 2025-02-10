import { useTransition, useState } from "react";

import * as z from "zod";
import { ProductSchema } from "@/schemas";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FormError } from "@/components/form-error";
import { FormSuccess } from "@/components/form-success";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Textarea } from "../ui/textarea";
import api from "@/api";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@radix-ui/react-select";


const CATOGORY_TYPE = ["seeds", "fruits", "vegetables", "flowers", "dairy"];
const Product = ({ userId }: { userId: string }) => {
    const [error, setError] = useState<string | null>("");
    const [success, setSuccess] = useState<string | null>("");
    const [isPending, startTransition] = useTransition();

    const form = useForm<z.infer<typeof ProductSchema>>({
        resolver: zodResolver(ProductSchema),
        defaultValues: {
            name: "",
            description: "",
            price: 0.0,
            image: "",
            salesNumber: 0.0,
            category: undefined,
            quantity: 0.0,
        }
    });

    const onSubmit = (values: z.infer<typeof ProductSchema>) => {
        console.log(values);
        const validatedFields = ProductSchema.safeParse(values);
        if (!validatedFields.success) {
            setError("Invalid Fields!");
            console.log("Validation failed:", validatedFields.error);
            return null;
        }

        const { name, description, price, image, salesNumber, category, quantity } = validatedFields.data;
        const product_owner = userId;
        startTransition(async () => {
            try {
                const res = await api.patch(`/products/`, {
                    name,
                    description,
                    price,
                    image,
                    salesNumber,
                    category,
                    quantity,
                    product_owner
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
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input
                                            type="text"
                                            {...field}
                                            disabled={true}
                                            placeholder="Organic Apples"
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
                            name="price"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Username</FormLabel>
                                    <FormControl>
                                        <Input
                                            type="number"
                                            {...field}
                                            disabled={isPending}
                                            placeholder="0.0"
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                            <FormField
                                control={form.control}
                                name="category"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>User Type</FormLabel>
                                        <Select
                                            disabled={isPending}
                                            value={field.value}
                                            onValueChange={field.onChange}
                                        >
                                            <FormControl>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Select User Type" className="capitalize placeholder:text-muted-foreground placeholder:text-base" />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                {CATOGORY_TYPE.map((type) => (
                                                    <SelectItem className="text-sm capitalize " key={type} value={type}>
                                                        {type}
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        <FormField
                            control={form.control}
                            name="quantity"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Username</FormLabel>
                                    <FormControl>
                                        <Input
                                            type="number"
                                            {...field}
                                            disabled={isPending}
                                            placeholder="0.0"
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

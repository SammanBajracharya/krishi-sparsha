import * as z from "zod";
import { v4 as uuidv4 } from "uuid";

export const UUIDSchema = z.string().uuid({ message: "Invalid UUID format." });

export const LoginSchema = z.object({
    email: z.string().email({
        message: "Email is required."
    }),
    password: z.string().min(1, {
        message: "Password is required.",
    }),
});

export const RegisterSchema = z.object({
    id: UUIDSchema.default(uuidv4),
    email: z.string().email({
        message: "Email is required."
    }),
    username: z.string().min(1, {
        message: "Username is required."
    }),
    password: z.string().min(6, {
        message: "Minimum 6 characters required.",
    }),
});

export const CategorySchema = z.enum(["seeds", "fruits", "vegetables", "flowers", "dairy"]);

export const ProductSchema = z.object({
    id: UUIDSchema.default(uuidv4),
    title: z.string().min(1, {
        message: "Title is required."
    }),
    description: z.string().min(1, {
        message: "Description is required."
    }),
    price: z.number().min(1, {
        message: "Price is required."
    }),
    image: z.string().min(1, {
        message: "Image is required."
    }),
    salesNumber: z.number().default(0),
    category: CategorySchema,
});

export const PaymentMethodSchema = z.enum(["cash on delivery", "esewa", "khalti"]);

export const CartItemSchema = z.object({
    productId: UUIDSchema,
    quantity: z.number().int().min(1, { message: "Quantity must be at least 1." }),
});

export const CartSchema = z.object({
    userId: UUIDSchema,
    items: z.array(CartItemSchema).nonempty({ message: "Cart must have at least one item." }),
});

export const OrderItemSchema = CartItemSchema.extend({
    price: z.number().min(0, { message: "Price must be at least 0." }), // Ensure price is included
});

export const OrderSchema = z.object({
    orderId: UUIDSchema.default(uuidv4),
    userId: UUIDSchema,
    items: z.array(OrderItemSchema).nonempty({ message: "Order must have at least one item." }),
    totalPrice: z.number().min(0, { message: "Total price must be at least 0." }),
    orderDate: z.preprocess((arg) => (typeof arg === "string" || arg instanceof Date ? new Date(arg) : arg), z.date()),
    paymentMethod: PaymentMethodSchema,
});

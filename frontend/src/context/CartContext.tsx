import React, { createContext, useContext, useState, useEffect } from "react";

interface CartItem {
    id: string;
    name: string;  // Changed from title to name for consistency
    quantity: number;
    price: number;
}

interface CartContextType {
    cart: CartItem[];
    addToCart: (item: { id: string; name: string; price: number; quantity: number }) => void;
    removeFromCart: (id: string) => void;
    clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
    const [cart, setCart] = useState<CartItem[]>(() => {
        if (typeof window !== "undefined") {
            try {
                const storedCart = localStorage.getItem("cart");
                return storedCart ? JSON.parse(storedCart) : [];
            } catch (error) {
                console.error("Failed to load cart from localStorage", error);
                return [];
            }
        }
        return [];
    });

    useEffect(() => {
        try {
            if (cart.length === 0) {
                localStorage.removeItem("cart");
            } else {
                localStorage.setItem("cart", JSON.stringify(cart));
            }
        } catch (error) {
            console.error("Failed to save cart to localStorage", error);
        }
    }, [cart]);

    const addToCart = (item: Omit<CartItem, "name">) => {
        if (!item.id) {
            console.error("Item must have an ID!");
            return;
        }

        setCart((prevCart) => {
            const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);
            if (existingItem) {
                return prevCart.map((cartItem) =>
                    cartItem.id === item.id
                        ? { ...cartItem, quantity: cartItem.quantity + item.quantity }
                        : cartItem
                );
            }
            return [...prevCart, item]; // Adds new item separately
        });
    };

    const removeFromCart = (id: string) => {
        setCart((prevCart) => prevCart.filter((cartItem) => cartItem.id !== id));
    };

    const clearCart = () => {
        setCart([]);
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error("useCart must be used within a CartProvider");
    }
    return context;
};

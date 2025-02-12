import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/card";
import { useCart } from "@/context/CartContext";
import { Separator } from "@/components/ui/separator";

import Esewa from "@/assets/esewa.svg";

const Checkout: React.FC = () => {
    const { cart, removeFromCart, clearCart } = useCart();

    console.log(cart);
    const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

    return (
        <section className="px-10 py-12">
            <Card>
                <CardHeader>
                    <h2>Your Cart</h2>
                </CardHeader>
                <Separator />
                <CardContent>
                    {cart.length === 0 ? (
                        <p>Your cart is empty.</p>
                    ) : (
                        <ul className="space-y-4">
                            {cart.map(item => (
                                <li key={item.id} className="flex justify-between items-center">
                                        <div className="space-y-2">
                                        <h3>{item.title}</h3>
                                        <p className="text-sm text-gray-600">
                                            ${item.price.toFixed(2)} x {item.quantity}
                                        </p>
                                    </div>
                                    <Button
                                        onClick={() => removeFromCart(item.id)}
                                        variant="link"
                                        className="px-0 text-red-700"
                                    >
                                        Remove
                                    </Button>
                                </li>
                            ))}
                        </ul>
                    )}
                </CardContent>
                <Separator />
                <CardFooter className="flex flex-col items-start">
                    <h3 className="mb-2">Total: ${total.toFixed(2)}</h3>
                    <p className="max-w-lg mb-6">
                        Receive a 20% discount on your next purchase by returning
                        biodegradable waste to farmers, contributing to a sustainable
                        agricultural cycle.
                    </p>
                    <div className="gap-x-4 flex items-start">

                        <Button size="lg" variant="primary">Buy Now</Button>
                        <Button variant="outline" size="lg" className="text-primary">
                            Apply Discount
                        </Button>
                    </div>
                        <a className="flex items-center gap-x-2 mt-4" href="/" target="_blank">
                            Pay with <img src={Esewa} alt="esewa" />
                        </a>
                </CardFooter>
            </Card>
        </section>
    );
};

export default Checkout;

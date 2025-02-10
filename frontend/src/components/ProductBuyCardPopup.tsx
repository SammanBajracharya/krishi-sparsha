import * as z from "zod";
import { ProductSchema } from "@/schemas/index";
import { Card, CardContent } from "@/components/ui/card";
import { X } from "lucide-react";
import { Button } from "./ui/button";

interface ProductDetailProps {
    product: z.infer<typeof ProductSchema>;
    onClose: () => void;
};

export const ProductDetailCard = ({ product, onClose }: ProductDetailProps) => {
    if (!product) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <Card className="h-3/5 max-w-lg">
                <CardContent className="h-full px-4 py-6 flex items-center gap-x-4">
                    <img
                        src={product.image}
                        alt={product.title}
                        className="h-full w-6/12 rounded-sm object-cover"
                    />
                    <div className="w-8/12 h-full flex flex-col justify-between">
                        <div>
                            <div className="flex items-center justify-between mb-6">
                                <h2 className="font-semibold">Rs.<span className="text-4xl leading-3 font-semibold text-primary">
                                    {product.price}
                                </span><span className="text-gray-500 leading-3"> / per kg</span></h2>
                                <Button className="text-black hover:text-red-700" variant="link" size="icon" onClick={onClose}>
                                    <X />
                                </Button>
                            </div>
                            <div>
                                <h2 className="text-2xl font-semibold">{product.title}</h2>
                                <p className="text-gray-600">{product.description}</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-x-2">
                            <Button variant="primary" size="lg">
                                Buy Now
                            </Button>
                            <Button variant="outline" size="lg">
                                Add to Cart
                            </Button>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

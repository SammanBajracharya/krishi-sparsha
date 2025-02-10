import { useState } from "react";
import * as z from "zod";

import { mockProducts } from "@/mockData";
import { ProductCard } from "@/components/ProductCard";
import { ProductSchema } from "../schemas/index";
import { ProductDetailCard } from "./ProductDetailCard";

export const Profile = () => {
    const [isProductBuyCardOpen, setIsProductBuyOpenPopup] = useState<boolean>(false);
    const [selectedProduct, setSelectedProduct] = useState<z.infer<typeof ProductSchema> | null>(null);

    const handleViewDetailButtonClick = (product: z.infer<typeof ProductSchema>) => {
        setSelectedProduct(product);
        setIsProductBuyOpenPopup(true);
    };

    const handleAddToCartButtonClick = (productName: string) => {
        console.log(`Adding ${productName} to cart`);
    };

    return (
        <section className="space-y-12 pb-10">
            <div className="flex flex-col gap-4">
                <h1 className="mb-2">About us</h1>
                <p className="max-w-2xl">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur lobortis pellentesque nibh, eu fermentum justo tempor ut. Vivamus nec luctus risus. Vivamus sit amet ante eget dui convallis feugiat ac eu nisl.<br/><br/>
                    Nulla mollis eget lacus vitae pellentesque. Phasellus sed lorem non nisi accumsan lacinia at et libero. Duis nec ligula luctus, pellentesque velit sed, congue lectus. Mauris fringilla lectus sed vestibulum ornare. Nam ac eleifend tortor. Nam finibus ante sit amet felis eleifend, et gravida turpis vulputate.
                </p>
            </div>
            <div className="flex flex-col gap-4">
                <h1 className="mb-2">Our Products</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10">
                    {mockProducts.slice(0, 4).map((data, index) => {
                        const parsedProduct = ProductSchema.safeParse(data);  // Validate using Zod schema
                        if (!parsedProduct.success) {
                            console.error("Invalid product data", parsedProduct.error);
                            return null;
                        }
                        return (
                            <ProductCard
                                key={index}
                                buyNowHref=""
                                price={parsedProduct.data.price}
                                productName={parsedProduct.data.title}
                                image={parsedProduct.data.image}
                                viewDetailButtonOnClick={() => handleViewDetailButtonClick(parsedProduct.data)}
                                addToCardButtonOnClick={() => handleAddToCartButtonClick(parsedProduct.data.title)}
                            />
                        );
                    })}
                </div>
            </div>
            { isProductBuyCardOpen && (
                <ProductDetailCard
                    product={selectedProduct}
                    buyNowHref=""
                    onClose={() => setIsProductBuyOpenPopup(false)}
                />
            )}
        </section>
    )
}

import * as z from "zod";
import { useState } from "react";

import { mockProducts, mockUsers } from "../mockData";

import { Separator } from "../components/ui/separator";
import { ProductSchema } from "../schemas/index";
import { ProductDetailCard } from "@/components/ProductDetailCard";
import { ProfileCard } from "@/components/ProfileCard";

const FindDealsPage = () => {
    const [isProductBuyCardOpen, setIsProductBuyOpenPopup] = useState<boolean>(false);
    const [selectedProduct, setSelectedProduct] = useState<z.infer<typeof ProductSchema> | null>(null);

    const handleViewDetailButtonClick = (product: z.infer<typeof ProductSchema>) => {
        setSelectedProduct(product);
        setIsProductBuyOpenPopup(true);
    };

    const handleAddToCartButtonClick = (productId: string) => {
        console.log(`Adding ${productId} to cart`);
    };

    return (
        <section>
            <div className="max-w-5xl mx-auto px-4 py-10 space-y-8">
                <div>
                    <h1>Find Deals</h1>
                    <p className="mt-2 text-gray-500">Find the best deals from the best businesses</p>
                </div>
                <Separator />
                { mockUsers.map((user, index) => (
                    <ProfileCard
                        key={index}
                        handleAddToCartButtonClick={handleAddToCartButtonClick}
                        handleViewDetailButtonClick={handleViewDetailButtonClick}
                        products={mockProducts}
                        user={user}
                    />
                ))}
            </div>
            { isProductBuyCardOpen && (
                <ProductDetailCard
                    product={selectedProduct}
                    buyNowHref=""
                    onClose={() => setIsProductBuyOpenPopup(false)}
                />
            )}
        </section>
    );
}

export default FindDealsPage;

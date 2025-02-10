import * as z from "zod";

import { Separator } from "@radix-ui/react-dropdown-menu";
import { Card, CardHeader, CardContent } from "../components/ui/card";
import { BusinessInfo } from "./BusinessInfo";
import { ProductSchema, UserSchema } from "../schemas/index";
import { ProductCard } from "./ProductCard";

interface ProfileCardProps {
    products: Array<z.infer<typeof ProductSchema>>;
    handleViewDetailButtonClick: (values: z.infer<typeof ProductSchema>) => void;
    handleAddToCartButtonClick: (productId: string) => void;
    user: z.infer<typeof UserSchema>;
}

export const ProfileCard = ({
    products,
    handleAddToCartButtonClick,
    handleViewDetailButtonClick,
    user,
}: ProfileCardProps) => {
    return (
        <Card>
            <CardHeader>
                <BusinessInfo
                    id={user.id as string}
                    image={user.image as string}
                    businessName={user.username}
                    mobile={user.phone as string}
                    location={user.address as string}
                    rating={user.rating as number}
                />
            </CardHeader>
            <Separator />
            <CardContent className="py-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {/** TODO: filter based on sales */}
                    {/** TODO: Also have productowner */}
                    {products.slice(0, 3).map((data, index) => {
                        const parsedProduct = ProductSchema.safeParse(data);
                        if (!parsedProduct.success) {
                            console.error("Invalid product data", parsedProduct.error);
                            return null;
                        }
                        return (
                            <ProductCard
                                key={index}
                                price={parsedProduct.data.price}
                                productName={parsedProduct.data.name}
                                image={parsedProduct.data.image}
                                buyNowHref=""
                                viewDetailButtonOnClick={() => handleViewDetailButtonClick(parsedProduct.data)}
                                addToCardButtonOnClick={() => handleAddToCartButtonClick(parsedProduct.data.id)}
                            />
                        );
                    })}
                </div>
            </CardContent>
        </Card>
    );
};

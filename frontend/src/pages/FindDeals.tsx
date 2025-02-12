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

    const [currentPage, setCurrentPage] = useState(1);
    const profilesPerPage = 4;

    const totalPages = Math.ceil(mockUsers.length / profilesPerPage);

    const indexOfLastProfile = currentPage * profilesPerPage;
    const indexOfFirstProfile = indexOfLastProfile - profilesPerPage;
    const currentProfiles = mockUsers.slice(indexOfFirstProfile, indexOfLastProfile);

    const handleViewDetailButtonClick = (product: z.infer<typeof ProductSchema>) => {
        setSelectedProduct(product);
        setIsProductBuyOpenPopup(true);
    };

    const handleAddToCartButtonClick = (productId: string) => {
        console.log(`Adding ${productId} to cart`);
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
            window.scrollTo(0, 0); // Scroll to top
        }
    };

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
            window.scrollTo(0, 0); // Scroll to top
        }
    };

    return (
        <section>
            <div className="max-w-5xl mx-auto px-4 py-10 space-y-8">
                <div>
                    <h1>Find Deals</h1>
                    <p className="mt-2 text-gray-500">Find the best deals from the best businesses</p>
                </div>
                <Separator />
                <div className='grid grid-cols-1 gap-6'>
                    {currentProfiles.map((user, index) => (
                        <ProfileCard
                            id={user.id}
                            key={index}
                            handleAddToCartButtonClick={handleAddToCartButtonClick}
                            handleViewDetailButtonClick={handleViewDetailButtonClick}
                            products={mockProducts}
                            user={user}
                        />
                    ))}
                </div>
                <div className='flex justify-between'>
                    <button onClick={handlePrevPage} disabled={currentPage === 1}>
                        Previous
                    </button>
                    <span>Page {currentPage} of {totalPages}</span>
                    <button onClick={handleNextPage} disabled={currentPage === totalPages}>
                        Next
                    </button>
                </div>
            </div>
            {isProductBuyCardOpen && (
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

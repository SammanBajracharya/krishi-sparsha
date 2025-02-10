import * as z from "zod";

import { useState } from 'react';
import {Searchbox} from '@/components/Searchbox'
import { ProductCard } from '@/components/ProductCard'
import { mockProducts } from '@/mockData'
import { ProductDetailCard } from '@/components/ProductDetailCard';
import { ProductSchema } from '@/schemas/index';
import Carousel from "@/components/Caraousel"
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

function Marketplace() {
    const [isProductBuyCardOpen, setIsProductBuyOpenPopup] = useState<boolean>(false);
    const [selectedProduct, setSelectedProduct] = useState<z.infer<typeof ProductSchema> | null>(null);

    // Pagination state
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 12; // Number of products to display per page

    // Calculate total pages
    const totalPages = Math.ceil(mockProducts.length / productsPerPage);

    // Get current products
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = mockProducts.slice(indexOfFirstProduct, indexOfLastProduct);

    const handleViewDetailButtonClick = (product: z.infer<typeof ProductSchema>) => {
        setSelectedProduct(product);
        setIsProductBuyOpenPopup(true);
    };

    const handleAddToCartButtonClick = (productName: string) => {
        console.log(`Adding ${productName} to cart`);
    };

    // Pagination handlers
    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    return (
        <div className='flex flex-col gap-8 p-4 pb-12'>
            <div className='flex justify-center p-2'>
                <Carousel/>
            </div>
            <div className=' flex flex-col gap-4'>
                <div className='text-3xl font-semibold'>
                    Trending Products
                </div>
                <div className='grid grid-cols-4 gap-x-6 gap-y-10 px-2 py-4'>
                    {/** TODO: filter based on sales */}
                    {currentProducts.slice(0,4).map((data, index) => {
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
                                productName={parsedProduct.data.name}
                                image={parsedProduct.data.image}
                                viewDetailButtonOnClick={() => handleViewDetailButtonClick(parsedProduct.data)}
                                addToCardButtonOnClick={() => handleAddToCartButtonClick(parsedProduct.data.name)}
                            />
                        );
                    })}
                </div>
            </div>
            <div className=' p-2 flex flex-col gap-4'>
                <div className='flex justify-between'>
                    <div className='text-3xl font-semibold'>Products</div>
                    <div className='flex'>
                        <p className='flex items-center'><Searchbox/></p>
                    </div>
                </div>
                <div className='grid grid-cols-4 gap-x-6 gap-y-10 px-2 py-4'>
                    {currentProducts.map((data, index) => {
                        const parsedProduct = ProductSchema.safeParse(data);  // Validate using Zod schema
                        if (!parsedProduct.success) {
                            console.error("Invalid product data", parsedProduct.error);
                            return null;  // Skip invalid products
                        }
                        return (
                            <ProductCard
                                key={index}
                                price={parsedProduct.data.price}
                                productName={parsedProduct.data.name}
                                image={parsedProduct.data.image}
                                buyNowHref=""
                                viewDetailButtonOnClick={() => handleViewDetailButtonClick(parsedProduct.data)}
                                addToCardButtonOnClick={() => handleAddToCartButtonClick(parsedProduct.data.name)}
                            />
                        );
                    })}
                </div>
            </div>
            {/* Pagination Controls */}
            <div className='flex items-center justify-center gap-x-2'>
                <Button variant="link" size="icon" className="w-7 h-7 text-black hover:bg-white rounded-full" onClick={handlePrevPage} disabled={currentPage === 1}>
                    <ChevronLeft />
                </Button>
                <span>{currentPage} of {totalPages}</span>
                <Button variant="link" size="icon" className="w-7 h-7 text-black hover:bg-white rounded-full" onClick={handleNextPage} disabled={currentPage === totalPages}>
                    <ChevronRight />
                </Button >
            </div>
            { isProductBuyCardOpen && (
                <ProductDetailCard
                    product={selectedProduct}
                    buyNowHref=""
                    onClose={() => setIsProductBuyOpenPopup(false)}
                />
            )}
        </div>
    )
}

export default Marketplace

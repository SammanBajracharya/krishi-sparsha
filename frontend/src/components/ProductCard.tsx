import { Button } from "./ui/button";

interface ProductCardProps {
    price: number | string;
    productName: string;
    viewDetailButtonOnClick: () => void;
    buyNowHref: string;
    addToCardButtonOnClick: () => void;
    image: string;
}

export const ProductCard = ({
    price,
    productName,
    image,
    viewDetailButtonOnClick,
    buyNowHref,
    addToCardButtonOnClick,
}: ProductCardProps) => {
    return (
        <div className="flex flex-col">
            <img
                src={image}
                className="w-full h-40 object-cover rounded-md"
            />
            <p className="mt-2">Rs. {price} per kg</p>
            <h3 className="font-bold mb-4 cursor-pointer hover:underline" onClick={viewDetailButtonOnClick}>{productName}</h3>
            <div className="flex flex-col lg:flex-row items-center justify-between gap-2">
                <a href={buyNowHref} className="w-full">
                    <Button variant="primary" size="lg" className="w-full px-0">
                        Buy Now
                    </Button>
                </a>
                <Button variant="outline" size="lg" className="w-full px-0" onClick={addToCardButtonOnClick}>
                    Add To Cart
                </Button>
            </div>
        </div>
    );
};

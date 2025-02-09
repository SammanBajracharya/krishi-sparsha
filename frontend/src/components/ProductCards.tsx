import { Button } from "./ui/button";

interface ProductCardProps {
    price: number | string;
    productName: string;
    buyButtonOnClick?: () => void;
    addToCardButtonOnClick?: () => void;
}

export const ProductCards = ({
    price,
    productName,
    buyButtonOnClick,
    addToCardButtonOnClick,
}: ProductCardProps) => {
    return (
        <div className="flex flex-col">
            <img
                src="https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/1015f/MainBefore.jpg"
                className="w-full h-40 object-cover rounded-md"
            />
            <p className="mt-2">Rs. {price} per kg</p>
            <p className="font-bold mb-2">{productName}</p>
            <div className="flex items-center justify-between gap-x-2">
                <Button variant="primary" size="lg" onClick={buyButtonOnClick}>
                    Buy Now
                </Button>
                <Button variant="outline" size="lg" onClick={addToCardButtonOnClick}>
                    Add To Cart
                </Button>
            </div>
        </div>
    );
};

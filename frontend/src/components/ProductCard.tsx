import { useCart } from "@/context/CartContext";
import { Button } from "./ui/button";
import { useToast } from "@/hooks/use-toast";
import { ToastAction } from "@/components/ui/toast"
import { useNavigate } from "react-router-dom";

interface ProductCardProps {
    id: string;
    price: number;
    productName: string;
    image: string;
    buyNowHref: string;
    viewDetailButtonOnClick: () => void;
}

export const ProductCard = ({
    id,
    price,
    productName,
    image,
    buyNowHref,
    viewDetailButtonOnClick,
}: ProductCardProps) => {
    const { toast } = useToast();
    const navigate = useNavigate();
    const { addToCart } = useCart();

    const handleBuyNow = () => {
        addToCart({
            id,
            title: productName,
            quantity: 1,
            price,
        });
        navigate("/checkout");
    }

    const handleAddToCart = () => {

        addToCart({
            id,
            title: productName,
            quantity: 1,
            price,
        });
        toast({
          title: `${productName} added to cart`,
        })
    };

    return (
        <div className="flex flex-col bg-white rounded-md overflow-hidden shadow-sm">
            <img
                src={image}
                alt={productName}
                className="w-full h-40 object-cover"
            />
            <div className="px-4 py-3">
                <p className="mt-2">Rs. {price} per kg</p>
                <h3 className="font-bold mb-4 cursor-pointer hover:underline"
                    onClick={viewDetailButtonOnClick}>
                    {productName}
                </h3>
                <div className="flex flex-col lg:flex-row items-center justify-between gap-2">
                    <a href={buyNowHref} className="w-full">
                        <Button variant="primary" size="lg" className="w-full px-0" onClick={handleBuyNow}>
                            Buy Now
                        </Button>
                    </a>
                    <Button
                        variant="outline"
                        size="lg"
                        className="w-full px-0"
                        onClick={handleAddToCart}
                    >
                        Add To Cart
                    </Button>
                </div>
            </div>
        </div>
    );
};

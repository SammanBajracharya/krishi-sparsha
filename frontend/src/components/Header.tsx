import { Button } from "@/components/ui/button"
import logo from '@/assets/krishi.svg'
import { UserButton } from "@/components/UserButton";
import { useAuth } from "@/context/AuthContext";
import { ShoppingCart } from "lucide-react";

function Header() {
    const { isLoggedIn } = useAuth();

    return (
        <nav className="grid items-center grid-cols-3 p-4 border-b-[1px] border-gray-400/40">
            <a className="hover:scale-105 transition-all">
                <div>
                    <a href="/"><img src={logo} alt="Logo" /></a>
                </div>
            </a>
            <ul className="w-full flex gap-8 items-center justify-center text-lg">
                <li><a href="/">Home</a></li>
                <li><a href="/marketplace">Marketplace</a></li>
                <li><a href="/find-deals">Find Deals</a></li>
            </ul>
            {isLoggedIn ? (
                <div className="flex items-center justify-end gap-x-4">
                    <a href="/checkout" className="h-10 w-10 rounded-full bg-white flex items-center justify-center cursor-pointer">
                        <ShoppingCart />
                    </a>
                    <UserButton />
                </div>
            ) : (
                <div className="flex gap-4 justify-end">
                    <a href="/login">
                        <Button variant="primary" size="lg">Log in</Button>
                    </a>
                    <a href="/register">
                        <Button variant="outline" size="lg">Sign up</Button>
                    </a>
                </div>
            )}
        </nav>
    )
}

export default Header;

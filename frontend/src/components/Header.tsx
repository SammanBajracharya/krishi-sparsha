import { Button } from "@/components/ui/button"
import logo from '@/assets/krishi.svg'
import { UserButton } from "@/components/UserButton";
import { useAuth } from "@/context/AuthContext";

function Header() {
    const { isLoggedIn } = useAuth();

    return (
        <nav className="grid items-center grid-cols-3 p-4 border-b-[1px] border-gray-400/40">
            <a className="hover:scale-105 transition-all">
                <div>
                    <img src={logo} alt="Logo" />
                </div>
            </a>
            <ul className="w-full flex gap-8 items-center justify-center text-lg">
                <li><a href="/">Home</a></li>
                <li><a href="/marketplace">Marketplace</a></li>
                <li><a href="/find-deals">Find Deals</a></li>
            </ul>
            {isLoggedIn ? (
                <UserButton />
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

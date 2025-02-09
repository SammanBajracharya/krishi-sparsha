import { ACCESS_TOKEN } from "@/constants"
import { Button } from "@/components/ui/button"
import logo from '../assets/krishi.svg'

function Header() {
    const isLoggedIn = Boolean(localStorage.getItem(ACCESS_TOKEN));

    return (
        <nav className="flex justify-between items-center p-4 border-b-[1px] border-gray-400/40">
            <a className="hover:scale-105 transition-all">
                <div>
                    <img src={logo} alt="Logo" />
                </div>
            </a>
            <div className="flex">
                <nav className="w-full flex gap-8 justify-between text-lg">
                    <ul><a href="/">Home</a></ul>
                    <ul><a href="/marketplace">Marketplace</a></ul>
                    <ul><a href="/find-deals">Find Deals</a></ul>
                </nav>
            </div>
            { isLoggedIn ? (
                <div className="flex gap-4">
                    <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                </div>
            ) : (
                    <div className="flex gap-4">
                        <a href="/login">
                            <Button variant="primary" size="lg">Log in</Button>
                        </a>
                        <a href="/register">
                            <Button variant="outline" size="lg">Sign up</Button>
                        </a>
                    </div>
                ) }
        </nav>
    )
}

export default Header

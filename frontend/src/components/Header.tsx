import { Button } from "@/components/ui/button"
import logo from '../assets/krishi.svg'

function Header() {
    return (
        <div className="flex justify-between items-center p-4 border-b-[1px] border-gray-400/40">
            <div><img src={logo} alt="Logo" /></div>
            <div className="flex">
                <nav className="w-full flex gap-8 justify-between text-lg">
                    <ul><a href="/">Home</a></ul>
                    <ul><a href="/marketplace">Marketplace</a></ul>
                    <ul><a href="/find-deals">Find Deals</a></ul>
                </nav>
            </div>
            <div className="flex gap-4">
                <Button variant="primary" size="lg">Log in</Button>
                <Button variant="outline" size="lg">Sign up</Button>
            </div>
        </div>
    )
}

export default Header

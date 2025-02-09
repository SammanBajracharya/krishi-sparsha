import { Button } from "./ui/button"
import ProductCard from "./ProductCard.tsx"

function Profile() {
  return (
    <div className="p-6 shadow-lg flex flex-col gap-6">
        <div className="flex gap-6">
            <div><img className="rounded-lg" src="https://picsum.photos/200/300" alt="" /></div>
            <div className="p-4">
                <h2 className="text-3xl font-semibold">Pushkar Niraula</h2>
                <p className="mt-4">+977 9827720387</p>
                <p>Bholdhoka, Lalitpur</p>
            </div>
        </div>
        <div className="border-t-[1px] border-b-[1px] border-gray-400 flex gap-4">
            <p className="px-4 py-2 border-l-[1px] border-gray-400">Profile</p>
            <p className="px-4 py-2 border-r-[1px] border-l-[1px] border-gray-400">Dashboard</p>
        </div>
        <div className="flex flex-col gap-4">
            <p className="text-3xl font-semibold">About us</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur lobortis pellentesque nibh, eu fermentum justo tempor ut. Vivamus nec luctus risus. Vivamus sit amet ante eget dui convallis feugiat ac eu nisl.</p>
            <p>
            Nulla mollis eget lacus vitae pellentesque. Phasellus sed lorem non nisi accumsan lacinia at et libero. Duis nec ligula luctus, pellentesque velit sed, congue lectus. Mauris fringilla lectus sed vestibulum ornare. Nam ac eleifend tortor. Nam finibus ante sit amet felis eleifend, et gravida turpis vulputate. </p>
        </div>
        <div className="flex flex-col gap-4">
            <div className="text-3xl font-semibold">Trending Products</div>
            <div className="flex justify-around p-2">
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
            </div>
        </div>
    </div>
  )
}

export default Profile
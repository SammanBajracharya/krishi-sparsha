import { Button } from "@/components/ui/button"

function ProductCard() {
  return (
    <div className="px-2 py-4 flex flex-col items-center gap-2 w-[280px] max-w-72 shadow-lg rounded-lg">
        <div className=" p-2 w-full"><img className="object-contain w-full h-full rounded-lg" src="https://picsum.photos/200/300" alt="" /></div>
        <div>
        <div className="flex flex-col">
          <p className="text-xl">Rs.35 per kg</p>
          <p className="font-semibold text-xl">Potato</p>
        </div>
        <div className="flex mt-4 gap-4">
          <Button variant={"primary"}>Buy Now</Button>
          <Button variant={"outline"}>Add to Cart</Button>
        </div>
        </div>
    </div>
  )
}

export default ProductCard
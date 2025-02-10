import { BusinessInfo } from "@/components/BusinessInfo"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

function Dashboard() {
  return (
    <div className="p-6 shadow-lg flex flex-col gap-6 bg-white">
                <BusinessInfo
                    image="https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/1015f/MainBefore.jpg"
                    businessName="Sato"
                    mobile="+977 9343234343"
                    location="sdfdsf"
                    trustedPer={96}
                    isProfile
                />
    <div className="p-4 shadow-lg rounded-lg flex flex-col gap-8">
      <div className="flex flex-col gap-6">
      <div className="text-3xl font-semibold">Hello,User </div>
      <div className="flex gap-4">
        <Button variant={"primary"}>Sell Products</Button>
        <Button variant={"secondary"}>Review Old Sales</Button>
      </div>
    </div>
    <Separator/>
    <div className="flex flex-col gap-4">
      <div className="text-2xl font-semibold">Your Todos</div>
      <div><input className="bg-neutral-100 outline-gray-400/50 px-4 py-2 w-full" placeholder="Enter your todos here" type="text" name="" id="" /></div>
      <div className="flex flex-wrap gap-2">
        <p className="bg-neutral-100 p-[12px] rounded-md">Sell More Products</p>
        <p className="bg-neutral-100 p-[12px] rounded-md">Talk with Bla Bla BLa</p>
        </div>
    </div>
    <Separator/>
    <div className="flex flex-col gap-4">
      <div>Your Analytics</div>
      <div className="border-[1px] border-black">
      </div>
    </div>
    </div>
    </div>
  )
}

export default Dashboard
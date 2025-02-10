import { BusinessInfo } from "@/components/BusinessInfo"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { useAuth } from "@/context/AuthContext";
import { getUserWithId } from "@/lib/utils";
import { useNavigate, useParams } from "react-router-dom"
import { Card, CardContent, CardHeader } from "@/components/ui/card";

function Dashboard() {
    const { isLoggedIn } = useAuth();
    const { userId } = useParams();
    const navigate = useNavigate();
    const userData = getUserWithId(userId as string);

    if (!userData) {
        navigate("/marketplace");
        return null;
    }

    return (
        <>
            <div className="p-6 shadow-lg flex flex-col gap-6">
                <BusinessInfo
                    id={userId as string}
                    image={userData.image as string}
                    businessName={userData.username}
                    mobile={userData.phone as string}
                    location={userData.address as string}
                    rating={userData.rating}
                    isProfile
                    isLoggedIn={isLoggedIn}
                />
                <Card>
                    <CardHeader className="pb-12">
                        <div className="flex flex-col gap-6">
                            <div className="text-3xl font-semibold">Hello,User </div>
                            <div className="flex gap-4">
                                <Button variant={"primary"}>Sell Products</Button>
                                <Button variant={"secondary"}>Review Old Sales</Button>
                            </div>
                        </div>
                    </CardHeader>
                    <Separator/>
                    <CardContent className="py-8">
                        <div className="flex flex-col gap-4">
                            <div className="text-2xl font-semibold">Your Todos</div>
                            <div><input className="bg-neutral-100 outline-gray-400/50 px-4 py-2 w-full" placeholder="Enter your todos here" type="text" name="" id="" /></div>
                            <div className="flex flex-wrap gap-2">
                                <p className="bg-neutral-100 p-[12px] rounded-md">Sell More Products</p>
                                <p className="bg-neutral-100 p-[12px] rounded-md">Talk with Bla Bla BLa</p>
                            </div>
                        </div>
                        <Separator className="my-6" />
                        <div className="flex flex-col gap-4">
                            <div>Your Analytics</div>
                            <div className="border-[1px] border-black">
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </>
    )
}

export default Dashboard

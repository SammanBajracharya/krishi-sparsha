import { BusinessInfo } from "@/components/BusinessInfo";
import { Profile } from "@/components/Profile";

const ProfilePage = () => {
    return (
        <div className="p-6 shadow-lg flex flex-col gap-6">
            <BusinessInfo
                image="https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/1015f/MainBefore.jpg"
                businessName="Sato"
                mobile="+977 9343234343"
                location="sdfdsf"
                trustedPer={96}
                isProfile
            />
            <div className="border-[1px] border-gray-400 flex gap-4">
                <p className="px-4 py-2 border-l-[1px] border-gray-400">Profile</p>
                <p className="px-4 py-2 border-r-[1px] border-l-[1px] border-gray-400">Dashboard</p>
            </div>
            <Profile />
        </div>
    )
}

export default ProfilePage

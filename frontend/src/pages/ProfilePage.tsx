import { BusinessInfo } from "@/components/BusinessInfo";
import { Profile } from "@/components/Profile";
import { useAuth } from "@/context/AuthContext";
import { getUserWithId } from "@/lib/utils";
import { useNavigate, useParams } from "react-router-dom";

const ProfilePage = () => {
    const { userId } = useParams();
    const { isLoggedIn } = useAuth();
    const navigate = useNavigate();

    const userData = getUserWithId(userId as string);

    if (!userData) {
        navigate("/find-deals");
        return;
    }

    const isProfile = userId === userData.id;


    console.log(userData);

    return (
        <div className="p-6 shadow-lg flex flex-col gap-6">
            <BusinessInfo
                id={userId as string}
                image={userData.image as string}
                businessName={userData.username}
                mobile={userData.phone as string}
                location={userData.address as string}
                rating={userData.rating}
                isProfile={isProfile}
            />
            <Profile />
        </div>
    )
}

export default ProfilePage

import { Phone, MapPin } from "lucide-react";

interface BusinessInfoProps {
    id: string;
    businessName: string;
    rating?: number | string;
    info?: string;
    mobile: string | number;
    location: string | number;
    image: string;
    isChild?: boolean;
    isProfile?: boolean;
};

export const BusinessInfo = ({
    id,
    businessName,
    info,
    mobile,
    location,
    image,
    isChild,
}: BusinessInfoProps) => {
    return (
        <div className="flex flex-col md:flex-row gap-x-8">
            <img
                src={image}
                className="h-40 aspect-square rounded-md object-cover"
                alt="profile_image"
            />
            <div className="flex flex-col gap-y-4 max-w-lg mt-2">
                <div className="flex flex-col gap-2 items-start lg:flex-row lg:items-center">
                    { isChild ? (
                        <a href={`/profile/${id}`} className="hover:underline">
                            <h2>{businessName}</h2>
                        </a>
                    ) : (
                        <h2>{businessName}</h2>
                    ) }
                </div>
                { info && (
                    <p className="text-sm">
                        {info}
                    </p>
                )}
                <div className="space-y-1">
                    <div className="flex items-center gap-x-4">
                        <Phone />
                        <a>{mobile}</a>
                    </div>
                    <div className="flex items-center gap-x-4">
                        <MapPin />
                        <a>{location}</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

import { Phone, MapPin } from "lucide-react";

interface BusinessInfoProps {
    businessName: string;
    trustedPer: number | string;
    info?: string;
    mobile: string | number;
    location: string | number;
    image: string;
};

export const BusinessInfo = ({
    businessName,
    trustedPer,
    info,
    mobile,
    location,
    image
}: BusinessInfoProps) => {
    return (
        <div className="flex gap-x-8">
            <img
                src={image}
                className="h-32 w-32 rounded-md object-cover"
                alt="profile_image"
            />
            <div className="max-w-lg">
                <div className="flex flex-col gap-2 items-start lg:flex-row lg:items-center">
                    <a href="#" className="hover:underline">
                        <h2>{businessName}</h2>
                    </a>
                    <span className="text-gray-500">(Trusted by {trustedPer}% consumers)</span>
                </div>
                { info && (
                    <p className="mt-2 text-sm">
                        {info}
                    </p>
                )}
                <div className="mt-5 space-y-1">
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

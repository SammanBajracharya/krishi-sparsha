
interface ServiceCardProps {
    title: string;
    info: string;
    image: string;
}

export const ServiceCard = ({ title, info, image }: ServiceCardProps) => {
    return (
        <div className='flex flex-col w-80 gap-y-4'>
            <img
                className='w-full aspect-square rounded-sm object-cover'
                src={image}
                alt="img1"
            />
            <div className='flex flex-col items-center gap-y-2 text-center'>
                <h4>{title}</h4>
                <p>{info}</p>
            </div>
        </div>
    )
}

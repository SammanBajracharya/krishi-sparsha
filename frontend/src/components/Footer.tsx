import img1 from '/favicon.svg'

const Footer = () => {
    return (
        <div className="bg-[#009245] text-white p-6 flex flex-col gap-6">
            <div className="flex justify-between items-center mt-6 px-8">
                <div className="flex flex-col gap-4">
                    <p className="text-3xl leading-3">Start today,</p>
                    <p className="text-3xl">Start green</p>
                </div>
                <div className='bg-white p-2 rounded-md shadow-md '>
                    <img src={img1} className='w-24' alt="Logo" />
                </div>
            </div>
            <div className="w-full mt-6 mb-6 h-[1px] bg-white"></div>
            <div className="grid grid-cols-4 place-content-center">
                <div className="flex flex-col gap-2">
                    <p className="font-semibold">krishi-स्पर्श</p>
                    <p>krishi.sparsha@gmail.com</p>
                </div>
                <div className="flex flex-col gap-2">
                    <p>Nepal</p>
                    <p>Satdobato, Lalitpur</p>
                </div>
                <div className="flex flex-col gap-2">
                    <p><a href="#">Instagram</a></p>
                    <p><a href="#">X</a></p>
                    <p><a href="#">Linkedin</a></p>
                </div>
                <div className="flex flex-col gap-2">
                    <p><a href="/terms-of-service">Terms of Service</a></p>
                </div>
            </div>
        </div>
    )
}

export default Footer

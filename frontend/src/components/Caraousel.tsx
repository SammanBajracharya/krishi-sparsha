import Slider from 'react-slick';
import image1 from '@/assets/Frame 84.jpg'
import image2 from '@/assets/Frame 85.jpg'
import image3 from '@/assets/Frame 86.jpg'
import image4 from '@/assets/Frame 87.jpg'

const Carousel: React.FC = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 2000,
    };

    return (
        <div className="w-full mx-auto mt-9">
            <Slider {...settings} className="bg-transparent">
                <div className="relative h-[80vh] w-full">
                    <img
                        src={image1}
                        alt="Image 1"
                        className="w-full h-full object-cover rounded-lg"
                    />
                    <div className="absolute inset-0 bg-black opacity-30"></div>
                </div>

                {/* Slide 2 */}
                <div className="relative h-[65vh]">
                    <img
                        src={image2}
                        alt="Image 2"
                        className="w-full h-full object-fill rounded-lg"
                    />
                    <div className="absolute inset-0 bg-black opacity-30"></div>
                </div>


                <div className="relative h-[65vh]">
                    <img
                        src={image3}
                        alt="Image 3"
                        className="w-full h-full object-fill rounded-lg"
                    />
                    <div className="absolute inset-0 bg-black opacity-30"></div>
                </div>

                <div className="relative h-[65vh]">
                    <img
                        src={image4}
                        alt="Image 4"
                        className="w-full h-full object-fill rounded-lg"
                    />
                    <div className="absolute inset-0 bg-black opacity-30"></div>
                </div>
            </Slider>
        </div>
    );
};

export default Carousel;

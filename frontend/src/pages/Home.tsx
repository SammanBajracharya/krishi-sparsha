import { ServiceCard } from '@/components/ServiceCard';
import img1 from '../assets/Vector.svg'
import img2 from '../assets/material-symbols-light_handshake-sharp.svg'
import img3 from '../assets/mdi_recycle.svg'
import img4 from '../assets/solar_delivery-bold.svg'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'
import Accordioncard from '@/components/Accordioncard';

const Home = () => {
    return (
        <>
            <main className="py-8">
                <section className='max-w-screen mx-auto px-8'>
                    <div className='mx-auto mb-8 flex flex-col gap-4 justify-center items-center text-center max-w-2xl'>
                        <h1>krishi-स्पर्श seeks to find new way farmer can sustain their business</h1>
                        <p className="text-center max-w-xl">We are a go-to online marketplace designed exclusively for framers, artisans, and businesses in the framing industry.</p>
                        <Link to="/marketplace">
                            <Button variant="primary" size="lg">Explore</Button>
                        </Link>
                    </div>
                    <img className='mb-16 rounded-lg aspect-video object-cover w-full h-full' src="https://images.unsplash.com/photo-1605000797499-95a51c5269ae?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="image of a land" />
                </section>
                <section className="text-white bg-primary px-8 pt-12 pb-16">
                    <h4 className="mb-4">How we work</h4>
                    <div className="flex items-start gap-x-10 bg-primary w-full">
                        <div className="text-white w-2/5 flex flex-col gap-4">
                            <p className="text-3xl">Krishi-स्पर्श is not just an e-commerce site, it trust bond between farmers and consumer</p>
                            <p>We are a go-to online marketplace designed exclusively for framers, artisans, and businesses in the framing industry.</p>
                        </div>
                        <div className="text-white grid grid-cols-2 gap-8">
                            <div className="flex flex-col items-center text-center gap-2 max-w-52">
                                <img src={img1} alt="img" />
                                <p className="p-1 m-1">Farm-to-Table Patnership</p>
                            </div>
                            <div className="flex flex-col items-center text-center gap-2 max-w-52">
                                <img src={img2} alt="img" />
                                <p className="p-1 m-1">Bartering System</p>
                            </div>
                            <div className="flex flex-col items-center text-center gap-2 max-w-52">
                                <img src={img3} alt="img" />
                                <p className="p-1 m-1">Recycling Biodegradable Wastes</p>
                            </div>
                            <div className="flex flex-col items-center text-center gap-2 max-w-52">
                                <img src={img4} alt="img" />
                                <p className="p-1 m-1">Pre-order goods</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='py-16 flex flex-col gap-8 items-center w-full'>
                    <h1>Our Services</h1>
                    <div className="flex gap-6">
                        <ServiceCard
                            title='Delivery of Goods'
                            info="We deliver organic goods to your doorstep. We have a wide range of products to choose from."
                            image="https://cdn.pixabay.com/photo/2023/02/21/05/47/rain-7803539_1280.jpg"
                        />
                        <ServiceCard
                            title='Management of Bio-degradable waste'
                            info="We help you manage your bio-degradable waste. We have a team of experts to help you with this."
                            image="https://images.unsplash.com/photo-1604187351574-c75ca79f5807?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        />
                        <ServiceCard
                            title='Inexpensive Goods'
                            info="Direct seller to consumer transaction."
                            image="https://images.unsplash.com/photo-1608751819821-7f0ab4aaede2?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        />
                    </div>
                </section>
                <div className='accordion p-4 w-[90%] mx-auto'>
                    <Accordioncard/>
                </div>
                <div className='mt-12'>
                    <h3 className="text-center font-bold text-2xl">Be part of the bright future</h3>
                </div>
            </main>
        </>

    );
};

export default Home;

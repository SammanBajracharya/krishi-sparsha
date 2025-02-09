import img1 from '../assets/Vector.svg'
import img2 from '../assets/material-symbols-light_handshake-sharp.svg'
import img3 from '../assets/mdi_recycle.svg'
import img4 from '../assets/solar_delivery-bold.svg'


const Home = () => {
      return (
        <>
        <div className='flex flex-col items-center gap-4'>
          <div className='flex flex-col gap-4 justify-center items-center ' >
          <h6 className="font-bold
         font-Manrope text-[25px] text-center p-3
         m-3">
          krishi-स्पर्श seeks to find new way farmer can sustain their business
        </h6>
        <p className="text-center font-poppins">We are a go-to online marketplace designed exclusively for framers, artisans, and businesses in the framing industry.</p>
        <button className="p-3 my-4 bg-primary text-white font-poppins">Explore</button>
          </div>
          <div className='w-full h-80 p-2 '>
          <img className='object-cover w-full h-full' src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGFuZHxlbnwwfHwwfHx8MA%3D%3D" alt="image of a land" />
          </div>
          <div className="flex justify-around items-stretch bg-primary text-left w-full ">
          <div className="p-2 m-2 w-1/2 flex flex-col gap-4">
            <p className="font-poppins p-1 text-white text-[15px] font-semibold tracking-wide">How we work</p>
            <p className="font-poppins text-white text-[20px] ">krishi-स्पर्श is not just an e-commerce site, it trust bond between farmers and consumer</p>
            <p className="font-poppins p-1 text-white text-sm ">We are a go-to online marketplace designed exclusively for framers, artisans, and businesses in the framing industry.</p>
          </div>
          <div className='flex gap-6'>
            <div className="font-poppins text-white p-2 m-2 w-1/4">
            <img src={img1} alt="img" />
              <p className="p-1 m-1">Farm-to-Table Patnership</p>
              <img src={img3} alt="img" />
              <p className="p-1 m-1">Recycle</p>
            </div>
            <div className="font-poppins text-white p-2 m-2 w-1/4">
            <img src={img2} alt=""/>
              <p className="p-1 m-1">Bartering System</p>
              <img src={img4} alt="" />
              <p className="p-1 m-1"> Pre-order goods</p>
            </div>
          </div>
          
        </div>
          <div className='flex flex-col gap-4'>
          <h3 className="mt-8 text-center font-bold text-3xl">Our services</h3>
        <div className="flex gap-6 bg-teal-300 ">
          <div className='relative flex'>
            <div className='absolute inset-0 bg-slate-500 opacity-70'></div>
            <img src="https://picsum.photos/200/300" alt="img1" />
            </div>
          <div className='p-2'><img src="https://picsum.photos/200/300" alt="img2" /></div>
          <div className='p-2'><img src="https://picsum.photos/200/300" alt="img3" /></div>
        </div>
          </div>
          <div><h3 className="text-center font-bold text-[20px]">Be part of the bright future</h3></div>
        </div>
        </>
    
      );
};

export default Home;

import img1 from '../assets/Vector.svg'
import img2 from '../assets/material-symbols-light_handshake-sharp.svg'
import img3 from '../assets/mdi_recycle.svg'
import img4 from '../assets/solar_delivery-bold.svg'


const Home = () => {
      return (
        <>
        <div className='flex flex-col gap-4'>
          <div className='flex flex-col gap-4 justify-center items-center ' >
          <h6 className="font-bold
         font-Manrope text-[25px] text-center p-3
         m-3">
          krishi-स्पर्श seeks to find new way farmer can sustain their business
        </h6>
        <p className="text-center font-poppins">We are a go-to online marketplace designed exclusively for framers, artisans, and businesses in the framing industry.</p>
        <button className="p-3 my-4 bg-primary font-poppins">Explore</button>
          </div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>

        <img src="" alt="image of a land" />
        <div className="flex items-stretch bg-primary text-left ">
          <div className="p-2 m-2 w-1/2">
            <h6 className="font-poppins p-1 text-white text-[15px] tracking-wide">How we work</h6>
            <p className="font-poppins text-white text-[20px] ">krishi-स्पर्श is not just an e-commerce site, it trust bond between farmers and consumer</p>
            <p className="font-poppins p-1 text-white text-[17px]">We are a go-to online marketplace designed exclusively for framers, artisans, and businesses in the framing industry.</p>
          </div>
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
        <h3 className="text-center font-bold text-[20px]">Our services</h3>
        <div className="flex items-stretch">
          <div><img src="" alt="img1" /></div>
          <div><img src="" alt="img2" /></div>
          <div><img src="" alt="img3" /></div>
        </div>
        <h3 className="text-center font-bold text-[20px]">Be part of the bright future</h3>
        </>
    
      );
};

export default Home;

import { Search } from 'lucide-react';
import { ProductCard } from '../components/ProductCard'
import { mockData } from '../mockData'

function Marketplace() {
    const handleBuyButtonClick = (productName: string) => {
        console.log(`Buying ${productName}`);
    };

    const handleAddToCartButtonClick = (productName: string) => {
        console.log(`Adding ${productName} to cart`);
    };

  return (
    <div className='flex flex-col gap-8 p-4 '>
      <div className='bg-neutral-300 h-64 p-2'>banner</div>
      <div className=' flex flex-col gap-4'>
        <div className='text-3xl font-semibold'>
          Trending Products
        </div>
        <div className='flex justify-between px-2 py-4'>
        {mockData.map((data, index) => (
                                <ProductCard
                                    key={index}
                                    price={data.price}
                                    productName={data.productName}
                                    buyButtonOnClick={() => handleBuyButtonClick(data.productName)}
                                    addToCardButtonOnClick={() => handleAddToCartButtonClick(data.productName)}
                                />
                            ))}
        </div>
      </div>
      <div className=' p-2 flex flex-col gap-4'>
        <div className='flex'>
          
          </div>
        <div className='flex justify-between'>
          <div className='text-3xl font-semibold'  >Products</div>
        <div className='flex'>
          <p className='bg-white flex items-center px-2'><Search/></p><input className='py-2 px-2 text-md outline-none' placeholder='search ' type="text" name="" id="" />
        </div>
        </div>
         <div className='flex justify-between px-2 py-4'> 
           {mockData.map((data, index) => (
                                <ProductCard
                                    key={index}
                                    price={data.price}
                                    productName={data.productName}
                                    buyButtonOnClick={() => handleBuyButtonClick(data.productName)}
                                    addToCardButtonOnClick={() => handleAddToCartButtonClick(data.productName)}
                                />
                            ))}
           </div>
      </div>
      <div className='bg-neutral-300 h-64 p-2'>banner</div>
    </div>
  )
}

export default Marketplace
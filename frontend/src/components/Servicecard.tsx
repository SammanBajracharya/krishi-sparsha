import { Button } from './ui/button'

function Servicecard({Title="Default",info="",}) {
  return (
    <div className='relative flex w-80'>
            <div className='absolute inset-0 bg-black opacity-60 flex'>
            </div>
            <div className='absolute inset-0  flex flex-col justify-between items-center py-4 text-white '>
            <div className='font-semibold text-md uppercase'>{Title}</div>
              <div className='flex flex-col gap-2 items-center'>
                <p className='text-xl'>{Title}</p>
                <p>{info}</p>
              </div>
              <div><Button variant={"secondary"}>See More</Button></div>
            </div>
            <img className='w-full object-cover' src="https://picsum.photos/200/300" alt="img1" />
            </div>
  )
}

export default Servicecard
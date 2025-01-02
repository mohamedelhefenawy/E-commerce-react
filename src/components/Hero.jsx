import hero from '../assets/frontend_assets/hero_img.png'
export default function Hero() {
  return (
    <div className='flex flex-col mx-auto w-[80%]  border-2 border-gray-500 md:flex-row mt-10'>
      {/* left side */}
      <div className='md:w-[50%] w-full flex flex-col justify-center items-center  text-gray-700'>

        <div className='w-fit flex flex-col gap-5 my-5'>
        <div className='flex items-center gap-1 '>
            <hr className='bg-gray-600 h-[3px] w-[40px]' />
            <h3>OUR BESTSELLERS</h3>
        </div>
        <h1 className='font-bold text-4xl leading-relaxed'>Latest Arrivals</h1>
        <div className='flex items-center gap-1'>
        <h3>Shop Now</h3>
        <hr className='bg-gray-600 h-[3px] w-[40px]' />
        </div>
        </div>
      </div>

      {/* right side */}
      <img src={hero} alt="" className='md:w-[50%] w-full md:h-[500px] h-[300px]' />
    </div>
  )
}

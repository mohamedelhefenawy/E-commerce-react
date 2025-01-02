import support from'../assets/frontend_assets/support_img.png'
import quality from '../assets/frontend_assets/quality_icon.png'
import exchange from '../assets/frontend_assets/exchange_icon.png'
export default function Ourpolicy() {
  return (
    <div className='flex flex-col sm:flex-row   justify-evenly items-center gap-10 my-10'>
        <div className='flex flex-col  text-center'>
            <img src={support} alt="" className='w-12 m-auto mb-5' />
            <p className='font-semibold'> Best Customer Support </p>
            <p className='text-gray-400'>we provide 24/7 customer support</p>
        </div>
        <div className='flex flex-col text-center'>
            <img src={quality} alt=""  className='w-12 m-auto mb-5'/>
            <p className='font-semibold'>7 Days return policy</p>
            <p className='text-gray-400'>we provide 7 days return policy</p>
        </div>
        <div className='flex flex-col text-center'>
            <img src={exchange} alt="" className='w-12 m-auto mb-5' />
            <p className='font-semibold'>Easy Exchange Policy</p>
            <p className='text-gray-400'>we offer hassle free exchange policy</p>
        </div>
      
    </div>
  )
}

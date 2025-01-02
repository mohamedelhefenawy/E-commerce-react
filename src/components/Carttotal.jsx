import  { useContext } from 'react'
import { ShopContext } from '../context/Shopcontext'
import Title from './Title'
import { useNavigate } from 'react-router-dom'

export default function Carttotal({path}) {
    const navigate = useNavigate()

    const {currency ,get_total_amount , fees} = useContext(ShopContext)
  return (
    <div className='w-full'>
        <div className='text-2xl'>
            <Title text1={'CART'} text2={'TOTAL'} />

        </div>

        <div className='flex flex-col gap-2 mt-2 text-sm'>
            <div className='flex justify-between'>
                <p>SubTotal</p>
                <p>{currency}{get_total_amount()}.00</p>
            </div>
            <hr />
            <div className='flex justify-between'>
                <p>Shipping fee</p>
                <p>{currency}{fees}.00</p>
            </div>
            <hr />
            <div className='flex justify-between'>
                <p>Total</p>
                <p>{currency}{get_total_amount()===0?0:get_total_amount()+fees}.00</p>
            </div>
            <div className='w-full text-end mt-5 '>
                <button onClick={()=>navigate(path) } className='bg-black text-white rounded py-4 px-8'>Place Order</button>
            </div>

        </div>
      
    </div>
  )
}

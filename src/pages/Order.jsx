import  { useContext } from 'react'
import Title from '../components/Title'
import { ShopContext } from '../context/Shopcontext'

export default function Order() {

  const {products , currency} = useContext(ShopContext)
  return (
    <div className='w-[80%] mx-auto'>

      <div className='text-2xl'>
        <Title text1={'My'} text2={'Orders'}/>

      </div>
      <div>
        {products.slice(1,4).map((product,index)=>
        <div key={index} className='flex gap-4 py-4 border-b text-gray-700 flex-col md:flex-row justify-between items-center '>
          
          <img src={product.image[0]} alt="" className='w-16 sm:w-20' />
          <div className='self-center lg:w-[30%] w-[100%] '>
            <p>{product.name}</p>
            <div className='flex items-center gap-4'>
              <p>{currency}{product.price}</p>
              <p>Quantity: 1</p>
              <p>Size: M</p>
            </div>
           
            
          </div>
          
          <div className='flex gap-2 items-center lg:w-[30%] w-[100%]'>
              <p className='h-1.5 w-1.5 rounded-full bg-green-600'></p>
              <p>Ready To Ship</p>
            </div>


        </div>)}
      </div>

      
    </div>
  )
}

import  { useState } from 'react'
import Title from '../components/Title'
import Carttotal from '../components/Carttotal'
import stripe from '../assets/frontend_assets/stripe_logo.png'
import raz from '../assets/frontend_assets/razorpay_logo.png'


export default function PlaceOrder() {
  const [method ,setMethod]= useState('raz')

  
  return (
    <div className='w-[80%] mx-auto'>
      <div className='flex  justify-between flex-col lg:flex-row '>
              {/* Left Side */}
        <div className='my-5 '>
          <Title text1={'DELIEVERY'} text2={'INFORMATION'}/>
          <div className='flex flex-col items-start gap-3'>
          <div className='flex gap-3 w-full'>
            <input type="text" placeholder='First Name' className='border pl-2 py-2 w-[50%]' />
            <input type="text"   placeholder='Last Name' className='border pl-2 py-2 w-[50%]'/>
          </div>
          <input type="email" placeholder='E-mail'  className='border pl-2 py-2 w-full' />
          <input type="text" placeholder='Street'  className='border pl-2 py-2 w-full' />

          <div className='flex gap-3 w-full'>
          <input type="text" placeholder='City' className='border pl-2 py-2 w-[50%]' />
          <input type="text"   placeholder='State' className='border pl-2 py-2 w-[50%]'/>
          </div>

          <div className='flex gap-3 w-full'>
          <input type="number" placeholder='Zipcode' className='border pl-2 py-2 w-[50%]' />
          <input type="text"   placeholder='Country' className='border pl-2 py-2 w-[50%]'/>
          </div>
          <input type="number" placeholder='Phone'  className='border pl-2 py-2 w-full' />

          </div>
        </div>

        {/* Right Side */}
        <div className='my-10 self-center w-full lg:w-[40%] '>
          <Carttotal path = {'/order'}/>
        {/* Payment Method */}
        <div className=' my-5 '>
          <div className='text-sm'>
          <Title text1={'Payment'} text2={'Method'}/>
          </div>

          <div className='flex gap-3 items-center  '>
           <div className='px-4 py-2 border cursor-pointer flex gap-2 items-center' onClick={()=>setMethod('stripe')}> 
           <p className={`min-w-3.5 h-3.5 rounded-full ${method==='stripe'? 'bg-green-500':''}`}></p>

          <img src= {stripe} alt=""  className='  h-5  '/>
          </div>
          <div className='px-4 py-2 border cursor-pointer flex gap-2 items-center' onClick={()=>setMethod('raz')}>
          <p className={`min-w-3.5 h-3.5 rounded-full ${method==='raz'? 'bg-green-500':''}`}></p>
          <img src= {raz} alt=""  className='  h-5 '/>
          </div>
          <div className='flex  border text-gray-600 cursor-pointer px-4 py-2 gap-2 items-center' onClick={()=>setMethod('cash')}>
          <p className={`min-w-3.5 h-3.5 rounded-full ${method==='cash'? 'bg-green-500':''}`}></p>
          <p className=' text-xs font-semibold '>Cash ON Delivery</p>
          </div>

          </div>
          </div>

        </div>
      </div>

      
    </div>
  )
}

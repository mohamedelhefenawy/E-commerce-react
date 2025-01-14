import  { useContext ,useState } from 'react'
import { Link } from 'react-router-dom'
import { ShopContext } from '../context/Shopcontext'
import { Heart } from 'phosphor-react'

export default function Productitem({id , image , price , name}) {
    
    const currency = useContext(ShopContext)
    const [click , setClick]=useState(false)
    
  return (
    <div className='text-gray-700 '>
      
      <div className='overflow-hidden relative'>
      <Link  to = {`/product/${id}`}>
            <img src= {image[0]} loading='lazy' alt=""  className='hover:scale-110 transition ease-in-out cursor-pointer'/>
            </Link>
            <Heart size={24} weight="fill"  className ={`absolute top-2 right-1 cursor-pointer ${currency.click[id] ?'text-red-400' : ''}`} onClick={()=>{setClick(currency[id]);currency.addtowishlist(id)}} />


      </div>
      <p className='pt-3 pb-1 text-sm'>{name}</p>
      <p className='text-sm font-medium'>{currency.currency} {price}</p>
      
    </div>
  )
}

import  { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ShopContext } from '../context/Shopcontext'

export default function Productitem({id , image , price , name}) {
    
    const currency = useContext(ShopContext)
    
  return (
    <div>
      <Link className='text-gray-700 cursor-pointer' to = {`/product/${id}`}>
      <div className='overflow-hidden'>
            <img src= {image[0]} alt=""  className='hover:scale-110 transition ease-in-out'/>
      </div>
      <p className='pt-3 pb-1 text-sm'>{name}</p>
      <p className='text-sm font-medium'>{currency.currency} {price}</p>
      </Link>
    </div>
  )
}

import  { useContext, useEffect, useState } from 'react'
import logo from '../assets/admin_assets/logo.png'
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'
import { ArrowLeft, Bag, List, MagnifyingGlass, User, X } from 'phosphor-react';
import { ShopContext } from '../context/Shopcontext';
import Carttotal from './Carttotal';
import del from '../assets/frontend_assets/bin_icon.png'


export default function Navbar() {
const [user ,setUser] = useState(false)
const [search , setSearch] = useState(false)
const [visible , setVisible] = useState(false)
const {products,get_count,currency, cartitems,updated_quantity ,get_total_amount ,increase_quantity , decrease_quantity} = useContext(ShopContext)
const [value,setValue]=useState('')
const [items,setItems ]=useState([])
const location = useLocation()
const [cart , setCart] = useState(false)
const [cartdata,setCartData] = useState([])
const [count ,setCount] = useState()
// console.log(location)
// console.log(products)
const navigate = useNavigate()

useEffect(()=>{
setSearch(false);
setVisible(false);
setUser(false);
setCart(false)
}
,[location])

const handle_search =(query="")=>{
  event.preventDefault()
  const filtered = products.filter(product=>product.name.toLowerCase().includes(query.toLowerCase()))
  setItems(filtered)
  
}

// console.log(products)





useEffect(()=>{
  const tempData= [];
  for (const items in cartitems){
    for(const item in cartitems[items]){
      if(cartitems[items][item]>0){
        tempData.push(
          {
            id:items,
            size:item,
            quantity:cartitems[items][item]
          }
        )
      }
    }
  }
  setCartData(tempData)

},[cartitems])






  return (
    <div className=' flex items-center justify-between py-5 mx-2 sm:mx-10 font-medium'>
      <Link to='/'><img src={logo} alt="" className='w-36' /></Link>
      <ul className='hidden sm:flex text-gray-700 gap-5 text-sm'>

        <NavLink to='/' className= 'flex flex-col items-center gap-1'>
        <p>Home</p>
        <hr className='w-2/4 font-bold bg-gray-700 h-[2px] hidden' />
        </NavLink>

        <NavLink to='/collection' className= 'flex flex-col items-center gap-1'>
        <p>Collection</p>
        <hr className='w-2/4 font-bold bg-gray-700 h-[2px] hidden' />
        </NavLink>

        <NavLink to='/about' className= 'flex flex-col items-center gap-1'>
        <p>About</p>
        <hr className='w-2/4 font-bold bg-gray-700 h-[2px] hidden' />
        </NavLink>

   

        <NavLink to='/contact' className= 'flex flex-col items-center gap-1'>
        <p>Contact</p>
        <hr className='w-2/4 font-bold bg-gray-700 h-[2px] hidden' />
        </NavLink>

      </ul>

<div className='flex gap-3'>

    <div className='relative'>
  <MagnifyingGlass size={35}  className='cursor-pointer text-gray-700 hover:text-black ease duration-300' onClick={()=>{(setSearch(!search));setUser(false)}}/>
  {search && (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
    <div className="bg-white relative w-[80%] md:w-[60%] h-[60%] md:h-[40%] border rounded flex flex-col items-center">
      <X
        size={32}
        className="absolute top-5 left-5 cursor-pointer hover:text-red-400 ease duration-300"
        onClick={() => setSearch(false)}
      />
      <input
        type="text"
        placeholder="Search"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
          handle_search(e.target.value);
        }}
        className="py-2 border border-gray-600 outline-none rounded px-6 w-[80%] mx-auto mt-16"
      />
      {value.length > 0 && (
        <div className="w-[80%] overflow-auto">
          {items.length > 0 ? (
            items.map((item) => (
              <Link
                key={item._id} // Use `item._id` as a unique key if available
                to={`/product/${item._id}`}
                onClick={() => {
                  setSearch(false);
                  setValue("");
                }}
              >
                <div className="flex py-4 px-2 justify-between cursor-pointer flex-col md:flex-row gap-2 hover:bg-red-400 duration-300 ease rounded md:gap-0">
                  <img
                    src={item.image[0]}
                    className="w-[40px] h-[40px]"
                    alt=""
                  />
                  <p>{item.name}</p>
                  <p>
                    {item.price}
                    {currency}
                  </p>
                </div>
              </Link>
            ))
          ) : (
            <p className="text-gray-600 text-2xl">No Results</p>
          )}
        </div>
      )}
    </div>
  </div>
)}

  </div>


  

  <div className='relative'>
  <User size={35}  className='cursor-pointer text-gray-700 hover:text-black ease duration-300' onClick={()=>{(setUser(!user));setSearch(false)}} />
 {user&&<div className='absolute bg-gray-400 text-white w-[100px] h-[120px] rounded text-center top-[40px] right-[5px] flex flex-col justify-evenly'>
  <p className='cursor-pointer hover:text-gray-800 ease duration-300' onClick={()=>navigate('/login')}>Profile</p>
  <p className='cursor-pointer hover:text-gray-800 ease duration-300' onClick={()=>navigate('/order')}>Orders</p>
  <p className='cursor-pointer hover:text-gray-800 ease duration-300'>Logout</p>
 </div>}
 </div>


<List size={35}  className='cursor-pointer text-gray-700 sm:hidden flex hover:text-black ease duration-300' onClick={()=>setVisible(true)} />

<div className='relative'>
<Bag size={35}  onClick={()=>setCart(true)} className=' cursor-pointer text-gray-700 sm:flex  hover:text-black ease duration-300'  />
<p className='absolute cursor-pointer bg-red-200 w-6 h-6 text-gray-700  rounded-2xl top-[28px] left-[-5px] text-center  hover:bg-red-400 hover:text-black ease duration-300 '>{get_count()}</p>
</div>


</div>

{/* Cart Side */}
<div className={`fixed z-[99] top-0 right-0 bottom-0 bg-gray-100 overflow-auto transition-all ${cart ? 'w-full md:w-[60%] lg:w-[50%]' : 'w-0'}`}>
  <X size={32} className='absolute top-3 left-3 text-gray-600 cursor-pointer hover:text-black duration-300 ease' onClick={() => setCart(false)} />

  <div className='flex flex-col h-full justify-between'>
    <div className='flex-1 max-h-screen overflow-y-auto'>
      {cartdata.map((items, index) => {
        const product = products.find(item => item._id === items.id);
        
        return (
          <div key={index} className="flex md:flex-row flex-col justify-between my-2 w-[80%] mx-auto mt-10 hover:bg-red-400 duration-300 ease py-2 px-4 rounded">
            <div className="flex gap-2 border-b py-2 mb-5">
              <img src={product.image[0]} alt="" className="w-20" />
              <div className="flex flex-col gap-1">
                <h3 className="text-sm text-gray-600">{product.name}</h3>
                <p>{product.price}{currency}</p>
                <p className="border rounded bg-gray-200 w-fit p-2">{items.size}</p>
              </div>
            </div>

            <div className='flex gap-10'>
            <div className='flex gap-0 items-center justify-center'>
              <button className='bg-gray-400 px-2 ' onClick={()=>{updated_quantity(items.id, items.size, items.quantity + 1)}}>+</button>
            <input type="text" 
            id='change'
            onChange={(e)=>updated_quantity(items.id ,items.size , Number(e.target.value))} 
            value={items.quantity} 
            min={1} 
            className="h-fit self-center w-[80px] text-center " />
            <button className='bg-gray-400 px-2  ' onClick={()=>{if(items.quantity>1){updated_quantity(items.id , items.size , items.quantity-1)}}}>-</button>
</div>
              

              <img
                src={del}
                onClick={() => updated_quantity(items.id, items.size, 0)}
                alt=""
                className="w-5 h-5 self-center cursor-pointer"
              />
            </div>
          </div>
        );
      })}
    </div>

    <div className='w-[80%] mx-auto mt-auto'>
      <button onClick={()=>navigate('/place-order')} className='mb-3 w-full bg-red-400 rounded py-4 text-gray-800 hover:text-black duration-300 ease'>
        Go To CheckOut | {currency}{get_total_amount()}
      </button>
    </div>
  </div>
</div>




{/* small screen */}

<div className={`fixed z-[99] top-0 right-0 bottom-0 bg-white overflow-hidden transition-all  ${visible? 'w-full max-h-screen' :'w-0' } `} >


<div className='flex gap-3 cursor-pointer mt-5 ml-2 ' onClick={()=> setVisible(false)}>
<ArrowLeft size={28} className='text-gray-700' />
<p className='text-gray-700 '>Back</p>

</div>

<div className='flex flex-col  items-start gap-3  mt-2 text-gray-700 '>
<NavLink onClick={()=> setVisible(false)} to='/' className= 'py-2 pl-6 border-b-2 w-full'>
        Home
        
        </NavLink>

        <NavLink onClick={()=> setVisible(false)} to='/collection' className= 'py-2 pl-6 border-b-2 w-full'>
        Collection
        </NavLink>

        <NavLink onClick={()=> setVisible(false)} to='/about' className= 'py-2 pl-6 border-b-2 w-full'>
        About
        </NavLink>

   

        <NavLink onClick={()=> setVisible(false)} to='/contact' className= 'py-2 pl-6 border-b-2 w-full'>
        Contact
        </NavLink>
        </div>
    </div>
    </div>
  )
}

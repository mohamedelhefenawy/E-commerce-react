import  { useContext, useState } from 'react'
import logo from '../assets/admin_assets/logo.png'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { ArrowLeft, Bag, List, MagnifyingGlass, User } from 'phosphor-react';
import { ShopContext } from '../context/Shopcontext';

export default function Navbar() {
const [user ,setUser] = useState(false)
const [search , setSearch] = useState(false)
const [visible , setVisible] = useState(false)
const {get_count} = useContext(ShopContext)
const navigate = useNavigate()
// console.log(products)

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
  {search&&<input type="text" placeholder='Search' className='absolute top-[50px] sm:top-[40px] rounded-xl border-2 pl-3 border-gray-700 right-[10px] ' />}
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

<Link to='/cart' className='relative' >
<Bag size={35}  className='cursor-pointer text-gray-700 sm:flex  hover:text-black ease duration-300'  />
<p className='absolute cursor-pointer bg-red-200 w-6 h-6 text-gray-700  rounded-2xl top-[28px] left-[-5px] text-center  hover:bg-red-400 hover:text-black ease duration-300 '>{get_count()}</p>
</Link >

</div>


{/* small screen */}

<div className={`absolute top-0 right-0 bottom-0 bg-white overflow-hidden transition-all  ${visible? 'w-full max-h-screen' :'w-0' } `} >


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

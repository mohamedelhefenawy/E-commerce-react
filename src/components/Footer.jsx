import React from 'react'
import logo from '../assets/frontend_assets/logo.png'
export default function Footer() {
  return (
    <div>
    <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 mt-40 my-10 w-[90%] mx-auto  text-sm'>
      <div className='flex flex-col items-start'> 
        <img src={logo} alt="" className='w-[200px]' />
        <p className='text-gray-600 '>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste debitis facere earum sint commodi, fugiat nesciunt iure sequi consequatur repudiandae enim cumque voluptatibus dicta perspiciatis consectetur labore, natus repellat dolorum.</p>
      </div>

      <div className='flex flex-col gap-3'>
        <h1 className='text-xl font-medium mb-5 '>COMPANY</h1>
        <ul className='text-gray-600' >
            <li>Home</li>
            <li>About Us</li>
            <li>Delievery</li>
            <li>Price</li>
        </ul>

      </div>
      <div className='flex flex-col gap-3'>
    <h1 className='text-xl font-medium mb-5'>Get IN Touch</h1>
    <ul className='flex flex-col gap-2 text-gray-600'>
        <li>01272808556</li>
        <li>melhefnawy718@gmail.com</li>
    </ul>
      </div>
      </div>
      <div >
        <hr />
        <h3 className='py-5 text-sm text-center'>Copyright 2024 <span className='text-gray-600 font-bold'>@7fno</span> .All Rights Reserved</h3>
      </div>
    </div>
  )
}

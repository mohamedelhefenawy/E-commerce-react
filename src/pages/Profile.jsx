import { useContext, useState } from "react";
import Title from "../components/Title";
import { MapPin, ShoppingCart, UserCircle, X } from "phosphor-react";
import { ShopContext } from "../context/Shopcontext";

export default function Profile() {
    const [current , setCurrent] = useState('personal')
    const [visible,setVisible] = useState(false)
    const {products , currency} = useContext(ShopContext)
    

  return (
    <div>
        <div className="text-center my-5">
            <Title text1={'My'} text2={'Profile'}/>
        </div>

        <div className="flex w-[80%] mx-auto flex-col lg:flex-row my-10 gap-6">
  {/* Sidebar Section */}
  <div className="w-full lg:w-[30%]  bg-white rounded-lg shadow-md p-4 h-fit">
    {/* Orders */}
    <div
      tabIndex="0"
      className="flex justify-between items-center gap-4 py-4 px-6 border border-gray-200 rounded-lg hover:bg-gray-50 focus:bg-gray-100 hover:text-red-500 focus:text-black text-gray-700 cursor-pointer transition ease-in-out duration-300"
      onClick={() => setCurrent('order')}
    >
      <p className="text-lg font-medium">Orders</p>
      <ShoppingCart size={28} className="text-gray-500" />
    </div>

    {/* Location */}
    <div
      tabIndex="0"
      className="flex justify-between items-center gap-4 py-4 px-6 border border-gray-200 rounded-lg hover:bg-gray-50 focus:bg-gray-100 hover:text-red-500 focus:text-black text-gray-700 cursor-pointer transition ease-in-out duration-300 mt-4"
      onClick={() => setCurrent('location')}
    >
      <p className="text-lg font-medium">Location</p>
      <MapPin size={28} className="text-gray-500" />
    </div>

    {/* Personal Information */}
    <div
      tabIndex="0"
      className="flex justify-between items-center gap-4 py-4 px-6 border border-gray-200 rounded-lg hover:bg-gray-50 focus:bg-gray-100 hover:text-red-500 focus:text-black text-gray-700 cursor-pointer transition ease-in-out duration-300 mt-4"
      onClick={() => setCurrent('personal')}
    >
      <p className="text-lg font-medium">Personal Information</p>
      <UserCircle size={28} className="text-gray-500" />
    </div>
  </div>

  {/* Main Content Section */}
  <div className="w-full lg:w-[70%] bg-white rounded-lg shadow-md p-6">
    {/* Dynamic Content based on selection */}
    {current === 'order' &&  <div className=" w-full h-[400px] overflow-auto" >
        {products.slice(1,10).map((product,index)=>
        <div key={index} className='flex  gap-4 py-4 border-b text-gray-700 flex-col md:flex-row justify-center md:justify-between items-center '>
          
          <img src={product.image[0]} alt="" className='rounded w-16 sm:w-20' />
          <div className='self-start lg:w-[30%] w-[100%] '>
            <p>{product.name}</p>
            <div className='flex items-start my-2 gap-4'>
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
      </div>}
    {current === 'location' &&  
    <div className="flex flex-col gap-2" >
    <p className="text-gray-600">No Location Saved</p>
    <button onClick={()=>setVisible(true)} className="w-[200px] px-6 py-3 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-600  transition duration-300 ease-in-out">
        Add New Location
    </button> 

    {visible&&<div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
  <div className="relative bg-white rounded-xl shadow-lg py-8 px-8 w-[90%] md:w-[70%] lg:w-[50%]">
    {/* Header */}
    <div className="flex justify-between items-center mb-6">
      <h1 className="text-xl font-semibold text-gray-800">Add New Address</h1>
      <X
        size={28}
        className="cursor-pointer text-gray-600 hover:text-black transition duration-300"
        onClick={() => setVisible(false)}
      />
    </div>

    {/* Form */}
    <form
      onSubmit={(e) => e.preventDefault()}
      className="space-y-6"
    >
      {/* Row 1: Country & City */}
      <div className="flex flex-col md:flex-row gap-4">
        <input
          type="text"
          placeholder="Country"
          className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-400 focus:outline-none"
        />
        <input
          type="text"
          placeholder="City"
          className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-400 focus:outline-none"
        />
      </div>

      {/* Row 2: Street & Postal Code */}
      <div className="flex flex-col md:flex-row gap-4">
        <input
          type="text"
          placeholder="Street"
          className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-400 focus:outline-none"
        />
        <input
          type="text"
          placeholder="Postal Code"
          className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-400 focus:outline-none"
        />
      </div>

      {/* Textarea: Complete Location */}
      <textarea
        placeholder="The Complete Location"
        rows="4"
        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-400 focus:outline-none resize-none"
      ></textarea>

      {/* Save Button */}
      <button
        type="submit"
        className="w-full md:w-auto px-6 py-3 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-600 focus:ring-2 focus:ring-red-400 focus:outline-none transition duration-300"
      >
        Save
      </button>
    </form>
  </div>
</div>
}

    </div>}
    {current === 'personal' && 
    <div className="flex flex-col gap-4">
        <div className="bg-white shadow-md hover:shadow-xl duration-300 ease p-6 rounded-lg">
            <div className="flex md:flex-row flex-col justify-between gap-3 items-center" >
            <input
                type="text"
                placeholder="First Name"
                defaultValue="Mohamed"
                className="w-full md:w-1/2 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-400 focus:outline-none"
              />
              <input
                type="text"
                placeholder="Last Name"
                defaultValue="Elhefnawy"
                className="w-full md:w-1/2 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-400 focus:outline-none"
              />
            </div>
        </div>
        <div className="bg-white shadow-md hover:shadow-xl duration-300 ease p-6 rounded-lg">
            <div className="flex md:flex-row flex-col justify-between gap-3 items-center" >
            <input
                type="email"
                placeholder="E-mail"
                defaultValue="melhefnawy718@gmail.com"
                className="w-full md:w-1/2 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-400 focus:outline-none"
              />
              <input
                type="text"
                placeholder="Phone Number"
                defaultValue="01272808556"
                className="w-full md:w-1/2 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-400 focus:outline-none"
              />
            </div>
        </div>
        <div className="bg-white shadow-md hover:shadow-xl duration-300 ease p-6 rounded-lg">
            <form className="flex flex-col justify-between gap-3 items-center" >
                <h1 className="self-start text-2xl text-gray-800">Change Password</h1>
                <input type="password" required placeholder="Current Password"  className="px-6 border-gray-300 border py-4 w-full focus:ring-2 focus:ring-red-400 focus:outline-none rounded-lg" />
                <input type="Password" required placeholder="New Password"   className="px-6 py-4 w-full border-gray-300 border focus:ring-2 focus:ring-red-400 focus:outline-none rounded-lg"/>
                <input type="Password" required placeholder="Re-Password"   className="px-6 py-4 w-full border-gray-300 border focus:ring-2 focus:ring-red-400 focus:outline-none rounded-lg"/>
                <button type="submit"  className="w-[100px] px-6 py-3 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2 transition duration-300 ease-in-out">Save</button>
            </form>
        </div>
    </div>
    }
  </div>
</div>


        </div>


   
  )
}

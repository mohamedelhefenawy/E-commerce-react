import { useContext, useEffect, useState } from "react"
import { ShopContext } from "../context/Shopcontext"
import Title from "../components/Title"
import Productitem from "../components/Productitem"
import {ArrowRight} from 'phosphor-react'

export default function Collection() {
  const product = useContext(ShopContext)
  const [show , setShow] = useState(true)
  const [latest , setLateset] = useState([])
  const [category,setCategory] = useState([])
  const [subcategory , setSubcategory] = useState([])
  const [sorttype , setSorttype] = useState('relative')

// console.log(product.products)
  const toggle_category =(e)=>{
    if(category.includes(e.target.value)){
      setCategory(prev=> prev.filter(item => item !== e.target.value))
    }else{
      setCategory(prev=> [...prev ,e.target.value])
    }
  }

  const toggle_type = (e)=>{
    if(subcategory.includes(e.target.value)){
      setSubcategory(prev=> prev.filter(item => item !== e.target.value))
    }else{
      setSubcategory(prev=> [...prev ,e.target.value])
    }
  }

  // console.log(category)

  const apply_filter=()=>{
    let productcopy = product.products.slice()
    if (category.length>0){
      productcopy = productcopy.filter(item=> category.includes(item.category))
    }
    if (subcategory.length>0){
      productcopy = productcopy.filter(item=>subcategory.includes(item.subCategory))
    }
   setLateset(productcopy)
  //  setSorttype('relevant')
  }

const sort_price = ()=>{
  const price_latest = latest.slice()

  switch(sorttype){
    case 'low-high':
      setLateset(price_latest.sort((a,b)=>a.price - b.price))
      break;
    case 'high-low':
      setLateset(price_latest.sort((a,b)=>b.price - a.price))
      break;
    default:
      apply_filter();
      break;
    
  }
}



 


// console.log(sorttype)
  useEffect(()=>{
    setLateset(product.products)
  },[])

  useEffect(()=>{
sort_price()
  },[sorttype])

  useEffect(()=>{
apply_filter()
  },[category,subcategory])



  return (
    <div className="w-[90%] mx-auto mt-5 flex flex-col">

    <div className="flex justify-between flex-col lg:flex-row">

      {/* Left */}
      <div className="flex flex-col gap-3">
      <div className="flex flex-col gap-5 ">
        <div className="flex gap-4 w-fit" onClick={()=>{setShow(!show)}} >
        <p className="font-bold text-2xl cursor-pointer">FILTERS</p>
        <ArrowRight size={32} className={`${show? '':'rotate-90'} transition-all lg:hidden`} />
        </div>
        {show&&<div className=" border w-fit py-4 pr-[200px] px-4 ">
          <p className="font-semibold mb-3 text-2xl">Category</p>

          <p className="flex gap-2 "><input type="checkbox" value={'Men'} className="w-3" onClick={toggle_category}/> Men</p>
          <p className="flex gap-2"><input type="checkbox" value={'Women'} className="w-3" onClick={toggle_category} />Women</p>
          <p className="flex gap-2 "><input type="checkbox"  value={'Kids'} className="w-3" onClick={toggle_category}/>Kids</p>
        </div>}

        {show&&<div className=" border w-fit py-4 pr-[200px]  px-4 ">
          <p className="font-semibold mb-3 text-2xl">Type</p>

          <p className="flex gap-2 "><input type="checkbox" value={"Topwear"} className="w-3" onClick={toggle_type} /> Topwear</p>
          <p className="flex gap-2"><input type="checkbox" value={"Bottomwear"} className="w-3" onClick={toggle_type} />Bottomwear</p>
          <p className="flex gap-2 "><input type="checkbox"  value={"Winterwear"} className="w-3"  onClick={toggle_type}/>Winterwear</p>
        </div>}
        </div>
        <div>
        <select name="" id=""  className="border-2 text-black text-sm px-2 rounded  lg:hidden" onChange={(e)=>setSorttype(e.target.value)}>
          <option value="relevant " className="text-gray-400">Sort by : Relevant</option>
          <option value="low-high" className="text-gray-400" >Sort by : Low to High</option>
          <option value="high-low" className="text-gray-400">Sort by : High to low</option>
        </select>
      </div>
      </div>

      {/* Center */}
      <div className="flex-1 mx-2 my-4 lg:my-0">
        <Title text1={'All'} text2={'Collection'}  />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-5 my-4">
        {latest.map((item,index)=>(
          <Productitem key={index} name={item.name} id={item._id} price={item.price} image={item.image}/>
        ))}
        </div>
      </div>

{/* Right */}
<div>
        <select name="" id=""  className="border-2 text-black text-sm px-2 rounded hidden lg:block" onChange={(e)=>setSorttype(e.target.value)}>
          <option value="relevant " className="text-gray-400">Sort by : Relevant</option>
          <option value="low-high" className="text-gray-400" >Sort by : Low to High</option>
          <option value="high-low" className="text-gray-400">Sort by : High to low</option>
        </select>
      </div>
      </div>

      
     
      
    </div>
  )
}

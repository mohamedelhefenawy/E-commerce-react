import { useContext, useEffect, useState } from "react"
import { ShopContext } from "../context/Shopcontext"
import Title from "./Title"
import Productitem from "./Productitem"

export default function Bestseller() {
    const products = useContext(ShopContext)
    const [Bestproducts , setBestProducts]=useState([])
    console.log(products.products[0].bestseller)
    const bestsellers = products.products
    .filter((product) => product.bestseller === true)
    .slice(0, 5);

    useEffect(()=>{
        
        setBestProducts(bestsellers)
       
    },[])

  return (
    <div className="my-10 w-[90%] mx-auto">
  <div className="py-8 text-center">
        <Title text1={'Best'} text2={'Seller'}/>
        <p className="w-3/4 mx-auto text-gray-600 mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit.  </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 gap-y-5">

        {Bestproducts.map((product,index)=>(
            <Productitem key={index} id={product._id} name={product.name} image={product.image} price={product.price} />
        ))}

      </div>
    </div>
  )
}

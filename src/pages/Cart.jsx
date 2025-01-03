import { useContext, useEffect, useState } from "react"
import { ShopContext } from "../context/Shopcontext"
import Title from "../components/Title"
import del from '../assets/frontend_assets/bin_icon.png'
import Carttotal from "../components/Carttotal"

export default function Cart() {

  const {products , currency , cartitems,updated_quantity} = useContext(ShopContext)
  const [cartdata,setCartData] = useState([])
  
  
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
    <div className="border-t pt-14 w-[80%] mx-auto">
      <div className="text-2xl mb-3 ">
        <Title text1={'Your'} text2={'Cart'} />
      </div>

      <div>
        {cartdata.map((items,index)=>{
          const product = products.find(item=> item._id === items.id  ) 
          console.log(product)
          return(
            <div key={index} className="flex justify-between ">
              <div className="flex gap-2 border-b py-2 mb-5">
              <img src={product.image[0]} alt="" className="w-20" />
              <div className="flex flex-col gap-1">
              <h3 className="text-sm text-gray-600">{product.name}</h3> 
              
              <p>{product.price}{currency}</p>
              <p className="border rounded bg-gray-200 w-fit p-2">{items.size}</p>
              </div>
              </div>
              <input type="number" onChange={(e)=>updated_quantity(items.id ,items.size , Number(e.target.value))} defaultValue={items.quantity} min={1} className="h-fit self-center w-[80px] " />
              <img src={del} onClick={()=>updated_quantity(items.id , items.size ,0)} alt="" className="w-5 h-5 self-center cursor-pointer"/>

            </div>
          )
        })}
      </div>
      {cartdata.length>0&&
      <div className="flex justify-end my-20">
        <div className="w-full sm:w-[450px]">
        <Carttotal path={'/place-order'}/>
        </div>

      </div>
}
      
      
    </div>
  )
}

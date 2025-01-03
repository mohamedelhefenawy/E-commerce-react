import { createContext, useEffect, useState } from 'react'
import {products} from '../assets/frontend_assets/assets'
import { toast } from 'react-toastify'

export const ShopContext  = createContext()

export default function ShopContextProvider(props) {
  const [cartitems , setCartItems] = useState({})

  const addtocart =async (itemId , size)=>{
    if(!size){
      toast.error('Select Product Size')
      return;
    }else{
      toast.success('Added To The Cart Succefully!')
    }

    let cartdata = structuredClone(cartitems)
    if(cartdata[itemId]){
      if(cartdata[itemId] [size]){
        cartdata [itemId][size] +=1

      }else{
        cartdata[itemId] [size] = 1
      }
    }else{
      cartdata[itemId]={}
      cartdata[itemId][size]=1
    }
    setCartItems(cartdata)


  }

  const get_count =()=>{
    let total_count = 0;
    for (const items in cartitems){
      for (const item in cartitems[items]){
        try{
          if(cartitems[items][item]>0){
            total_count += cartitems[items][item]

          }
        }catch(error){

        }
      }
    }
    return total_count;
  }

  const updated_quantity = async(itemId,size ,quantity)=>{
    let cartdata = structuredClone(cartitems)
    cartdata[itemId][size] = quantity
    setCartItems(cartdata)

  }

  const get_total_amount =()=>{
    let amount = 0;
    for (const items in cartitems){
      let iteminfo = products.find(item=>item._id === items)
      for(const item in cartitems[items] ){
        if(cartitems[items][item]>0){
          try{
            amount += iteminfo.price * cartitems[items][item]

          } catch(error){

          }
          
        }
      }

    }
    return amount
  }

    const currency = '$'
    const fees = 10
    const value = {products,currency,fees , cartitems , addtocart ,get_count ,updated_quantity ,get_total_amount}

 

   
  return (
    <ShopContext.Provider value={value}>
        {props.children}
    </ShopContext.Provider>
    
  )
}

import { useContext, useEffect, useState } from "react"
import { ShopContext } from "../context/Shopcontext"
import Title from "./Title"
import Productitem from "./Productitem"
import { useTranslation } from 'react-i18next';
import '../i18n'; // Import i18n setup
export default function LatestCollection() {

    const products = useContext(ShopContext)
    const [latesetproduct , setLatestProduct ]= useState([])
    const {t} = useTranslation()
    console.log(products)
    useEffect(()=>{
        setLatestProduct(products.products.slice(0,10))
    },[])
  return (
    <div className="my-10 w-[90%] mx-auto">
        <div className="py-8 text-center">
        <Title text1={t("Latest")} text2={t('Collection')}/>
        <p className="w-3/4 mx-auto text-gray-600 mt-2">{t("Lorem ipsum dolor sit amet consectetur adipisicing elit.")}</p>
        </div>


        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 gap-y-5">

       
        {latesetproduct.map((product,index)=>(
            <Productitem key={index} id={product._id} name={product.name} price={product.price} image={product.image} />

        )
         
    
    )}
    </div>
    </div>
  )
}

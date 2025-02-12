import { useContext, useEffect, useState } from "react"
import { ShopContext } from "../context/Shopcontext"
import Title from "./Title"
import Productitem from "./Productitem"
import { useTranslation } from 'react-i18next';
import '../i18n';

export default function Bestseller() {
    const products = useContext(ShopContext)
    const [Bestproducts , setBestProducts]=useState([])
    const bestsellers = products.products
    .filter((product) => product.bestseller === true)
    .slice(0, 5);

    useEffect(()=>{
        
        setBestProducts(bestsellers)
       
    },[])

    const {t} = useTranslation()

  return (
    <div className="my-10 w-[90%] mx-auto">
  <div className="py-8 text-center">
        <Title text1={t("Best")} text2={t('Seller')}/>
        <p className="w-3/4 mx-auto text-gray-600 mt-2">{t("Lorem ipsum dolor sit amet consectetur adipisicing elit.")}</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 gap-y-5">

        {Bestproducts.map((product,index)=>(
            <Productitem key={index} id={product._id} name={product.name} image={product.image} price={product.price} />
        ))}

      </div>
    </div>
  )
}

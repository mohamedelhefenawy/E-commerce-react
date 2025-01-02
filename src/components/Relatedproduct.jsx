import { useContext, useEffect, useState } from "react"
import { ShopContext } from "../context/Shopcontext"
import { useNavigate } from "react-router-dom"

export default function Relatedproduct({ category , subCategory}) {
    const [filtered_product,setFilteredProduct] = useState([])
    const products = useContext(ShopContext)
    const navigate = useNavigate()
    useEffect(() => {
        if (products.products) {
          const categoryProducts = products.products.filter(
            (item) =>
              item.category === category && item.subCategory === subCategory
          );
          setFilteredProduct(categoryProducts.slice(0,5));
        }
      }, [category, subCategory, products.products]);
    

  return (
    <div className="mt-10">
      <h3 className="text-xl font-semibold mb-5">Related Products</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {filtered_product.map((item,index)=>(
            <div key={index} className="border p-4 flex flex-col items-center rounded">
                <img src={item.image[0]} alt=""  className="w-40 h-40 object-cover rounded-xl"/>
                <h4 className="font-medium text-lg mt-2">{item.name}</h4>
                <p className="text-gray-600 self-start">
              {products.currency}
              {item.price}
            </p>
            <button className="bg-black text-white px-3 py-2 rounded mt-3" onClick={() => navigate(`/product/${item._id}`)}>
              View Details
            </button>
            </div>
        ))}
      </div>


    </div>
  )
}

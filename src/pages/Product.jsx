import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../context/Shopcontext';
import star from '../assets/frontend_assets/star_icon.png';
import non_star from '../assets/frontend_assets/star_dull_icon.png';
import Relatedproduct from '../components/Relatedproduct';

export default function Product() {
  const { id } = useParams();
  const [productData, setProductData] = useState({});
  const products  = useContext(ShopContext);
  const [image, setImage] = useState('');
  const [size ,setSize] = useState('')
  const [describe ,setDescribe] = useState(false)

  const fetch_Data = async () => {
    
      const product = products.products.find((item) => item._id === id);
      
        setProductData(product);
        console.log(products)
        setImage(product.image[0]); 
      
    
  };

  useEffect(() => {
    window.scrollTo(0,0)
    fetch_Data();
  }, [id, products.products]);

  return (
    <div className="w-[80%] mx-auto">
      <div className="flex gap-7 flex-col lg:flex-row items-start">
        <div className="flex gap-5 mb-5  justify-center flex-col lg:flex-row items-center ">
          <div className="flex flex-row gap-3 lg:flex-col">
            {productData.image &&
              productData.image.map((item, index) => (
                <img
                  src={item}
                  key={index}
                  className="  w-[16vw] sx:w-[50vw] ms:w-[30vw]  cursor-pointer"
                  onClick={() => setImage(item)}
                />
              ))}
          </div>

          <img src={image} alt="" className="w-[70vw]" />
        </div>

        <div className="flex flex-col gap-5">
          <h2 className="font-semibold text-2xl">{productData.name}</h2>
          <div className="flex gap-2 items-center">
            <div className="flex gap-1">
              {Array(4)
                .fill(null)
                .map((_, index) => (
                  <img src={star} key={index} className="w-4" />
                ))}
              <img src={non_star} alt="" className="w-4" />
            </div>
            <p className="ml-2 font-medium">(122)</p>
          </div>

          <p className="font-semibold text-2xl">
            {products.currency}
            {productData.price}
          </p>
          <p className="text-gray-600 w-3/4 text-sm">{productData.description}</p>
          <div className='flex-col gap-3'>    
          <p  className='font-semibold'>Select Size</p>
          <div className='flex gap-2 '>
          {productData.sizes?.map((item,index)=>(<button key={index} onClick={()=>setSize(item)} className={`p-4 border-2 ${item===size ? 'border-black' :''}`} >{item}</button>))}
          </div>
          </div>
          <button className='bg-black text-white px-5 py-4 min-w-[40px] max-w-[150px] rounded' onClick={()=>products.addtocart(productData._id,size)}>Add To Cart</button>
          <hr className='mt-5'/>
          <div className='text-gray-600 text-sm'>
            <p>100% original product</p>
            <p>cash on delievery is available in the product</p>
            <p>easy return and exchange policy with 7 days</p>
          </div>
        </div>
      </div>

      {/* Description and Reviews */}
      <div className='mt-20 '>
        <div className='flex gap-1'>
          <button className={`border rounded ${describe?'text-black':'text-gray-600'} px-5 py-3 text-sm`} onClick={()=>setDescribe(true)}>Description</button>
          <button className={`border rounded ${describe ? 'text-gray-600' :'text-black'} px-5 py-3 text-sm`} onClick={()=>setDescribe(false)}>Reviews (122)</button>
        </div>
        <div className='mt-10'>
          {describe?(<p className='text-gray-600 text-sm '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, quidem error perferendis enim magnam vero delectus iusto nesciunt quod magni totam aperiam, iste adipisci eaque reprehenderit alias aut, inventore unde!</p>):
          (<p className='text-gray-600 text-sm '>This Product is very good and it is made from cotton 100%</p>)}
        </div>
      </div>

      {/* Related Products */}

            {productData.category &&productData.subCategory && (
              <Relatedproduct category={productData.category} subCategory={productData.subCategory} />
            )}
    </div>
  );
}

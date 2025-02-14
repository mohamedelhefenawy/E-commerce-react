import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../context/Shopcontext';
import star from '../assets/frontend_assets/star_icon.png';
import non_star from '../assets/frontend_assets/star_dull_icon.png';
import Relatedproduct from '../components/Relatedproduct';
import { Heart } from 'phosphor-react';
import { useTranslation } from 'react-i18next';
export default function Product() {
  const { id } = useParams();
  const [productData, setProductData] = useState({});
  const products  = useContext(ShopContext);
  const [image, setImage] = useState('');
  const [size ,setSize] = useState('')
  const [describe ,setDescribe] = useState(false)
  const [click , setClick]=useState(false)
  console.log(products.click)
  const {t,i18n} = useTranslation()

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
                  loading='lazy'
                  className="  w-[16vw] sx:w-[50vw] ms:w-[30vw]  object-cover cursor-pointer border border-gray-200 rounded-md hover:border-gray-500"
                  onClick={() => setImage(item)}
                />
              ))}
          </div>

          <img src={image} loading='lazy' alt="" className="w-[70vw] object-cover rounded-lg shadow-lg" />
        </div>

        <div className="flex flex-col gap-5">
          <h2 className="font-semibold text-2xl">{productData.name}</h2>
          <div className="flex gap-2 items-center">
            <div className="flex gap-1">
              {Array(4)
                .fill(null)
                .map((_, index) => (
                  <img src={star} loading='lazy' key={index} className="w-4" />
                ))}
              <img src={non_star} alt="" loading='lazy' className="w-4" />
            </div>
            
            <p className="ml-2 font-medium">(122)</p>
          </div>
          
         
    
          <p className="font-semibold text-2xl">
            {products.currency}
            {productData.price}
          </p>
          <p className="text-gray-600 w-3/4 text-sm">{t("description")}</p>
          <Heart size={24} weight="fill" className ={` cursor-pointer ${products.click[productData._id]?'text-red-400' : ''}`} onClick={()=>{setClick(products.click[productData._id]);products.addtowishlist(productData._id)}} />
         {/* Select Size */}
      <div className="flex flex-col gap-2">
        <p className="font-semibold text-gray-800">Select Size</p>
        <div className="flex gap-2">
          {productData.sizes?.map((item, index) => (
            <button
              key={index}
              onClick={() => setSize(item)}
              className={`px-5 py-2 border-2 rounded-lg transition ${
                item === size ? "border-black bg-gray-100" : "border-gray-300"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      {/* add to cart */}
      <button
        onClick={() => products.addtocart(productData._id, size)}
        className="bg-black text-white px-8 py-3 rounded-lg shadow "
      >
        {t("addToCart")}
      </button>

      {/*  */}
      <hr className="my-5 border-gray-300" />
      <div className="text-gray-600 text-sm space-y-2">
        <p>{t("100% original product")}</p>
        <p>{t("Cash on delivery available")}</p>
        <p>{t("Easy return and exchange within 7 days")}</p>
      </div>
    </div>
  </div>

      {/* Description and Reviews */}
      <div className='mt-20 '>
        <div className='flex gap-1'>
          <button className={`border rounded ${describe?'text-black':'text-gray-600'} px-5 py-3 text-sm`} onClick={()=>setDescribe(true)}>{t('DescriptionTab')}</button>
          <button className={`border rounded ${describe ? 'text-gray-600' :'text-black'} px-5 py-3 text-sm`} onClick={()=>setDescribe(false)}>{t('ReviewsTab')}</button>
        </div>
 
        
        <div className='mt-10'>
          {describe?(<p className='text-gray-600 text-sm '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, quidem error perferendis enim magnam vero delectus iusto nesciunt quod magni totam aperiam, iste adipisci eaque reprehenderit alias aut, inventore unde!</p>):
          (<p className='text-gray-600 text-sm '>{t("cotton")}</p>)}
        </div>
      </div>

{/* Reviews form */}
      {!describe && (
    <form className="my-10 flex flex-col gap-4">
      <textarea
        placeholder={`${t('ReviewPlaceholder')}`}
        className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent resize-none"
      ></textarea>
      <button
        type="submit"
        className="w-[100px] border border-black px-5 py-3 rounded-lg text-sm font-medium bg-black text-white"
      >
        {t('Send')}
      </button>
    </form>
  )}


      {/* Related Products */}

            {productData.category &&productData.subCategory && (
              <Relatedproduct category={productData.category} subCategory={productData.subCategory} />
            )}
    </div>
  );
}

import hero from '../assets/frontend_assets/hero_img.png'
import photo from '../assets/frontend_assets/p_img2_1.png'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
// import { ArrowCircleLeft, ArrowCircleRight } from 'phosphor-react';
import { useRef } from 'react';
import { useTranslation } from 'react-i18next';


const data = [{
  image:hero,
  title:'Latest Arrivals',
  h1:'BESTSELLERS',
  h2:'Shop Now'
},
{
  image:photo,
  title:'Best Seller',
  h1:'The Best Item',
  h2:'Shop Now'
}]


const settings = {
  dots: false, 
  infinite: true, 
  speed: 5000, // Ensures smooth scrolling
  slidesToShow: 1, 
  slidesToScroll: 1, 
  autoplay: true, 
  autoplaySpeed: 0, // Ensures continuous scrolling without delay
  cssEase: "linear", // Creates a seamless transition
  arrows: false, 
  pauseOnHover: false, // Prevent pausing when hovering
  draggable: false, // Prevents user drag interruptions
  swipe: false, // Disables swipe gestures to keep continuous movement
};




export default function Hero() {

  const inputref = useRef(null)
  const {t} = useTranslation()

  return (

    <div  className="slider-container w-[90%] mx-auto mt-10  relative">

      {/* Arrow left */}

      {/* <div className='absolute top-[45%] text-xl md:text-2xl left-3 cursor-pointer hover:text-red-400 duration-300 ease z-10'>
      <button onClick={()=>inputref.current.slickPrev()} >
      <ArrowCircleLeft   />
      </button>
      </div> */}

{/* Slider */}
    <Slider ref={inputref} {...settings} >
      {data.map((item,index)=>(
        <div key={index} className='flex md:flex-row flex-col items-center justify-center '>
        <div  className='flex md:flex-row flex-col justify-center items-center mt-0 '>
         {/* left side */}
         <div className='md:w-[50%] w-full flex flex-col justify-center items-center  text-gray-700'>
   
           <div className='w-fit flex flex-col gap-5 my-5'>
           <div className='flex items-center gap-1 '>
               <hr className='bg-gray-600 h-[3px] w-[40px]' />
               <h3>{t(`${item.title}`)}</h3>
           </div>
           <h1 className='font-bold text-4xl leading-relaxed'>{t(`${item.h1}`)}</h1>
           <div className='flex items-center gap-1'>
           <h3>{t(`${item.h2}`)}</h3>
           <hr className='bg-gray-600 h-[3px] w-[40px]' />
           </div>
           </div>
         </div>
   
         {/* right side */}
         <img src={item.image} alt="" className='md:w-[50%]  w-full md:h-[500px] h-[300px]' />
      </div>
      </div>

      ))

   
}
    </Slider>

{/* Arrow Right */}
    {/* <div className='absolute top-[45%] text-xl md:text-2xl  right-3 cursor-pointer hover:text-red-400 duration-300 ease z-10'>
      <button onClick={()=>inputref.current.slickNext()} >
      <ArrowCircleRight    />
      </button>
      </div> */}
    </div>
  )
}

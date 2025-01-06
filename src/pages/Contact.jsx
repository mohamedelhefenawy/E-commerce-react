import contact from '../assets/frontend_assets/contact_img.png'
import Title from "../components/Title"

export default function Contact() {
  return (
    <div className='my-10 w-[80%] mx-auto'>
      <div className='text-center text-2xl pt-10 border-t'>
        <Title text1={'Contact'} text2={'US'}/>
      </div>
      <div className='my-10 flex flex-col md:flex-row justify-center  gap-10 mb-28'>
        <img src={contact} className='w-full md:w-[480px]' alt="" />
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-semibold text-xl text-gray-600'>Our Store</p>
          <p className='text-gray-500'>54709 willms station <br /> Suite 350 , Washington ,USA</p>
          <p className='text-gray-500'>Tel: 01272808556 <br /> Email: melhefnawy718@gmail.com</p>
          <p className='font-semibold text-xl text-gray-600'>Careers at Forever</p>
          <p className='text-gray-500'>Learn more about our teams and job openings. </p>
          <button className='border border-black  px-8 py-4 text-sm hover:bg-black hover:text-white duration-300 ease'>Explore Jobs</button>
        </div>
      </div>
      
      <form  className=' md:w-[60%] mx-auto flex flex-col gap-2'>
        <input type="text" placeholder='Name' required className='px-2 py-4 border-gray-600 border-2 rounded '/>
        <input type="email" placeholder='E-mail' required className='px-2 py-4  border-gray-600 border-2 rounded' />
        <input type="text" placeholder='Phone' required className='px-2 py-4  border-gray-600 border-2 rounded' />
        <textarea name="" id="" placeholder='Text Your Comment...' required className=' px-2 py-4 rounded border-gray-600 border-2'></textarea>
        <button type='submit' className='mt-5 border border-black  px-8 py-4 rounded text-sm hover:bg-black hover:text-white duration-300 ease'>Send</button>
      </form>
    </div>
  )
}

import Title from '../components/Title'
import about from '../assets/frontend_assets/about_img.png'
import NewsLetter from '../components/NewsLetter'

export default function About() {
  return (
    <div className='w-[80%] mx-auto'>
      <div className='text-2xl text-center'>
<Title text1={'About'} text2={'US'}/>
      </div>
      <div className='my-10 flex flex-col lg:flex-row gap-16'>
        <img src={about} className='w-full lg:w-[450px]' alt="" />
        <div className='flex flex-col lg:w-1/2 justify-center gap-6 text-gray-600'>
        <p>Even if biotechnology is advancing fast, and we’re heading towards a mix between human and machines (bio-materials applied to the human body and organs plus the advance in nano technology and Artificial Intelligence), the probability is imho 50/50</p>
        <p>linguistics and grammar, a sentence is a linguistic expression, such as the English example "The quick brown fox jumps over the lazy dog."</p>
        {/* <b className='text-gray-800'>Our Mission</b> */}
        </div>



      </div>
      <div className='mt-10'>
      <NewsLetter />
      </div>
    </div>
  )
}

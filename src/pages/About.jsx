import Title from '../components/Title'
import about from '../assets/frontend_assets/about_img.png'
import NewsLetter from '../components/NewsLetter'
import { useTranslation } from 'react-i18next'
export default function About() {
  const {t} = useTranslation()
  return (
    <div className='w-[80%] mx-auto'>
      <div className='text-2xl text-center'>
<Title text1={t("aboutTitle1")} text2={t('aboutTitle2')}/>
      </div>
      <div className='my-10 flex flex-col lg:flex-row gap-16'>
        <img src={about} className='w-full lg:w-[450px]' alt="" />
        <div className='flex flex-col lg:w-1/2 justify-center gap-6 text-gray-600'>
        <p>{t("aboutText1")}</p>
        <p>{t("aboutText2")}</p>
        {/* <b className='text-gray-800'>Our Mission</b> */}
        </div>



      </div>
      <div className='mt-10'>
      <NewsLetter />
      </div>
    </div>
  )
}

import support from'../assets/frontend_assets/support_img.png'
import quality from '../assets/frontend_assets/quality_icon.png'
import exchange from '../assets/frontend_assets/exchange_icon.png'
import { useTranslation } from "react-i18next";

export default function Ourpolicy() {
  const { t } = useTranslation();

  return (
    <div className='flex flex-col sm:flex-row   justify-evenly items-center gap-10 my-10'>
        <div className='flex flex-col  text-center'>
            <img src={support} alt="" className='w-12 m-auto mb-5' />
            <p className="font-semibold">{t("supportTitle")}</p>
            <p className="text-gray-400">{t("supportDescription")}</p>
        </div>
        <div className='flex flex-col text-center'>
            <img src={quality} alt=""  className='w-12 m-auto mb-5'/>
            <p className="font-semibold">{t("returnTitle")}</p>
            <p className="text-gray-400">{t("returnDescription")}</p>
        </div>
        <div className='flex flex-col text-center'>
            <img src={exchange} alt="" className='w-12 m-auto mb-5' />
            <p className="font-semibold">{t("exchangeTitle")}</p>
            <p className="text-gray-400">{t("exchangeDescription")}</p>
        </div>
      
    </div>
  )
}

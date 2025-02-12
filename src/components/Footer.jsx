import logo from '../assets/frontend_assets/logo.png';
import { useTranslation } from 'react-i18next';
import '../i18n'; // Import i18n setup

export default function Footer() {
  const { t, i18n } = useTranslation();

  return (
    <div dir={i18n.language === 'ar' ? 'rtl' : 'ltr'}>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 mt-40 my-10 w-[90%] mx-auto text-sm'>
        <div className='flex flex-col items-start'> 
          <img src={logo} alt="" className='w-[200px]' />
          <p className='text-gray-600'>{t('lorem')}</p>
        </div>

        <div className='flex flex-col gap-3'>
          <h1 className='text-xl font-medium mb-5'>{t('company')}</h1>
          <ul className='text-gray-600'>
            <li>{t('home')}</li>
            <li>{t('about')}</li>
            <li>{t('delivery')}</li>
            <li>{t('price')}</li>
          </ul>
        </div>

        <div className='flex flex-col gap-3'>
          <h1 className='text-xl font-medium mb-5'>{t('get_in_touch')}</h1>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li>{t('phone')}</li>
            <li>{t('email')}</li>
          </ul>
        </div>
      </div>

      <div>
        <hr />
        <h3 className='py-5 text-sm text-center'>
          {t('copyright')} <span className='text-gray-600 font-bold'>@7fno</span> . {t('all_rights')}
        </h3>
      </div>



        {/* {i18n.language === 'en' ? 'العربية' : 'English'} */}
      
    </div>
  );
}

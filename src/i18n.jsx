import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          company: "COMPANY",
          home: "Home",
          about: "About Us",
          delivery: "Delivery",
          price: "Price",
          get_in_touch: "Get IN Touch",
          phone: "01272808556",
          email: "melhefnawy718@gmail.com",
          "Emaile":"Email",
          copyright: "Copyright 2024",
          all_rights: "All Rights Reserved",
          lorem: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste debitis facere earum sint commodi, fugiat nesciunt iure sequi consequatur repudiandae enim cumque voluptatibus dicta perspiciatis consectetur labore, natus repellat dolorum.",
          "Home": "Home",
            "Collection": "Collection",
            "About": "About",
            "Wishlist": "Wishlist",
            "Contact": "Contact",
            "Profile": "Profile",
            "Orders": "Orders",
            "Logout": "Logout",
            "Search": "Search",
            "No Results": "No Results",
            "Go To Checkout": "Go To Checkout",
            "Back": "Back",
            "Latest":"Latest",
            "Lorem ipsum dolor sit amet consectetur adipisicing elit.":"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            "Best":"Best",
            "Seller":"Seller",
                "supportTitle": "Best Customer Support",
                "supportDescription": "We provide 24/7 customer support",
                "returnTitle": "7 Days Return Policy",
                "returnDescription": "We provide 7 days return policy",
                "exchangeTitle": "Easy Exchange Policy",
                "exchangeDescription": "We offer hassle-free exchange policy",
                "subscribeTitle": "Subscribe now & get 20% off",
  "subscribeDescription": "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
  "emailPlaceholder": "Enter your E-mail",
  "subscribeButton": "Subscribe",
  "Latest Arrivals":"Latest Arrivals",
  "BESTSELLERS":"BESTSELLERS",
  "Shop Now":"Shop Now",
  "Best Seller":"Best Seller",
  "The Best Item":"The Best Item",
  "aboutTitle1": "About",
  "aboutTitle2": "US",
  "aboutText1": "Even if biotechnology is advancing fast, and we’re heading towards a mix between human and machines (bio-materials applied to the human body and organs plus the advance in nano technology and Artificial Intelligence), the probability is imho 50/50.",
  "aboutText2": "Linguistics and grammar, a sentence is a linguistic expression, such as the English example 'The quick brown fox jumps over the lazy dog.'",
  "All":"All",
  "sortRelevant": "Sort by: Relevant",
  "sortLowHigh": "Sort by: Low to High",
  "sortHighLow": "Sort by: High to Low",
  "FILTERS":"FILTERS",
  "categoryTitle": "Category",
  "categoryMen": "Men",
  "categoryWomen": "Women",
  "categoryKids": "Kids",
  "typeTitle": "Type",
  "typeTopwear": "Topwear",
  "typeBottomwear": "Bottomwear",
  "typeWinterwear": "Winterwear",
  "My":"My",
  "wishlistEmpty": "Your wishlist is currently empty."
  ,  "addToCart": "Add to Cart",
  "CotanctTitle1":"Contact",
  "ContactTitle2":'Us',
  "ourStore": "Our Store",
  "storeAddress": "54709 Willms Station\nSuite 350, Washington, USA",
  "contactUs": "Contact Us",
  "tel": "Tel:",
  "careers": "Careers at Forever",
  "careersDesc": "Learn more about our teams and job openings.",
"getInTouch": "Get IN",
  "touch": "Touch",
  "namePlaceholder": "Name",
  "phonePlaceholder": "Phone",
  "commentPlaceholder": "Text Your Comment...",
  "send": "Send"
  



            
            
        } 
      },
      ar: {
        translation: {
          company: "الشركة",
          home: "الرئيسية",
          about: "من نحن",
          delivery: "التوصيل",
          price: "السعر",
          get_in_touch: "تواصل معنا",
          phone: "٠١٢٧٢٨٠٨٥٥٦",
          email: "melhefnawy718@gmail.com",
          "Emaile":"البريد الالكتروني",
          copyright: "حقوق النشر ٢٠٢٤",
          all_rights: "جميع الحقوق محفوظة",
          lorem: "لوريم إيبسوم دولور سيت أميت، كونسيكتيتور أديبيسينغ إيليت. إيستي ديبيتيس فاكر إيروم سنت كومودي، فوجيهت نيسكنت جوري سيكوي غونسيكتاتور ريبدودياندي إينيم كومك فولوبتاتيبيوس ديكتا بيرسبيكياتيس كونسيكتاتور لابور، ناتوس ريبيليات دولوروم.",
          "Home": "الرئيسية",
            "Collection": "المجموعة",
            "About": "معلومات عنا",
            "Wishlist": "المفضلة",
            "Contact": "اتصل بنا",
            "Profile": "الملف الشخصي",
            "Orders": "الطلبات",
            "Logout": "تسجيل الخروج",
            "Search": "بحث",
            "No Results": "لا توجد نتائج",
            "Go To Checkout": "الذهاب للدفع",
            "Back": "العودة",
            "Latest":"احدث",
            "Lorem ipsum dolor sit amet consectetur adipisicing elit.":"لوريم إيبسوم دولور سيت أميت، كونسيكتيتور أديبيسيتنج إليت.",
            "Best":"الاكثر",
            "Seller":"مبيعا",
            "supportTitle": "أفضل دعم للعملاء",
            "supportDescription": "نوفر دعمًا للعملاء على مدار 24/7",
            "returnTitle": "سياسة إرجاع لمدة 7 أيام",
            "returnDescription": "نوفر سياسة إرجاع لمدة 7 أيام",
            "exchangeTitle": "سياسة استبدال سهلة",
            "exchangeDescription": "نقدم سياسة استبدال خالية من المتاعب",
            "subscribeTitle": "اشترك الآن واحصل على خصم 20%",
  "subscribeDescription": "لوريم إيبسوم دولور سيت أميت كونسيكتيتور أديبيسيتنج إليت.",
  "emailPlaceholder": "أدخل بريدك الإلكتروني",
  "subscribeButton": "اشترك",
  "Latest Arrivals": "أحدث الوافدين",
  "BESTSELLERS": "الأكثر مبيعًا",
  "Shop Now": "تسوق الآن",
  "Best Seller": "الأكثر مبيعًا",
  "The Best Item": "أفضل منتج",
  "aboutTitle1": "معلومات",
  "aboutTitle2": "عنا",
  "aboutText1": "حتى مع التقدم السريع في التكنولوجيا الحيوية، فإننا نتجه نحو مزيج بين البشر والآلات (تطبيق المواد الحيوية على جسم الإنسان وأعضائه بالإضافة إلى التقدم في تكنولوجيا النانو والذكاء الاصطناعي)، والاحتمال في رأيي 50/50.",
  "aboutText2": "في اللغويات والقواعد، الجملة هي تعبير لغوي، مثل المثال الإنجليزي 'الثعلب البني السريع يقفز فوق الكلب الكسول'.",
    "All":"كل",
    "sortRelevant": "الفرز حسب: الأكثر صلة",
  "sortLowHigh": "الفرز حسب: من الأقل إلى الأعلى سعرا",
  "sortHighLow": "الفرز حسب: من الاعلي إلى الاقل سعرا",
  "FILTERS":"تصفية",
  "categoryTitle": "الفئة",
  "categoryMen": "رجال",
  "categoryWomen": "نساء",
  "categoryKids": "أطفال",
  "typeTitle": "النوع",
  "typeTopwear": "الملابس العلوية",
  "typeBottomwear": "الملابس السفلية",
  "typeWinterwear": "ملابس الشتاء",
  "My":"قائمتي",
  "wishlistEmpty": "قائمة الرغبات الخاصة بك فارغة حالياً.",
  "addToCart": "أضف إلى السلة",
  "CotanctTitle1":"تواصل",
  "ContactTitle2":'معنا',
  "ourStore": "متجرنا",
  "storeAddress": "54709 محطة ويلمز\nالجناح 350، واشنطن، الولايات المتحدة",
  "contactUs": "اتصل بنا",
  "tel": "الهاتف:",
  "careers": "الوظائف في Forever",
  "careersDesc": "تعرف على فرقنا وفرص العمل المتاحة.",
  "getInTouch": "تواصل",
  "touch": "معنا",
  "namePlaceholder": "الاسم",
  "phonePlaceholder": "الهاتف",
  "commentPlaceholder": "اكتب تعليقك...",
  "send": "إرسال"


            
        }
      }
    },
    fallbackLng: "en",
    interpolation: { escapeValue: false }
  });

export default i18n;

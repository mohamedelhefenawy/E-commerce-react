/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens:{
        'sx':{ 'min': '1024px', 'max': '1075px' },
        'ms':{'min':'1075px' , 'max':'1130px' }
      }
    },
  },
  plugins: [],
}
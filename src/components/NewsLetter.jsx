
export default function NewsLetter() {
  return (
    <div className="text-center">
      <div className="flex flex-col gap-1">
        <p className="text-gray-800 font-bold text-2xl ">
            Subscribe now & get 20% off
        </p>
        <p className="text-gray-400 font-semibold">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>

      <form action="" className="w-full sm:w-1/2 flex items-center mx-auto my-6 border pl-3">
      <input type="email" className="w-full outline-none" required placeholder="Enter your E-mail" />
      <button type="submit" className="bg-black text-white text-xs px-8 py-4 ">Subscribe</button>
      </form>
    </div>
  )
}

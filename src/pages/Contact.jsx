import contact from '../assets/frontend_assets/contact_img.png'
import Title from "../components/Title"

export default function Contact() {
  return (
    <div className="my-10 w-[90%] max-w-7xl mx-auto">
    {/* Title Section */}
    <div className="text-center text-3xl pt-10 border-t border-gray-200">
      <Title text1="Contact" text2="US" />
    </div>
  
    {/* Contact Information */}
    <div className="my-16 flex flex-col md:flex-row justify-center gap-16 items-center">
      {/* Contact Image */}
      <img
        src={contact}
        className="w-full max-w-[480px] rounded-lg shadow-lg"
        alt="Contact Us"
      />
  
      {/* Contact Details */}
      <div className="flex flex-col justify-center items-start gap-6">
        <div>
          <p className="font-semibold text-2xl text-gray-800">Our Store</p>
          <p className="text-gray-600 mt-2">
            54709 Willms Station <br />
            Suite 350, Washington, USA
          </p>
        </div>
  
        <div>
          <p className="font-semibold text-xl text-gray-800">Contact Us</p>
          <p className="text-gray-600 mt-2">
            Tel: <a href="tel:01272808556" className="text-red-500">01272808556</a>
            <br />
            Email: <a href="mailto:melhefnawy718@gmail.com" className="text-red-500">melhefnawy718@gmail.com</a>
          </p>
        </div>
  
        <div>
          <p className="font-semibold text-xl text-gray-800">Careers at Forever</p>
          <p className="text-gray-600 mt-2">
            Learn more about our teams and job openings.
          </p>
        </div>
  
        <button className="border border-black px-8 py-3 text-sm font-medium text-black rounded-lg hover:bg-black hover:text-white transition duration-300 ease-in-out">
          Explore Jobs
        </button>
      </div>
    </div>
  
    {/* Contact Form */}
    <form className="bg-white p-8 shadow-xl rounded-lg max-w-lg mx-auto">
      <div className='text-center my-3' >
<Title text1={'Get IN'} text2={'Touch'} />
</div>
      {/* Name Field */}
      <input
        type="text"
        placeholder="Name"
        required
        className="px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-transparent w-full mb-4"
      />
  
      {/* Email Field */}
      <input
        type="email"
        placeholder="E-mail"
        required
        className="px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-transparent w-full mb-4"
      />
  
      {/* Phone Field */}
      <input
        type="text"
        placeholder="Phone"
        required
        className="px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-transparent w-full mb-4"
      />
  
      {/* Comment Field */}
      <textarea
        placeholder="Text Your Comment..."
        required
        className="px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-transparent w-full mb-4 resize-none"
      ></textarea>
  
      {/* Submit Button */}
      <button
        type="submit"
        className="w-full px-6 py-3 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2 transition duration-300 ease-in-out"
      >
        Send
      </button>
    </form>
  </div>
  
  )
}

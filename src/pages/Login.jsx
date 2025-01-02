import  { useState } from 'react'
import Title from '../components/Title'
import { useNavigate } from 'react-router-dom'


export default function Login() {

  const [currentstate , setCurrentState] = useState('log in')
  const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle form submission, e.g., API call
    console.log('Form submitted');
    navigate('/')
  };
  return (
    <form className='w-[80%] mx-auto  flex flex-col gap-5 items-center my-10' onSubmit={handleSubmit}>
      
       
        {currentstate==='sign up'?<Title text1={'SIGN'} text2={'UP'}/>:<Title text1={'LOG'} text2={'IN'}/>}

        {currentstate ==='sign up'?<input type="text" placeholder='Name' required className='border-2 border-gray-600 w-[300px] px-4 py-2'/> :'' }
        <input type="email" placeholder='E-mail' required className='border-2 border-gray-600 w-[300px] px-4 py-2' />
        <div className='flex flex-col w-[300px]'>
        <input type="password" required placeholder='Password' className='border-2 border-gray-600  px-4 py-2' />
        <div className='flex justify-between'>
          <p className='cursor-pointer text-sm text-gray-800'>Forgot your Password</p>
          {currentstate==='sign up'? <p className='cursor-pointer text-sm text-gray-800' onClick={()=>setCurrentState('log in')}>Log in</p>:<p className='cursor-pointer text-sm text-gray-800' onClick={()=>setCurrentState('sign up')}>Create Account</p>}
          {/* <p className='cursor-pointer text-sm text-gray-800'>{currentstate==='sign up'?'Log in':'Create Account'}</p> */}
        </div>

        {currentstate==='sign up' ?<button type='submit' className='self-center mt-5 w-[150px] bg-black text-white rounded py-4 px-8' >Sign UP</button>:<button  type='submit' className='self-center mt-5 w-[150px] bg-black text-white rounded py-4 px-8' >Sign IN</button>}

        </div>


      
      <div>

      </div>
      
    </form>
  )
}

import React from 'react'
import NavBar from '../Components/NavBar';
import { Link } from 'react-router-dom';

const Login = ()=> {
  return (
    <>  
   <NavBar/>
   <div className='bg-black absolute top-0 left-0 w-full h-full object-cover -z-10'>
  <div className='flex flex-col md:flex-row mt-20 md:mt-40 mx-4 md:mx-48 bg-gray-100 p-4 md:p-0'>
    <div className='w-full md:w-[680px] mt-0 md:mt-10 flex flex-col items-center md:items-start'>
      <span className='text-3xl text-black font-semibold pl-0 md:pl-10 p'>LOGIN</span>
      <p className='text-black text-xl pl-0 md:pl-10 pb-5 pt-3 text-center md:text-left'>Enter Your Login Details Here</p>
      <iframe src="https://lottie.host/embed/623a2081-3b8a-4cb1-8b5c-4e6f63c99e97/qQbQuNdsWT.json" className='w-full md:w-[400px] h-[400px] ml-0 md:ml-36'></iframe>
    </div>
    <div className='bg-white flex-1 p-4 md:p-10'>
      <form className='mt-6 md:mt-10'>
        <div className='relative mt-6'>
          <input 
            type='text' 
            className='block w-full md:w-3/4 py-2.3 px-0 text-sm text-black border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:text-black focus:border-blue-600 peer' 
            placeholder='Username *' 
            required
          />
        </div>
        <div className='relative mt-6'>
          <input 
            type='password' 
            className='block w-full md:w-3/4 py-2.3 px-0 text-sm text-black border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:text-black focus:border-blue-600 peer' 
            placeholder='Password *' 
            required
          />
          <span className='text-sm text-orange-500 cursor-pointer'>Forgot Password?</span>
        </div>
        <button className='w-full md:w-3/4 text-white h-10 bg-orange-500 mt-6 md:mt-10 mb-5'>LOGIN</button>
      </form>
      <p className='text-sm text-center mr-16'>
        Don't have an account?
        <Link to={'/Signup'} className='text-orange-500'>SignUp</Link>
      </p>
    </div>
  </div>
</div>

   </>
  )
}

export default Login;
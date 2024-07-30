import React from 'react'
import NavBar from '../Components/NavBar';
import { Link } from 'react-router-dom';

const Login = ()=> {
  return (
    <>  
   <NavBar/>
    <div className='bg-black absolute top-0 left-0 w-full h-full object-cover -z-10'>
    <div className='flex mt-40 ml-48 mr-48 bg-gray-100'>
    
        <div className='bg-white flex-1'>
          <form className='mt-48 ml-10'>
           <div className='relative  mt-10'>
              <input type='text' className='block w-3/4 py-2.3 px-0 text-sm text-black border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-black focus:border-blue-600 peer ' placeholder='Username *' required/>
           </div>
           <div className='relative  mt-10'>
              <input type='text' className='block w-3/4 py-2.3 px-0 text-sm text-black border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-black focus:border-blue-600 peer' placeholder='Password *' required/>
              <span className='text-sm text-orange-500'>Forgot Password?</span>
           </div>
            <button className='w-3/4 text-white h-10 bg-orange-500 mt-10 mb-5'>LOGIN</button>
          </form>
          <p className='text-sm text-center mr-8'>Don't have an account?<Link to={'/Signup'} className='text-orange-500'>SignUp</Link></p>
        </div>
        <div className='w-[680px] mt-10'>
            <span className='text-3xl text-black font-semibold  pl-10 '>LOGIN</span><br/>
            <p className='text-black text-xl pl-10 pb-5 pt-3'>Enter Your Login Details Here</p>
            <iframe src="https://lottie.host/embed/623a2081-3b8a-4cb1-8b5c-4e6f63c99e97/qQbQuNdsWT.json" className='w-[400px] h-[400px] ml-32'></iframe>
        </div>
    </div>
        
   </div>
   </>
  )
}

export default Login;
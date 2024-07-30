import React from 'react'
import NavBar from '../Components/NavBar'

const  SignUp = () => {
  return (
   <>  
   <NavBar/>

      <div className='bg-black absolute top-0 left-0 w-full h-full object-cover -z-10'>
  <div className='flex flex-col md:flex-row mt-20 md:mt-40 mx-4 md:mx-48 bg-gray-100 p-4 md:p-0'>
    <div className='w-full md:w-1/2 mt-10 flex flex-col items-center md:items-start'>
      <span className='text-3xl text-black font-semibold pl-0 md:pl-10'>Sign Up</span>
      <p className='text-black text-xl pl-0 md:pl-10 pb-5 pt-3 text-center md:text-left'>Please fill this form to create a new account</p>
      <iframe src="https://lottie.host/embed/2a767f3e-cfaa-4cb2-86b3-619d6b44d4e3/1BxXxtnyEm.json" className='w-full md:w-[400px] h-[400px] ml-0 md:ml-36'></iframe>
    </div>
    
    <div className='bg-white flex-1 p-4 md:p-10'>
      <form className='mt-6 md:mt-10'>
        <div className='relative my-4'>
          <input 
            type='text' 
            className='block w-full md:w-3/4 py-2.3 px-0 text-sm text-black border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:text-black focus:border-blue-600' 
            placeholder='Username *' 
            required
          />
        </div>
        <div className='relative my-4'>
          <input 
            type='text' 
            className='block w-full md:w-3/4 py-2.3 px-0 text-sm text-black border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:text-black focus:border-blue-600' 
            placeholder='NIC *' 
            required
          />
        </div>
        <div className='relative my-4'>
          <input 
            type='text' 
            className='block w-full md:w-3/4 py-2.3 px-0 text-sm text-black border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:text-black focus:border-blue-600' 
            placeholder='Mobile No (+94xxxxxxxxx) *' 
            required
          />
        </div>
        <div className='relative my-4'>
          <input 
            type='email' 
            className='block w-full md:w-3/4 py-2.3 px-0 text-sm text-black border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:text-black focus:border-blue-600' 
            placeholder='Email *' 
            required
          />  
        </div>
        <div className='relative my-4'>
          <input 
            type='password' 
            className='block w-full md:w-3/4 py-2.3 px-0 text-sm text-black border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:text-black focus:border-blue-600' 
            placeholder='Password *' 
            required
          /> 
        </div>
        <div className='flex items-center my-4'>
          <input type='checkbox' className='w-4 h-4 mr-3' />
          <label className='text-sm'>
            I Agree to the <span className='text-orange-500'>Terms and Conditions</span>
          </label>
        </div>
        <button className='w-full md:w-3/4 text-white h-10 bg-orange-500 mt-6'>SIGN UP</button>
      </form>
    </div>
  </div>
</div>



   </>

  )
}
export default SignUp

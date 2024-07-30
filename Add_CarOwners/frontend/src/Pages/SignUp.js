import React from 'react'
import NavBar from '../Components/NavBar'

const  SignUp = () => {
  return (
   <>  
   <NavBar/>
    <div className='bg-black absolute top-0 left-0 w-full h-full object-cover -z-10'>
    <div className='flex mt-40 ml-48 mr-48 bg-gray-100'>
    <div className='w-1/2 mt-10'>
            <span className='text-3xl text-black font-semibold  pl-10 '>Sign Up</span><br/>
            <p className='text-black text-xl pl-10 pb-5 pt-3'>Please fill this from to create a new account</p>
            <iframe src="https://lottie.host/embed/2a767f3e-cfaa-4cb2-86b3-619d6b44d4e3/1BxXxtnyEm.json" className='w-[400px] h-[400px] ml-20'></iframe>
        </div>
        <div className='bg-white flex-1 '>
          <form className='mt-20 ml-32'>
           <div className='relative my-4 mt-10'>
              <input type='text' className='block w-3/4 py-2.3 px-0 text-sm text-black border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-black focus:border-blue-600 peer' placeholder='Username *' required/>
           </div>
           <div className='relative my-4 mt-10'>
              <input type='text' className='block w-3/4 py-2.3 px-0 text-sm text-black border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-black focus:border-blue-600 peer' placeholder='NIC *' required/>
           </div>
           <div className='relative my-4 mt-10'>
              <input type='text' className='block w-3/4 py-2.3 px-0 text-sm text-black border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-black focus:border-blue-600 peer' placeholder='Mobile No(+94xxxxxxxxx) *' required/>
           </div>
           <div className='relative my-4 mt-10'>
              <input type='email' className='block w-3/4 py-2.3 px-0 text-sm text-white border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-black focus:border-blue-600 peer' placeholder='Email *' required/>  
           </div>
           <div className='relative my-4 mt-10'>
              <input type='password' className='block w-3/4 py-2.3 px-0 text-sm text-white border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-black focus:border-blue-600 peer' placeholder='Password *' required/> 
           </div>
           <div>
               <label className=''>
                   <input type='checkbox' className='w-3 h-3 mr-3 mb-5'/>
                   I Agree to the <span className='text-orange-500'>Terms and Conditions</span>
               </label>
            </div>
            <button className='w-3/4 text-white h-10 bg-orange-500 mt-10'>SIGN UP</button>
          </form>
          
        </div>
    </div>
        
   </div>
   </>

  )
}
export default SignUp

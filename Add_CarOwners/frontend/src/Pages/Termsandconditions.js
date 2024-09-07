import React from 'react'
import { useNavigate } from 'react-router-dom'
import { MdCloseFullscreen } from "react-icons/md";

const Termsandconditions = () => {
    const navigate=useNavigate()

  return (
    <div className='h-screen bg-gradient-to-r from-gray-300 to-blue-200'>
        <div className='flex items-center justify-around'>
        <img src='../img/1logo.png'  className='w-[200px] h-[200px] '/>
        <h1 className='text-6xl font-bold'>Terms and Conditions</h1>
        <MdCloseFullscreen onClick={()=>{navigate('/')}} className='text-4xl hover:scale-125 transition-all duration-500 cursor-pointer'/>
        </div>
        <div className='flex  '>
            <iframe src="https://lottie.host/embed/b7cd427c-2669-4288-9b5e-b0c33a1c68cf/qvO4U7sZcW.json" className='w-[700px] h-[500px] ml-10'></iframe>
            <p className='ml-28 text-xl w-[500px] mt-20 font-semibold'>By using our car rental services, you agree to comply with all rental policies, including providing accurate information, adhering to vehicle usage guidelines, and returning the vehicle in the condition it was provided.<br/> Any damages, late returns, or violations of traffic laws during the rental period will be the responsibility of the renter.<br/> We reserve the right to modify these terms at any time, and continued use of our services constitutes acceptance of any updates.</p>
        </div>
    </div>
  )
}

export default Termsandconditions
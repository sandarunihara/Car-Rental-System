import React from 'react'
import { FaSquareFacebook } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { PiCopyright } from "react-icons/pi";
import { useNavigate } from 'react-router-dom';

const Footer = () => {

  const navigate=useNavigate()

  const handleonclick=()=>{
    navigate('/contact')
  }

  return (
    <div className='h-auto md:h-[100px] bg-white'>
  <div className='flex flex-col md:flex-row items-center justify-between p-4 md:mt-5'>
    <div className='flex flex-col md:flex-row items-center'>
      <div className='my-auto md:ml-32 text-center md:text-left'>
        <p className='mt-2 md:mt-6 font-semibold hover:text-yellow-500 cursor-pointer'>About Us</p>
        <p className='flex items-center justify-center md:justify-start font-thin text-sm'><PiCopyright className='mr-1' />2024 SI</p>
      </div>
      <p onClick={()=>{navigate('/termsncondition')}} className='mt-4 md:mt-0 md:ml-20 font-semibold hover:text-yellow-500 cursor-pointer'>Terms and Conditions</p>
      <p onClick={()=>{navigate('/privacypolicy')}} className='mt-4 md:mt-0 md:ml-20 font-semibold hover:text-yellow-500 cursor-pointer'>Privacy Policy</p>
      <p onClick={handleonclick} className='mt-4 md:mt-0 md:ml-20 font-semibold hover:text-yellow-500 cursor-pointer'>Contact Us</p>
    </div>
    <div className='flex flex-col items-center md:flex-row'>
      <div className='mt-4 md:mt-0 md:ml-20 text-center md:text-left'>
        <p className='font-semibold'>Contact</p>
        <p>Call US: <span className='text-yellow-500'>011-2222223/011-2265331</span></p>
        <p>Email: <span className='text-yellow-500'>support@simasrents.lk</span></p>
      </div>
      <div className='flex mt-4 md:mt-0 md:ml-20 text-3xl gap-3'>
        <FaSquareFacebook className='text-blue-700 cursor-pointer hover:scale-110 transition-all duration-500' />
        <FaSquareInstagram className='text-pink-700 cursor-pointer hover:scale-110 transition-all duration-500' />
        <FaLinkedin className='text-blue-700 cursor-pointer hover:scale-110 transition-all duration-500' />
        <FaSquareXTwitter className='cursor-pointer hover:scale-110 transition-all duration-500' />
      </div>
    </div>
  </div>
</div>

  )
}

export default Footer
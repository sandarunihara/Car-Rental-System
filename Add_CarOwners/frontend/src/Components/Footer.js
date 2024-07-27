import React from 'react'
import { FaSquareFacebook } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { PiCopyright } from "react-icons/pi";

const Footer = () => {
  return (
    <div className='h-[75px] '>
      <div className='flex '>
        <div className='my-auto ml-32'>
          <p className=' mt-6 font-semibold hover:text-yellow-500 cursor-pointer'>About Us</p>
          <p className='flex font-thin text-sm'><PiCopyright className='mt-1'/> 2024 SI</p>
        </div>
        <p className='ml-20 my-auto font-semibold hover:text-yellow-500 cursor-pointer'>Terms and Conditions</p>
        <p className='ml-20 my-auto font-semibold hover:text-yellow-500 cursor-pointer'>Privacy Policy</p>
        <div className='ml-20 my-auto cursor-pointer'>
          <p className='font-semibold'>Contact</p>
          <p>Call US :<span className='text-yellow-500'>011-2222223/011-2265331</span></p>
          <p>Email :<span className='text-yellow-500'>support@sirents.lk</span></p>
        </div>
        <div className='flex ml-80 my-auto text-3xl gap-3'>
        <FaSquareFacebook className='text-blue-700'/>
        <FaSquareInstagram className='text-pink-700'/>
        <FaLinkedin className='text-blue-700'/>
        <FaSquareXTwitter />
        </div>
      </div>
    </div>
  )
}

export default Footer
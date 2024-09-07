import React from 'react'
import { MdCloseFullscreen } from "react-icons/md";
import { useNavigate } from 'react-router-dom';

const Privacy = () => {

    const navigate=useNavigate()

  return (
    <div className='h-screen bg-gradient-to-r from-gray-700 to-blue-200'>
        <div className='flex items-center justify-around'>
        <img src='../img/1logo.png'  className='w-[200px] h-[200px] '/>
        <h1 className='text-6xl font-bold'>Our WebSite Privacy</h1>
        <MdCloseFullscreen onClick={()=>{navigate('/')}} className='text-4xl hover:scale-125 transition-all duration-500 cursor-pointer'/>
        </div>
        <div className='flex  '>
            <img src='../img/pp.png' className='w-[700px] h-[500px] ml-10'  />
            <p className='ml-28 text-xl w-[500px] mt-20 font-semibold'>We value your privacy and are committed to protecting your personal information.<br/> Any data collected during the rental process,including your name, contact information, and payment details, is used solely for the purpose of processing your booking and ensuring a smooth rental experience.<br/> We do not share your data with third parties, except when required by law or necessary for providing our services.</p>
        </div>
    </div>
  )
}

export default Privacy
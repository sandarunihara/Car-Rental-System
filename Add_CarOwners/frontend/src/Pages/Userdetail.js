import React from 'react'
import { IoChevronBackOutline } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';

const Userdetail = () => {
  const navigate=useNavigate()
  return (
    <div className='w-screen h-screen flex gap-10 py-10 justify-center bg-gradient-to-r from-gray-200 to-blue-200'>
      <div className='h-1/2 w-1/4 bg-customGray rounded-lg text-white shadow-2xl'>
        <button onClick={()=>navigate('/')} className='pt-3 pl-2 flex w-[75px] transition-all  hover:text-red-500'>
          <IoChevronBackOutline className='text-2xl mt-[1px]'/>
          <span className='font-semibold m'>BACK</span>
        </button>
        <h1 className='font-bold text-center text-2xl'>Profile</h1>
        <div className='rounded-full h-[150px] w-[150px] overflow-hidden mx-auto mt-4 mb-4'>
          <img src='img/po.jpg' className="h-full w-full object-fill"/>
        </div>
        <h2 className='font-semibold text-center text-xl'>Sandaru Nihara</h2>
        <p className='font-semibold text-center text-lg'>sandarunihara@gmail.com</p>
      </div>
      
      <div className='h-full w-2/4 bg-customGray rounded-lg shadow-2xl text-white'>
        <div className='flex pl-32 mt-12 gap-40 border-b-4 pb-12 border-white'>
          <h3 className='text-lg '>Name</h3>
          <h3 className='text-xl font-semibold '>Sandaru Nihara</h3>
        </div>
        <div className='flex  pl-32 mt-12 gap-40 border-b-4 border-white pb-12'>
          <h3 className='text-lg '>Email</h3>
          <h3 className='text-xl font-semibold '>sandarunihara@gmail.com</h3>
        </div>
        <div className='flex  pl-32 mt-12 gap-20 border-b-4 border-white pb-12'>
          <h3 className='text-lg w-fit '>Mobile Number</h3>
          <h3 className='text-xl font-semibold '>071-2237230</h3>
        </div>
        <div className='flex  pl-32 mt-12 gap-44 border-b-4 border-white pb-12'>
          <h3 className='text-lg w-fit'>NIC</h3>
          <h3 className='text-xl font-semibold '>20013260547</h3>
        </div>                  

      </div>
    </div>
  )
}

export default Userdetail
import { Button } from 'flowbite-react';
import React from 'react'
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';



const Carrentmessage = () => {

    const navigate=useNavigate()

    const handledone=()=>{
    navigate('/userdashbord/dash')
    }

  return (
    <div className='bg-gray-300 w-[700px] h-[400px] text-center rounded'>
        <IoCheckmarkDoneCircle className='text-8xl text-green-400 mx-auto mt-14'/>
        <p className='text-3xl font-semibold mt-4'>Purchase Is Successfully</p>
        <p>Car Owner will send you the Message soon</p>
        <Button gradientMonochrome="success" className='mx-auto py-2 px-6 mt-10' onClick={handledone}>Done</Button>
    </div>
  )
}

export default Carrentmessage
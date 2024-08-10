import React from 'react'
import { MdArrowBackIos } from "react-icons/md";
import { Link } from 'react-router-dom';
import { Button } from "flowbite-react";

const Feedback = () => {
  return (
    <>
    
   
        <div className='bg-white w-screen mx-auto h-screen'>
          

          
          <div className='w-[300px] h-screen bg-gray-500 '>
          
            <div className=' pt-5'>
              <Link to={'/'} className='flex mb-3'>
                  <MdArrowBackIos className='text-black size-7 ml-3  '/>
                  <span className='text-xl'>BACK</span>
              </Link>
            </div>
            <span className='text-white text-3xl font-bold ml-12 '>My Rents</span><br/>
            <div className='ml-24 mt-10'>
                <span className='text-xl'>Bookings</span>
            </div>
            <div className='ml-24 mt-5'>
                <span className='text-xl'>Message</span>
            </div>
           
          </div>
          <div className='flex-1'></div>

            <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[500px] bg-gray-400 rounded-3xl justify-center'>
            <h1 className='text-2xl text-center font-bold mt-10'>Add Your Feedback For Vehicle</h1>
            <form className='w-3/4 mx-auto'>
                <div className='mb-5'>
                  <label className='block text-lg font-medium mb-2' htmlFor='name'>Name</label>
                  <input className='w-full px-3 py-2 border border-gray-300 rounded-md' type='text' id='name' name='name' required />
                </div>
                <div className='mb-5'>
                  <label className='block text-lg font-medium mb-2' htmlFor='feedback'>Feedback</label>
                  <textarea className='w-full px-3 py-2 border border-gray-300 rounded-md' id='feedback' name='feedback' rows='5' required></textarea>
                </div>
                <div className='flex justify-center'>
                  <Button gradientDuoTone="purpleToBlue" type='submit' className='px-8 py-1 rounded-xl mt-4'>Done</Button>
                </div>
            </form>
            </div>
            
        </div>  
    
    </>
  )
}

export default Feedback
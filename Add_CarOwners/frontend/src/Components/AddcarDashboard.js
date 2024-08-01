import React from 'react'
import { MdArrowBackIos } from "react-icons/md";
import { Link } from 'react-router-dom';

const AddcarDashboard = () => {
  return (
    <div className='bg-black absolute w-full h-full '>
        <div className='bg-white w-[1450px] mx-auto h-[750px]  mt-5'>
          <div className='w-[300px] h-[750px] bg-gray-500 mb-5'>
            <div className=' pt-5'>
              <Link to={'/'} className='flex mb-3'>
                  <MdArrowBackIos className='text-black size-7 ml-3  '/>
                  <span className='text-xl'>BACK</span>
              </Link>
            </div>
            <span className='text-white text-3xl font-bold ml-12 '>Vehicles</span><br/>
            <div className='ml-24 mt-10'>
                <span className='text-xl'>Vehicle details</span>
            </div>
            <div className='ml-24 mt-5'>
                <span className='text-xl'>Add Vehicle</span>
            </div>
           
          </div>
                
        </div>  
    </div>
  )
}

export default AddcarDashboard;

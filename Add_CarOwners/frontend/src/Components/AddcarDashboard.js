import React from 'react'
import { MdArrowBackIos } from "react-icons/md";
import { Link } from 'react-router-dom';

const AddcarDashboard = () => {

  return (
    <div>
        <div>
          <div className='w-[300px] h-[750px] bg-gray-500 mb-5'>
            <div className='pt-5'>
              <Link to={'/Addcar'} className='flex mb-3'>
                  <MdArrowBackIos className='text-black size-7 ml-3  '/>
                  <span className='text-xl'>BACK</span>
              </Link>
            </div>
            <span className='text-white text-3xl font-bold ml-12 '>Dashboard</span><br/>
            <div className='ml-24 mt-10'>
                <Link to="/Addcar/vehicle-details" className='text-xl text-white hover:text-black'>Vehicle details</Link>
            </div>
            <div className='ml-24 mt-5'>
                <Link to="/Addcar/add-vehicle" className='text-xl text-white hover:text-black'>Add Vehicle</Link>
            </div>
            <div className='ml-24 mt-5'>
                <Link to="/Addcar/message" className='text-xl text-white hover:text-black'>Message</Link>
            </div>
           
          </div>
        </div>  
    </div>
  )
}

export default AddcarDashboard;

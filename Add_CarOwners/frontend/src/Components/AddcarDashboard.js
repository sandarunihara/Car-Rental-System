import React, { useState } from 'react'
import { MdArrowBackIos } from "react-icons/md";
import { Link } from 'react-router-dom';

const AddcarDashboard = () => {

  const [clickedButton,setClickedButton] = useState(null);

  const handleClick = (button) =>{
    setClickedButton(button)
  }

  return (
    <div className='fixed'>
          <div className='w-[300px] h-screen bg-white shadow-2xl rounded-r-2xl'>
            
            <Link to={'/'} className='flex mb-3 pt-5 group w-fit'>
                  <MdArrowBackIos className='text-black size-7 ml-3 group-hover:text-blue-600'/>
                  <p className='text-xl group-hover:text-blue-600'>BACK</p>
              </Link>
              <div className='text-center mt-10'>
                <Link to='/Addcar' className=' text-3xl font-bold text-center  cursor-pointer'  onClick={() => handleClick('Dashbord')}>DashBoard</Link>
              </div>
              <div className='mt-16'>
                <div className='text-center'>
                <Link to="/Addcar/vehicle-details" className={`text-xl ${clickedButton === 'VehicleDatails' ? 'bg-gradient-to-r from-purple-500 to-blue-500  purple-500 text-white' : 'hover:bg-gradient-to-r from-purple-500 to-blue-500'} py-3 px-20 rounded-lg font-semibold`} onClick={() => handleClick('VehicleDatails')}>Vehicle Datails</Link>
                </div>
                <div className='text-center mt-10'>
                  <Link to="/Addcar/add-vehicle" className={`text-xl ${clickedButton === 'AddVehicle' ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white' : 'hover:bg-gradient-to-r from-purple-500 to-blue-500'} py-3 px-24 rounded-lg font-semibold`} onClick={() => handleClick('AddVehicle')}>Add vehicle</Link>
                </div>
                <div className='text-center mt-10'>
                  <Link to="/Addcar/message" className={`text-xl ${clickedButton === 'Message' ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white' : 'hover:bg-gradient-to-r from-purple-500 to-blue-500'} py-3 px-[110px] rounded-lg font-semibold`} onClick={() => handleClick('Message')}>Message</Link>
                </div>
              </div>
            
            
           
          </div>
      </div>  
  )
}

export default AddcarDashboard;

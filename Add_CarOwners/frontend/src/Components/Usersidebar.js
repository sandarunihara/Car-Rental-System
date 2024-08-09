import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { MdArrowBackIos } from "react-icons/md";
import { MdCarRental } from "react-icons/md";
import { SiImessage } from "react-icons/si";

const Usersidebar = () => {

  const [clickedButton, setClickedButton] = useState(null);

    const handleClick = (button) => {
        setClickedButton(button);
    };


  return (
        <div className=' fixed'>
          <div className='w-[300px] h-screen bg-white shadow-2xl rounded-r-2xl'>
            
              <Link to={'/'} className='flex mb-3 pt-5 group w-fit'>
                  <MdArrowBackIos className='text-black size-7 ml-3 group-hover:text-blue-600'/>
                  <p className='text-xl group-hover:text-blue-600'>BACK</p>
              </Link>
            
              <p className=' text-3xl font-bold text-center mt-10 cursor-pointer'  onClick={() => handleClick('Dashbord')}>DashBoard</p>
              <div className='mt-16'>
                <div className='text-center'>
                <Link to="/userdashbord/booking" className={`text-xl ${clickedButton === 'Bookings' ? 'bg-gradient-to-r from-purple-500 to-blue-500  purple-500 text-white' : 'hover:bg-gradient-to-r from-purple-500 to-blue-500'} py-3 px-24 rounded-lg font-semibold`} onClick={() => handleClick('Bookings')}>Bookings</Link>
                </div>
                <div className='text-center mt-10'>
                  <Link to="/userdashbord/usermsg" className={`text-xl ${clickedButton === 'Messages' ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white' : 'hover:bg-gradient-to-r from-purple-500 to-blue-500'} py-3 px-24 rounded-lg font-semibold`} onClick={() => handleClick('Messages')}>Messages</Link>
                </div>
              </div>
          </div>
        </div>
  )
}

export default Usersidebar
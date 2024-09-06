import React, { useState } from 'react';
import { MdArrowBackIos } from "react-icons/md";
import { Link } from 'react-router-dom';

const SideBar = () => {

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
                <Link to='/admin' className=' text-3xl font-bold text-center  cursor-pointer'  onClick={() => handleClick('Dashbord')}>DashBoard</Link>
              </div>
              <div className='mt-16'>
                <div className='text-center'>
                <Link to="/admin/owner-details" className={`text-xl ${clickedButton === 'OwnerDatails' ? 'bg-gradient-to-r from-purple-500 to-blue-500  purple-500 text-white' : 'hover:bg-gradient-to-r from-purple-500 to-blue-500'} py-3 px-20 rounded-lg font-semibold`} onClick={() => handleClick('OwnerDatails')}>Owner Datails</Link>
                </div>
                <div className='text-center mt-10'>
                  <Link to="/admin/add-owner" className={`text-xl ${clickedButton === 'AddOwner' ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white' : 'hover:bg-gradient-to-r from-purple-500 to-blue-500'} py-3 px-24 rounded-lg font-semibold`} onClick={() => handleClick('AddOwner')}>Add Owner</Link>
                </div>
                <div className='text-center mt-10'>
                  <Link to="/admin/contactmsg" className={`text-xl ${clickedButton === 'FeedbackMessage' ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white' : 'hover:bg-gradient-to-r from-purple-500 to-blue-500'} py-3 px-24 rounded-lg font-semibold`} onClick={() => handleClick('FeedbackMessage')}>Feedbacks</Link>
                </div>
              </div>
            
            
           
          </div>
      </div>  
  );
}

export default SideBar;

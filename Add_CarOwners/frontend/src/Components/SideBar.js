import React from 'react';
import { MdArrowBackIos } from "react-icons/md";
import { Link } from 'react-router-dom';

const SideBar = () => {
  return (
    <div>
        <div>
          <div className='w-[300px] h-screen bg-gray-500 '>
            <div className='pt-5'>
              <Link to={'/admin'} className='flex mb-3'>
                  <MdArrowBackIos className='text-black size-7 ml-3  '/>
                  <span className='text-xl'>BACK</span>
              </Link>
            </div>
            <span className='text-white text-3xl font-bold ml-12 '>Admin Panel</span><br/>
            <div className='ml-24 mt-10'>
                <Link to="/admin/owner-details" className='text-xl text-white'>Owner details</Link>
            </div>
            <div className='ml-24 mt-5'>
                <Link to="/admin/add-owner" className='text-xl text-white'>Add Owner</Link>
            </div>
            <div className='ml-24 mt-5'>
                <Link to="/admin/view-feedback" className='text-xl text-white'>View Feedback</Link>
            </div>
          </div>
        </div>  
    </div>
  );
}

export default SideBar;

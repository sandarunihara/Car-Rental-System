import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { MdCloseFullscreen } from "react-icons/md";
import { useLocation, useNavigate } from 'react-router-dom';

export const DisplayFeedback = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const navigate=useNavigate()
  const location = useLocation();
  const { Carnumber } = location.state; 
  useEffect(() => {
    const fetchFeedbacks = async () => {
      const response=await fetch('http://localhost:8050/api/displayfeedbackid',{
        method:'post',
        headers:{
          "content-type": "application/json"
        },
        body:JSON.stringify({Carnumber}) 
      })
      const responsedata=await response.json()
      if(responsedata.success){
      setFeedbacks(responsedata.data)
    }
    };

    fetchFeedbacks();
  }, []);
  
  return (
    <div className='min-h-screen bg-gradient-to-r from-gray-200 to-blue-200 flex flex-col items-center py-10'>
      <div className='flex justify-between w-full max-w-4xl mx-auto space-y-3'>
      <h1 className='text-4xl font-extrabold text-gray-800 mb-8'>User Feedbacks</h1>
      <MdCloseFullscreen onClick={()=>navigate(-1)} className='bg-white text-4xl rounded-full shadow-2xl shadow-black cursor-pointer p-1 hover:bg-blue-300 hover:text-red-600'/>
      </div>
      <div className='w-full max-w-4xl mx-auto space-y-6'>
        {feedbacks.length > 0 ? (
          feedbacks.map((feedback, index) => (
            <div 
              key={index} 
              className='bg-white p-6 rounded-lg shadow-lg transform transition '
            >
              <h2 className='text-2xl font-semibold text-gray-800'>{feedback.name}</h2>
              <p className='text-gray-600 mt-2'>Car Number: <span className='font-medium text-gray-700'>{feedback.Carnumber}</span></p>
              <p className='text-gray-700 mt-4'>{feedback.comment}</p>
            </div>
          ))
        ) : (
          <p className='text-gray-500 text-xl'>No feedbacks available.</p>
        )}
      </div>
    </div>
  );
};





import React, {  useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { AuthContext } from '../Context/AuthContext';

const ViewFeedback = () => {
  
   const {backendDomain} = useContext(AuthContext);
  const [feedback,setfeedback]=useState([])

  const fetchdata=async()=>{
    const response=await fetch(`${backendDomain}/api/diplayconactmsg`,{
      method:'POST',
      headers:{
        "content-type": "application/json"
      }
    })
    const responsedata=await response.json()
    console.log(responsedata);
    if(responsedata.success){
      setfeedback(responsedata.data)
    }else{
      toast(responsedata.message)
    }
  }
  
  useEffect(()=>{
    fetchdata()
  },[])
  

  return (
    <div className="h-screen bg-gradient-to-r from-gray-200 to-blue-200 flex pt-8 overflow-auto ">
      <div className='ml-80 '>  
      <div className=' space-y-6 w-[600px]'>
        {feedback.length > 0 ? (
          feedback.map((feedback, index) => (
            <div 
              key={index} 
              className='bg-white p-6 rounded-lg shadow-lg transform transition w-full'>
              <h2 className='text-2xl font-semibold text-gray-800'>{feedback.name}</h2>
              <p className='text-gray-600 mt-2'>Email: <span className='font-medium text-gray-700'>{feedback.email}</span></p>
              <p className='text-gray-700 mt-4'>{feedback.message}</p>
            </div>
          ))
        ) : (
          <p className='text-gray-500 text-xl'>No feedback available.</p>
        )}
      </div>
      </div>
    </div>
  );
};

export default ViewFeedback;





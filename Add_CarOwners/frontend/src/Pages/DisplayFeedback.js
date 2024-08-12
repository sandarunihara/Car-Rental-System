import React, { useEffect, useState } from 'react';
import axios from 'axios';

export const DisplayFeedback = () => {
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    const fetchFeedbacks = async () => {
      try {
        const response = await axios.get('http://localhost:8050/api/displayfeedback'); 
        setFeedbacks(response.data.data);
      } catch (error) {
        console.error('Error fetching feedbacks:', error);
      }
    };

    fetchFeedbacks();
  }, []);

  return (
    <div className='bg-white w-screen mx-auto h-screen flex flex-col items-center'>
      <h1 className='text-3xl font-bold my-10'>User Feedbacks</h1>
      <div className='w-3/4'>
        {feedbacks.length > 0 ? (
          feedbacks.map((feedback, index) => (
            <div key={index} className='p-5 mb-4 border rounded-lg shadow-md'>
              <h2 className='text-xl font-bold'>{feedback.name}</h2>
              <p className='text-gray-600'>{feedback.carNo}</p>
              <p className='mt-2'>{feedback.comment}</p>
            </div>
          ))
        ) : (
          <p className='text-gray-500'>No feedbacks available.</p>
        )}
      </div>
    </div>
  );
};



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
    <div className='min-h-screen bg-gradient-to-r from-gray-200 to-blue-200 flex flex-col items-center py-10'>
      <h1 className='text-4xl font-extrabold text-gray-800 mb-8'>User Feedbacks</h1>
      <div className='w-full max-w-4xl mx-auto space-y-6'>
        {feedbacks.length > 0 ? (
          feedbacks.map((feedback, index) => (
            <div 
              key={index} 
              className='bg-white p-6 rounded-lg shadow-lg transform transition '
            >
              <h2 className='text-2xl font-semibold text-gray-800'>{feedback.name}</h2>
              <p className='text-gray-600 mt-2'>Car Number: <span className='font-medium text-gray-700'>{feedback.carNo}</span></p>
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




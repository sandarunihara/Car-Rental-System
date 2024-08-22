import React, { useState } from 'react';
import { MdArrowBackIos } from "react-icons/md";
import { Link } from 'react-router-dom';
import { Button } from "flowbite-react";
import axios from 'axios';



const Feedback = () => {
  const [name, setName] = useState('');
  const [feedback, setFeedback] = useState('');
  const [carNo, setCarNo] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8050/api/addfeedback', {
        name,
        comment: feedback,
        carNo
      });
      if (response.data.success) {
        alert('Feedback submitted successfully');
        setName('');
        setFeedback('');
        setCarNo('');
      } else {
        alert('Failed to submit feedback');
      }
    } catch (error) {
      console.error('Error submitting feedback:', error);
      alert('An error occurred while submitting feedback');
    }
  };

  return (
    <div className=' h-screen bg-gradient-to-r from-gray-200 to-blue-200 flex overflow-auto'>
      
      <div className='w-[300px] h-screen bg-white shadow-2xl rounded-r-2xl'>
          <Link to={'/'} className='flex mb-3 pt-5 group w-fit'>
                  <MdArrowBackIos className='text-black size-7 ml-3 group-hover:text-blue-600'/>
                  <p className='text-xl group-hover:text-blue-600'>BACK</p>
          </Link>
        <span className='text-white text-3xl font-bold ml-12 '>My Rents</span><br/>
        <div className='ml-24 mt-10'>
          <span className='text-xl'>Bookings</span>
        </div>
        <div className='ml-24 mt-5'>
          <span className='text-xl'>Message</span>
        </div>
      </div>
      <div className='flex-1 flex justify-center items-center'>
        <div className='w-[700px] h-[550px] bg-black rounded-3xl p-10 flex flex-col justify-center ml-16'>
          <h1 className='text-2xl text-center font-bold mt-10 text-white'>Add Your Feedback For Vehicle</h1>
          <form className='w-full' onSubmit={handleSubmit}>
            <div className='mb-5'>
              <label className='block text-lg font-medium mb-2 text-white mt-5' htmlFor='name'>Name</label>
              <input
                className='w-full px-3 py-2 border border-gray-300 rounded-md'
                type='text'
                id='name'
                name='name'
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className='mb-5'>
              <label className='block text-lg font-medium mb-2 text-white' htmlFor='carNo'>Car Number</label>
              <input
                className='w-full px-3 py-2 border border-gray-300 rounded-md'
                type='text'
                id='carNo'
                name='carNo'
                value={carNo}
                onChange={(e) => setCarNo(e.target.value)}
                required
              />
            </div>
            <div className='mb-5'>
              <label className='block text-lg font-medium mb-2 text-white' htmlFor='feedback'>Feedback</label>
              <textarea
                className='w-full px-3 py-2 border border-gray-300 rounded-md'
                id='feedback'
                name='feedback'
                rows='5'
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                required
              ></textarea>
            </div>
            <div className='flex justify-center'>
              <Button gradientDuoTone="purpleToBlue" type='submit' className='px-8 py-1 rounded-xl mt-0 mb-5'>Done</Button>
            </div>
          </form>
        </div>
        
      </div>
    </div>
  );
};

export default Feedback;


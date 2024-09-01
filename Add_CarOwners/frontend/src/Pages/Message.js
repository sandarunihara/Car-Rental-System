import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Context/AuthContext';

const Message = () => {
  const { authState } = useContext(AuthContext);
  const [ownerdata, setownerdata] = useState([]);

  const fetchdata = async () => {
    try {
      const res = await fetch('http://localhost:8050/api/OwnerInRent', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ OwnerId: authState.user._id }),
      });

      const responsedata = await res.json();
      
      if (responsedata.success) {
        setownerdata(responsedata.data); // Ensure this is an array
        console.log(responsedata.data);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    if (authState.user?._id) {
      fetchdata();
    }
  }, [authState.user?._id]);

  return (
    <>
      {ownerdata.length > 0 ? (
        ownerdata.map((showdata, i) => (
          <div key={i} className='w-3/4 ml-80 h-[300px] bg-gray-300 mx-auto mt-20 rounded-xl bg-gradient-to-r from-gray-300 to-blue-200 overflow-auto'>
            <div className='ml-5 mr-5 pt-5'>
              <p>
                You have received a new request for your car, <span>{showdata?.Carnumber}</span>. Please review the details below and let us know if you would like to accept or decline this request.
              </p>
            </div>
            <div className='mt-10 ml-10'>
              <span>Customer Name: {showdata?.name}</span><br />
              <span>Request Date: {showdata?.rent_date}</span><br />
            </div>
            <div className='flex justify-end mt-14 mr-10'>
              <button className='bg-green-700 text-white font-semibold mr-5 ml-5 border-r-[25px] border-l-[25px] border-green-700 rounded-xl'>Accept</button>
              <button className='bg-red-700 text-white font-semibold border-8 border-r-[25px] border-l-[25px] border-red-700 rounded-xl'>Decline</button>
            </div>
          </div>
        ))
      ) : (
        <p>No data available</p>
      )}
    </>
  );
};

export default Message;

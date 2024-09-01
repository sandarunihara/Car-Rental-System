import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Context/AuthContext';
import { Button } from 'flowbite-react';

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
        setownerdata(responsedata.data);
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

  const updaterentdata = async (rentData) => {
    try {
      const response = await fetch('http://localhost:8050/api/updaterent', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(rentData),
      });

      const responsedata = await response.json();

      if (responsedata.success) {
        console.log('Data updated successfully:', responsedata);
      } else {
        console.error('Error updating data:', responsedata.message);
      }
    } catch (error) {
      console.error('Error sending update request:', error);
    }
  };

  const handleAccept = (index) => {
    const updatedRent = { ...ownerdata[index], Ownerresponce: "1" };
    updaterentdata(updatedRent);

    setownerdata(prevData => 
      prevData.map((item, i) => 
        i === index ? { ...item, Ownerresponce: "1" } : item
      )
    );
  };

  const handleDecline = (index) => {
    const updatedRent = { ...ownerdata[index], Ownerresponce: "2" };
    updaterentdata(updatedRent);

    setownerdata(prevData => 
      prevData.map((item, i) => 
        i === index ? { ...item, Ownerresponce: "2" } : item
      )
    );
  };

  const handleAccessPay = (index) => {
    const updatedRent = { ...ownerdata[index], Ownerresponce: "3" };
    updaterentdata(updatedRent);

    setownerdata(prevData => 
      prevData.map((item, i) => 
        i === index ? { ...item, Ownerresponce: "3" } : item
      )
    );
  };

  return (
    <>
      {ownerdata.length > 0 ? (
        ownerdata.map((showdata, i) => (
          showdata.Ownerresponce === '0' ? (
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
                <button
                  className='bg-green-700 text-white font-semibold mr-5 ml-5 border-r-[25px] border-l-[25px] border-green-700 rounded-xl'
                  onClick={() => handleAccept(i)}
                >
                  Accept
                </button>
                <button
                  className='bg-red-700 text-white font-semibold border-8 border-r-[25px] border-l-[25px] border-red-700 rounded-xl'
                  onClick={() => handleDecline(i)}
                >
                  Decline
                </button>
              </div>
            </div>
          ) : showdata.Ownerresponce === '1' ?(
            
            <div key={i} className='w-3/4 ml-80 h-auto bg-gray-200 mx-auto mt-10 rounded-xl flex flex-col items-center justify-center p-4'>
                      <p>
                        Request for car <span className="font-bold">{showdata?.Carnumber}</span> has already been<span className='text-green-700'> Accepted</span>
                      </p>
                    <div className="w-full text-left mt-2 ml-10">
                      <span>Customer Name: {showdata.name}</span><br />
                      <span>Request Date: {showdata.rent_date}</span>
                    </div>
                  <button className='mt-4 bg-green-700 text-white font-semibold border-r-[25px] border-l-[25px] border-green-700 rounded-xl' onClick={() => handleAccessPay(i)}>
                    Access to Pay
                  </button>
              </div>

          ):showdata.Ownerresponce === '2' ?(
            <div key={i} className='w-3/4 ml-80 h-[150px] bg-gray-200 mx-auto mt-10 rounded-xl flex items-center justify-center'>
              <p>
                Request for car <span className="font-bold">{showdata?.Carnumber}</span> has already been<span className='text-red-700'> Declined</span>
              </p>
            </div>
          ):(
            <div key={i} className='w-3/4 ml-80 h-[150px] bg-gray-200 mx-auto mt-10 rounded-xl flex items-center justify-center'>
              <p>
                <span className='font-bold'>{showdata?.name}</span> Pending to Pay in  <span className='font-bold'>{showdata?.Carnumber}</span>
              </p>
            </div>
          )
        ))
      ) : (
        <p>No data available</p>
      )}
    </>
  );
};

export default Message;

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
    <div className=' h-screen bg-gradient-to-r from-gray-200 to-blue-200 pt-8 overflow-auto'>
      {ownerdata.length > 0 ? (
        ownerdata.map((showdata, i) => (
          showdata.Ownerresponce === '0' ? (
            <div key={i} className='w-3/4 ml-80 h-[300px] bg-white mx-auto mt-20 rounded-xl  overflow-auto shadow-2xl'>
              <div className='ml-5 mr-5 pt-5'>
                <p className='text-xl'>
                  You have received a new request for your car, <span>{showdata?.Carnumber}</span>. Please review the details below and let us know if you would like to accept or decline this request.
                </p>
              </div>
              <div className='mt-10 ml-10 text-2xl '>
                <span>Customer Name: <span className='font-semibold'>{showdata?.name}</span></span><br />
                <span>Request Date: <span className='font-semibold'>{showdata?.rent_date}</span></span><br />
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
            
            <div key={i} className='w-[900px] ml-80 h-fit bg-white mx-auto mt-20 rounded-xl overflow-auto shadow-2xl p-4'>
                      <p className='flex justify-center'>
                        You have successfully accepted a rental request for your car with  <span className="font-bold">{showdata?.Carnumber}</span>. Here are the details of the request:
                      </p>
                    <div className=" text-left mt-2 ml-10 ">
                      <span >Customer Name: <span className='font-semibold'>{showdata.name}</span></span><br />
                      <span>Request Date:  <span className='font-semibold'>{showdata.rent_date}</span></span>
                    </div>
                    <div className='ml-10 mt-4'>
                      <p className='text-xl font-semibold'>Next Steps:</p>
                      <p className='text-lg '>1.Please contact the customer directly to discuss and finalize the rental arrangements.</p>
                      <p className='text-lg '>2.Ensure that you go over the rental terms and conditions with the customer.</p>
                    </div>
                    <div className='flex justify-center'>
                  <Button gradientMonochrome="success" className='mt-4  text-white font-semibold py-4 px-7  rounded-xl' onClick={() => handleAccessPay(i)}>
                    Access to Pay
                  </Button>
                  </div>
              </div>

          ):showdata.Ownerresponce === '2' ?(
            <div key={i} className='w-3/4 ml-80 h-[150px] bg-white shadow-2xl mx-auto mt-10 rounded-xl p-4'>
              <p className='flex  items-center justify-center'>
                You have successfully <span className='text-red-600 font-semibold'>declined</span> the rental request for your car with  <span className="font-bold">{showdata?.Carnumber}</span>. Here are the details of the request:
              </p>
              <div className=" text-left mt-2 ml-10 ">
                      <span className='flex justify-center'>Customer Name: <span className='font-semibold'>{showdata.name}</span></span><br />
                      <span className='flex justify-center'>Request Date:  <span className='font-semibold'>{showdata.rent_date}</span></span>
                    </div>
            </div>
          ):showdata.Ownerresponce === '3' ?(
            <div key={i} className='w-3/4 ml-80 h-[150px] bg-white shadow-2xl mx-auto mt-10 rounded-xl flex items-center justify-center'>
              <p>
                <span className='font-bold'>{showdata?.name}</span> Pending to Pay in  <span className='font-bold'>{showdata?.Carnumber}</span>
              </p>
            </div>
          ):(
            <div key={i} className='w-3/4 ml-80 h-[150px] bg-white shadow-2xl mx-auto mt-10 rounded-xl flex items-center justify-center'>
              <p>
                <span className='font-bold'>{showdata?.name}</span> is Paid to  <span className='font-bold'>{showdata?.Carnumber}</span>
              </p>
            </div>
          )
        ))
      ) : (
        <p>No data available</p>
      )}
    </div>
  );
};

export default Message;

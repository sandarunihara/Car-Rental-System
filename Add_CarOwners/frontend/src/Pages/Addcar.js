import React, { useEffect, useState } from "react";
import { useFetchData } from "../hooks/useFetchData";
import {  HiArrowNarrowUp, HiOutlineUserGroup } from "react-icons/hi";
import { IoCarSport } from "react-icons/io5";



const Addcar = () => {
  const [totalcars, setTotalcars] = useState(0);
  const [totalowners,setTotalowners] = useState(0);
  const [lastmonthcars,setLastmonthcars] = useState(0)
  const [lastmonthowners,setLastmonthowners] = useState(0);

  const { data: carsData, loading } = useFetchData("/getcars");
  const {data:ownersData, loading:pending} = useFetchData('/getowners');

  useEffect(() => {
    if(carsData){
      setTotalcars(carsData.totalcars);
      setLastmonthcars(carsData.lastMonthcars)
    }

    if(ownersData){
      setTotalowners(ownersData.totalowners);
      setLastmonthowners(ownersData.lastMonthowners);
    }

  }, [carsData,ownersData]);

  
  if (loading || pending) {
    return <p>Loading...</p>;
  }
  

  return <div className="w-full flex h-screen bg-gradient-to-r from-gray-300 to-blue-200">
    <div className='p-3 md:mx-auto'>
      <div className='flex-wrap flex gap-4 justify-center items-center h-screen'>
        <div className='flex flex-col p-3 bg-white gap-4 md:w-72 w-full rounded-md shadow-md'>
          <div className='flex justify-between'>
            <div className=''>
              <h3 className='text-gray-500 text-md uppercase'>Total Cars</h3>
              <p className='text-2xl'>{totalcars}</p>
            </div>
            <IoCarSport className='bg-teal-600  text-white rounded-full text-5xl p-3 shadow-lg' />
          </div>
          <div className='flex  gap-2 text-sm'>
            <span className='text-green-500 flex items-center'>
              <HiArrowNarrowUp />
              {lastmonthcars}
            </span>
            <div className='text-gray-500'>Last month</div>
          </div>
        </div>
        <div className='flex flex-col p-3 bg-white gap-4 md:w-72 w-full rounded-md shadow-md'>
          <div className='flex justify-between'>
            <div className=''>
              <h3 className='text-gray-500 text-md uppercase'>Total Owners</h3>
              <p className='text-2xl'>{totalowners}</p>
            </div>
            <HiOutlineUserGroup className='bg-teal-600  text-white rounded-full text-5xl p-3 shadow-lg' />
          </div>
          <div className='flex  gap-2 text-sm'>
            <span className='text-green-500 flex items-center '>
              <HiArrowNarrowUp />
              {lastmonthowners}
            </span>
            <div className='text-gray-500'>Last month</div>
          </div>
        </div>
      </div>
    </div>
  </div>
};


export default Addcar;

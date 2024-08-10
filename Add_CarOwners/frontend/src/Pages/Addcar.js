import React, { useEffect, useState } from "react";
import { useFetchData } from "../hooks/useFetchData";
import { HiAnnotation, HiArrowNarrowUp, HiDocumentText, HiOutlineUserGroup } from "react-icons/hi";
import { Button } from "flowbite-react";
import { Link } from "react-router-dom";
//import AddcarDashboard from '../Components/AddcarDashboard';

const Addcar = () => {
  const [totalcars, setTotalcars] = useState(0);

  const { data: carsData, loading } = useFetchData("/getcars");

  useEffect(() => {
    if(carsData){
      setTotalcars(carsData.totalcars);
    }
  }, [carsData]);

  

  return <div className="w-full flex h-screen bg-gradient-to-r from-gray-300 to-blue-200">
    <div className='p-3 md:mx-auto'>
      <div className='flex-wrap flex gap-4 justify-center'>
        <div className='flex flex-col p-3 bg-white gap-4 md:w-72 w-full rounded-md shadow-md'>
          <div className='flex justify-between'>
            <div className=''>
              <h3 className='text-gray-500 text-md uppercase'>Total Users</h3>
              <p className='text-2xl'>{totalcars}</p>
            </div>
            <HiOutlineUserGroup className='bg-teal-600  text-white rounded-full text-5xl p-3 shadow-lg' />
          </div>
          <div className='flex  gap-2 text-sm'>
            <span className='text-green-500 flex items-center'>
              <HiArrowNarrowUp />
              2
            </span>
            <div className='text-gray-500'>Last month</div>
          </div>
        </div>
      </div>
    </div>
  </div>
};

export default Addcar;

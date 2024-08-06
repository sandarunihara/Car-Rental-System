import React, { useEffect } from 'react'
import axios from 'axios';

const VehicleDetails = () => {
  useEffect(()=>{
    axios.get('http://localhost:8050/api/getcar')
    .then(res=>console.log(res))
    .catch(err=>console.log(err))
  },[])
  return (
    <div className=' h-3/4 bg-slate-300 ml-3 mr-3 mb-10'>
        <div className='content ml-5 mr-5 mt-10 p-5'>
        <table className='w-full '>
          <thead className='bg-gray-50 border-b-2 border-gray-200'>
            <tr>
              <th className='p-3 text-sm font-semibold tracking-wide text-left'>Car Name</th>
              <th className='p-3 text-sm font-semibold tracking-wide text-left'>Fuel Type</th>
              <th className='p-3 text-sm font-semibold tracking-wide text-left'>Car Number</th>
              <th className='p-3 text-sm font-semibold tracking-wide text-left'>Price</th>
              <th className='p-3 text-sm font-semibold tracking-wide text-left'>Seat</th>
              <th className='p-3 text-sm font-semibold tracking-wide text-left'>Location</th>
              <th className='p-3 text-sm font-semibold tracking-wide text-left'>Car Type</th>
            </tr>
          </thead>
        </table>
        </div>
    </div>
    
  )
}

export default VehicleDetails
import React, { useContext, useEffect, useState } from 'react'
import Bookingmsg from '../Components/Bookingmsg'
import { AuthContext } from '../Context/AuthContext'

const Bookingdashbord = () => {

  let userId=''
  const {authState,backendDomain} =useContext(AuthContext)
  if(authState.user){
    userId=authState.user._id
  }
   
  const [rentdata,setrentdata]=useState([])

  const fetchdata=async()=>{
    const response=await fetch(`${backendDomain}/api/displayrent`,{
      method:'post',
      headers:{
        "content-type": "application/json"
      },
      body:JSON.stringify({ userId }) 
    })
    const responsedata=await response.json()
    if(responsedata.success){
      setrentdata(responsedata.data)
    }
  }

  useEffect(()=>{
    fetchdata()
  },[])

  return (
    <div className='h-screen bg-gradient-to-r from-gray-200 to-blue-200 flex pt-8 overflow-auto'>
        <div className='lg:ml-96 ml-48 '>
        {
          Array.isArray(rentdata) && rentdata.length > 0 ? (
            rentdata.map((data, index) => (
              <Bookingmsg key={index} data={data}  />
            ))
          ) : (
            <p className='text-center'>No bookings available.</p> 
          )
        }   
        </div>
    </div>
  )
}

export default Bookingdashbord
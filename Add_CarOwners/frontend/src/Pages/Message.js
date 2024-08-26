import React from 'react'

const Message = () => {
  return (

    <div className='w-3/4 ml-80 h-[300px] bg-gray-300 mx-auto mt-20 rounded-xl bg-gradient-to-r from-gray-300 to-blue-200'>

        <div className='ml-5 mr-5 pt-5'>
          <p className=''>You have received a new request for your car ,<span>[Car number].</span>Please review the details below and lets us know if you would like to accept or decline this request</p>
        </div>
        <div className='mt-10 ml-10'>
            <span>Customer Name:[Customer name]</span><br/>
            <span>Request Date:[Request date]</span><br/>
            <span>Pickup Location:[Pickup location]</span><br/>
        </div>
        <div className='flex justify-end mt-14 mr-10'>
            <button className='bg-green-700 text-white font-semibold mr-5 ml-5 border-r-[25px] border-l-[25px] border-green-700 rounded-xl'>Accept</button>
            <button className='bg-red-700 text-white font-semibold border-8 border-r-[25px] border-l-[25px] border-red-700 rounded-xl'>Decline</button>
            
        </div>
        
    </div>
    
    
  )
}

export default Message
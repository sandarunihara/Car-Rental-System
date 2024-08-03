import React from 'react'
import { GiCarWheel } from "react-icons/gi";

const Carcard = () => {
  return (
    <div className='h-full'>
        <div className='bg-white text-black h-full'>
        
            <img className='w-fit h-2/3 mx-auto' src="img/img-2.jpg"/>
            <h1 className='text-2xl text-left font-bold'>Name</h1>
            <div className='flex'>
                <GiCarWheel className='text-xl mt-[2px]'/>
                <p className=''>fueltype | location</p>
            </div>
            <div className='text-left '>
                <p className=''>RS prices</p>
                <p className=''>fueltype </p>
            </div>

            
        

    </div>
    </div>
  )
}

export default Carcard
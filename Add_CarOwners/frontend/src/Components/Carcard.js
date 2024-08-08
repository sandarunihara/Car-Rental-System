import React from 'react'
import { GiCarWheel } from "react-icons/gi";
import { GrLinkNext } from "react-icons/gr";


const Carcard = ({carname,fuel,location,price}) => {

  return (
    <div className='h-full hover:scale-110 transition-all duration-500 '>
        <div className='bg-white text-black h-full'>
        
            <img className='w-fit h-[200px] mx-auto' src="img/img-2.jpg"/>
            <h1 className='text-2xl text-left font-bold'>{carname}</h1>
            <div className='flex '>
                <GiCarWheel className='text-xl mt-[2px] text-green-500'/>
                <p className='ml-2'>{fuel} | {location}</p>
            </div>
            <p className='text-left text-lg'>RS:{price}/<span className='font-bold'>DAY</span></p>
            
            <button className='mt-2 ml-10 md:flex bg-orange-500 text-black font-bold py-3 px-6   hidden rounded  hover:bg-orange-700 transition-all duration-150 border-2 border-white'>
            Book Now <GrLinkNext className='mt-1 ml-2 md:ml-5 text-lg md:text-xl' />
            </button>
            
        </div>
    </div>
  )
}

export default Carcard
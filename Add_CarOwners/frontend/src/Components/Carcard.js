import React from 'react'
import { MdAirlineSeatReclineNormal } from "react-icons/md";
import { BsFuelPump } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';


const Carcard = ({carname,fuel,location,price,carId,date,carimage}) => {

  const navigate=useNavigate()

  const handlesubmit=()=>{
    navigate('/carpage',{ state: { id:carId,rent_date:date} })
  }
  

  return (
    <div className='relative h-[460px] w-[330px]  cursor-pointer rounded-3xl mb-8'>
        <div className='relative bg-black h-full group overflow-hidden rounded-3xl' onClick={handlesubmit}>
        
            <img className='absolute inset-0 h-full w-full object-fit transform transition-transform duration-1000 group-hover:scale-105 rounded-2xl' src={carimage}/>
            
              <div className='absolute bottom-0 w-[100px] h-[100px] rounded-tr-[50px] text-white bg-black'>
                <div className='relative mt-3  w-[85px] h-[85px] rounded-full border-2 bg-black border-amber-400 transform transition-transform duration-1000 group-hover:bg-amber-400'>
                <p className='text-sm flex flex-col justify-center text-center mt-5 items-center text-amber-400 group-hover:text-black'>RS:{price}<br/><span className='font-bold text-white'>DAY</span></p>
                </div>
              </div>
              <div className='absolute  bottom-0 right-0 p-4 text-white'>
                <h1 className='text-2xl text-left font-bold'>{carname}</h1>
                <div className='flex '>
                    <BsFuelPump className='text-xl mt-[2px] text-amber-400'/>
                    <p className='ml-2'>{fuel}  </p>
                    <IoLocationOutline className='text-xl mt-[2px] text-amber-400 ml-2'/>
                    <p className='ml-1'>{location}</p>
                </div>
              </div>
        </div>
    </div>
  )
}

export default Carcard
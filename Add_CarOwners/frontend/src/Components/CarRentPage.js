import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'
import Footer from './Footer'
import { IoChevronBackOutline } from "react-icons/io5";
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";
import { Link } from 'react-router-dom';
import { MdAirlineSeatReclineNormal } from "react-icons/md";
import { GiGearStickPattern } from "react-icons/gi";
import { BsFuelPump } from "react-icons/bs";
import { PiEngine } from "react-icons/pi";

const CarRentPage = () => {

    const [ImgIndex,setImgIndex]=useState(0)

    const images=[
        'img/1.jpg',
        'img/2.jpg',
        'img/3.jpg'
    ]

    useEffect(() => {
        const interval = setInterval(() => {
          setImgIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000); // Change image every 3 seconds
    
        return () => clearInterval(interval); // Cleanup on unmount
      }, []);

    const handleNext=()=>{
        setImgIndex(pre=>(pre+1)%images.length)
    }

    const handlePrevious=()=>{
        setImgIndex(pre=>(pre-1+images.length)%images.length)
    }

    // Price cal
    const fixprice=14000
    const [price,setprice]=useState(fixprice)

    const driver=(e)=>{
        if(e.target.checked){
            setprice(pre=>pre+5000)
        }else{
            setprice(pre=>pre-5000)
        }
    }

    const babyseat=(e)=>{
        if(e.target.checked){
            setprice(pre=>pre+3000)
        }else{
            setprice(pre=>pre-3000)
        }

    }

  return (
    <div >
        <div className='bg-black pb-20'>
            <NavBar/>
            <div className='bg-white w-[1300px]  mt-10 rounded-xl  mx-auto'>
                <Link to={'/'} className='pt-3 pl-2 flex w-[75px] transition-all  hover:text-red-500'>
                    <IoChevronBackOutline className='text-2xl mt-[1px]'/>
                    <span className='font-semibold m'>BACK</span>
                </Link>

                <div className='flex ml-14 mt-10'>
                    <div className='w-[550px] h-[400px] flex group '>
                    <img src={images[ImgIndex]}  alt='#' className='w-full h-full rounded object-cover' />
                    <GrNext onClick={handleNext} className='absolute font-bold ml-[515px] mt-[200px] text-4xl cursor-pointer opacity-0 group-hover:opacity-100 hover:scale-125 transition-all'/>
                    <GrPrevious onClick={handlePrevious} className='absolute  mt-[200px]  text-4xl cursor-pointer opacity-0 group-hover:opacity-100 hover:scale-125 transition-all'/>
                    </div>
                    <div className='ml-20 '>
                        <div className='flex -ml-3'>
                            <img src='img/mustang.png'  alt='#' className='h-[50px]' />
                            <h1 className='mt-2 ml-4 text-2xl font-bold'>Ford Mustang</h1>
                        </div>
                        <p className='text-2xl font-bold mt-3 mb-2'>Rs. {fixprice}.00 <span className='font-normal'>/DAY</span></p>
                        <p className='mb-2'><span className='bg-yellow-400 px-2 rounded font-bold '><span className='text-white'>100</span> KM</span> Daily Mileage Limit</p>
                        <p className='mb-2'><span className='bg-yellow-400 px-2 rounded font-bold '><span className='text-white'>150</span> LKR</span> Extra Mileage Charge <span className='text-xs'>(per km)</span></p>
                        <div className='px-2 py-2 flex justify-between border border-stone-200 rounded-lg mb-4'>
                            <span className='mt-2 text-lg font-semibold'>Pick Up</span>
                            <input type="date"  className="p-2  rounded-md" />
                        </div>
                        <Link to={"/carpage"} className='text-red-500 hover:text-red-800'>FeedBack </Link>
                        <h2 className='mt-9 text-2xl font-bold mb-3'>Extra Add</h2>
                        <div className='flex'>
                        <input type='checkbox' onChange={driver} id='driver' className='w-6 h-6 mt-[3px] cursor-pointer' />
                        <p className='ml-4 text-xl '> Driver</p>
                        </div>
                        <div className='flex'>
                        <input type='checkbox' onChange={babyseat} id='driver' className='w-6 h-6 mt-[3px] cursor-pointer' />
                        <p className='ml-4 text-xl '> Baby Seat</p>
                        </div>
                    </div>
                </div>
                
                <div className='mt-8 ml-14'>
                    <h2 className='text-2xl font-semibold mb-7'>Options</h2>
                    <div className='flex text-5xl justify-between w-[900px]'>
                        <div className='flex'>
                        <MdAirlineSeatReclineNormal/>
                        <p className='text-xl mt-2 ml-3'>4 Seats</p>
                        </div>
                        <div className='flex'>
                        <GiGearStickPattern/>
                        <p className='text-xl mt-2 ml-3'>Automatic</p>
                        </div>
                        <div className='flex'>
                        <BsFuelPump/>
                        <p className='text-xl mt-2 ml-3'>patrol</p>
                        </div>
                        <div className='flex'>
                        <PiEngine/>
                        <p className='text-xl mt-2 ml-3'>6000cc</p>
                        </div>
                    </div>
                </div>
                

                <div className='ml-14 mt-20'>                    
                    <h2 className='text-2xl font-semibold mb-7'>For Rent Vehicle</h2>
                </div>
            
                <div className=' w-full flex  justify-center '>
                <iframe src="https://lottie.host/embed/a4461e4c-ccad-499c-80ac-718ad5b3fdcb/mKz80XFBdM.json" className='w-[700px] h-[700px]'></iframe>
                    <div className='w-[600px] h-[480px] p-6 mt-28  bg-black rounded-lg absolute bg-opacity-95'>
                        <form className='mt-20 text-white'>
                        <div className='flex justify-between gap-10 mb-8'>
                                <label className='font-semibold'>Name</label>
                                <input type='text' placeholder='Enter Your Name' className='p-2 w-[350px] rounded-lg'/>
                            </div>
                            <div className='flex justify-between gap-10 mb-8'>
                                <label className='font-semibold'>NIC</label>
                                <input type='text' placeholder='Enter Your NIC' className='p-2 w-[350px] rounded-lg'/>
                            </div>
                            <div className='flex justify-between gap-10 mb-8'>
                                <label className='font-semibold'>Email</label>
                                <input type='email' placeholder='Enter Your Email' className='p-2 w-[350px] rounded-lg'/>
                            </div>
                            <div className='flex justify-between gap-10 mb-8'>
                                <label className='font-semibold'>Mobile</label>
                                <input type='text' placeholder='Enter Your Mobile Number' className='p-2 w-[350px] rounded-lg'/>
                            </div>
                        </form>
                    </div>
                </div>

                <div className='bg-stone-300 rounded-b-xl flex justify-end h-[80px]'>
                    <p className='mr-20 my-auto text-2xl font-semibold'>Total : Rs.{price}.00</p>
                    <button className='bg-black h-[45px] px-5 my-auto mr-5 rounded text-white font-semibold hover:text-black hover:bg-white hover:scale-110 hover:shadow-2xl transition-all duration-400' >Purchase Vehicle </button>
                </div>

            </div>
            
        </div>
        <Footer/>
    </div>
  )
}

export default CarRentPage
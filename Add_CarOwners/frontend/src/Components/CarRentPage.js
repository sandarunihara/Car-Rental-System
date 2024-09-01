import React, { useContext, useEffect, useState } from 'react'
import NavBar from './NavBar'
import Footer from './Footer'
import { IoChevronBackOutline } from "react-icons/io5";
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { MdAirlineSeatReclineNormal } from "react-icons/md";
import { GiGearStickPattern } from "react-icons/gi";
import { BsFuelPump } from "react-icons/bs";
import { PiEngine } from "react-icons/pi";
import { AuthContext } from '../Context/AuthContext';

const CarRentPage = () => {
    
    const {authState}=useContext(AuthContext)
    const location=useLocation();
    const { id,rent_date } = location.state;

    const navigate=useNavigate()

    const [cardata,setcardata]=useState({
        Car_type: "",
        Carname:"",
        Carnumber: "",
        Fueltype: "",
        Location:"",
        Price:0,
        Seat:0,
        carimage:"",
        OwnerId:""
    })

    const fetchdata=async()=>{
        const response=await fetch(`http://localhost:8050/api/fetchcar/${id}`,{
            method:'get',
            headers:{
                "content-type": "application/json"
            } 
        })
        const responsedata=await response.json()
        setcardata({
            Car_type: responsedata.Car_type || "",
            Carname: responsedata.Carname || "",
            Carnumber: responsedata.Carnumber || "",
            Fueltype: responsedata.Fueltype || "",
            Location: responsedata.Location || "",
            Price: responsedata.Price || 0,
            Seat: responsedata.Seat || 0,
            carimage:responsedata.CarImage || "",
            OwnerId:responsedata.OwnerId || ""
        });    
    }
    useEffect(()=>{
        fetchdata()
    },[])


    // image change
    const [ImgIndex,setImgIndex]=useState(0)

    const images=[
        cardata.carimage
    ]

    const handleNext=()=>{
        setImgIndex(pre=>(pre+1)%images.length)
    }

    const handlePrevious=()=>{
        setImgIndex(pre=>(pre-1+images.length)%images.length)
    }


    // Price cal
    const fixprice=cardata.Price
    const [price,setprice]=useState(fixprice)
    useEffect(()=>{
        setprice(cardata.Price)
        setrentdata({
            price:price,
            Carnumber:cardata.Carnumber,
            Carname:cardata.Carname,
            name:"",
            nic:authState.user.nic,
            mobile:"",
            email:"",
            rent_date:rent_date,
            OwnerId:cardata.OwnerId,
            userId:authState.user._id
        })
    },[cardata])

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


    // rent data
    

    const [rentdata,setrentdata]=useState({
        name:"",
        nic:authState.user.nic,
        mobile:"",
        email:"",
        rent_date:rent_date,
        price:price,
        Carnumber:cardata.Carnumber,
        Carname:cardata.Carname,
        OwnerId:cardata.OwnerId,
        userId:authState.user._id
    })

    useEffect(()=>{
        setrentdata(pre=>{
            return{
                ...pre,
                price:price
            }
        })
    },[price])

    const handleChange=(e)=>{
        const {name,value}=e.target
        setrentdata(pre=>{
          return{
            ...pre,
            [name]:value
          }
        })
        
      }
    
    //   fetch rent data
    const handlesubmit=async(e)=>{
        e.preventDefault()
        const response=await fetch('http://localhost:8050/api/rentcar',{
            method:'post',
            headers:{
                "content-type": "application/json"
            },
            body:JSON.stringify(rentdata)
        })
        // console.log(rentdata);
        // console.log(authState.user);
        
        
        const responsedata=await response.json()
        // console.log(responsedata);

        if(responsedata.success){
            setrentdata({
                price:price,
                Carnumber:cardata.Carnumber,
                name:"",
                nic:"",
                mobile:"",
                email:"",
                rent_date:rent_date,
                Carname:cardata.Carname,
                OwnerId:cardata.OwnerId,
                userId:authState.user._id
            })
            navigate('/carpage/carrentmessage')
            
        }
        
    }
      
  return (
    <div className=''>
            <NavBar/>
        <div className='bg-black pb-20 pt-14'>
            <div className='bg-white w-[1300px]  mt-10 rounded-xl mx-auto '>
                <button onClick={()=>navigate(-1)} className='pt-3 pl-2 flex w-[75px] transition-all  hover:text-red-500'>
                    <IoChevronBackOutline className='text-2xl mt-[1px]'/>
                    <span className='font-semibold m'>BACK</span>
                </button>

                <div className='flex ml-14 mt-10'>
                    <div className='w-[550px] h-[550px] flex group'>
                    <img src={images[ImgIndex]}  alt='#' className='w-full h-full rounded-xl object-cover' />
                    <GrNext onClick={handleNext} className='absolute font-bold ml-[515px] mt-[200px] text-4xl cursor-pointer opacity-0 group-hover:opacity-100 hover:scale-125 transition-all'/>
                    <GrPrevious onClick={handlePrevious} className='absolute  mt-[200px]  text-4xl cursor-pointer opacity-0 group-hover:opacity-100 hover:scale-125 transition-all'/>
                    </div>
                    <div className='ml-20 bg-gradient-to-r from-gray-200 to-blue-200 w-[550px] h-[550px] px-6 py-5 rounded-xl'>
                        <div className='flex -ml-3'>
                        <iframe className='h-[50px] w-[50px]' src="https://lottie.host/embed/2668bf62-2ffc-4c6c-b569-5d9b6d472058/4VCBa7euBe.json"></iframe>
                            <h1 className='mt-2 ml-4 text-2xl font-bold'>{cardata.Carname}</h1>
                        </div>
                        <p className='text-2xl font-bold mt-3 mb-2'>Rs. {fixprice}.00 <span className='font-normal'>/DAY</span></p>
                        <p className='mb-2'><span className='bg-yellow-400 px-2 rounded font-bold '><span className='text-white'>100</span> KM</span> Daily Mileage Limit</p>
                        <p className='mb-2'><span className='bg-yellow-400 px-2 rounded font-bold '><span className='text-white'>150</span> LKR</span> Extra Mileage Charge <span className='text-xs'>(per km)</span></p>
                        <Link to={"/displayfeedback"} state={{ Carnumber: cardata.Carnumber }}  className='mb-10 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold py-1 px-4 rounded-lg shadow-lg hover:from-purple-600 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-all duration-300'>FeedBacks </Link>
                        <div className='py-2 flex mb-4 border-none'>
                            <span className='mt-2 mr-5 text-lg font-semibold'>Pick Up</span>
                            <input type="date"  className="p-2 rounded-md" value={rent_date} />
                        </div>
                        <h2 className='mt-5 text-2xl font-bold mb-3'>Extra Add</h2>
                        <div className='flex'>
                        <input type='checkbox' onChange={driver} id='driver' className='w-6 h-6 mt-[3px] cursor-pointer' />
                        <p className='ml-4 text-xl '> Driver</p>
                        </div>
                        <div className='flex'>
                        <input type='checkbox' onChange={babyseat} id='driver' className='w-6 h-6 mt-[3px] cursor-pointer' />
                        <p className='ml-4 text-xl '> Baby Seat</p>
                        </div>
                        <div className='flex'>
                        <iframe className='w-[200px] h-[200px]' src="https://lottie.host/embed/883987f4-3677-41d7-a7e0-845b5480160a/Hxru9uqwcR.json"></iframe>
                        </div>
                    </div>
                </div>
                
                <div className='mt-8 bg-gradient-to-r from-gray-200 to-blue-200 pb-9 mx-auto'>
                    <h2 className='text-2xl font-semibold mb-7 ml-14'>Options</h2>
                    <div className='flex text-5xl justify-between w-[900px] ml-14'>
                        <div className='flex'>
                        <MdAirlineSeatReclineNormal/>
                        <p className='text-xl mt-2 ml-3'>{cardata.Seat} Seats</p>
                        </div>
                        <div className='flex'>
                        <GiGearStickPattern/>
                        <p className='text-xl mt-2 ml-3'>Automatic</p>
                        </div>
                        <div className='flex'>
                        <BsFuelPump/>
                        <p className='text-xl mt-2 ml-3'>{cardata.Fueltype}</p>
                        </div>
                        <div className='flex'>
                        <PiEngine/>
                        <p className='text-xl mt-2 ml-3'>6000cc</p>
                        </div>
                    </div>
                </div>
                

                <div className='ml-14 mt-4'>                    
                    <h2 className='text-2xl font-semibold mb-7'>For Rent Vehicle</h2>
                </div>
            
                <div className=' w-full flex  justify-center '>
                <iframe src="https://lottie.host/embed/a4461e4c-ccad-499c-80ac-718ad5b3fdcb/mKz80XFBdM.json" className='w-[700px] h-[700px]'></iframe>
                    <div className='w-[600px] h-[480px] p-6 mt-28  bg-black rounded-lg absolute bg-opacity-95'>
                        <form className='mt-20'>
                            <div className='flex justify-between gap-10 mb-8'>
                                <label className='font-semibold text-white'>Name</label>
                                <input className='p-2 w-[350px] rounded-lg' 
                                type='text' 
                                placeholder='Enter Your Name'
                                id='name'
                                name='name'
                                value={rentdata.name}
                                onChange={handleChange}
                                />
                            </div>
                            <div className='flex justify-between gap-10 mb-8'>
                                <label className='font-semibold text-white'>NIC</label>
                                <input className='p-2 w-[350px] rounded-lg' 
                                type='text' 
                                placeholder='NIC(Pleace provide same NIC use to login)'
                                id='nic'
                                name='nic'
                                value={rentdata.nic}
                                onChange={handleChange}
                                />
                            </div>
                            <div className='flex justify-between gap-10 mb-8'>
                                <label className='font-semibold text-white'>Email</label>
                                <input className='p-2 w-[350px] rounded-lg' 
                                type='email' 
                                placeholder='Enter Your Email'
                                id='email'
                                name='email'
                                value={rentdata.email}
                                onChange={handleChange}
                                />
                            </div>
                            <div className='flex justify-between gap-10 mb-8'>
                                <label className='font-semibold text-white'>Mobile</label>
                                <input className='p-2 w-[350px] rounded-lg' 
                                type='text' 
                                placeholder='Enter Your Mobile Number'
                                id='mobile'
                                name='mobile'
                                value={rentdata.mobile}
                                onChange={handleChange}
                                />
                            </div>
                        </form>
                    </div>
                </div>
                <div className='bg-gradient-to-r from-white to-red-300 rounded-b-xl flex justify-end h-[80px]'>
                    <p className='mr-20 my-auto text-2xl font-semibold'>Total : Rs.{price}.00</p>
                    <button className='bg-black h-[45px] px-5 my-auto mr-5 rounded text-white font-semibold hover:text-black hover:bg-white hover:scale-110 hover:shadow-2xl transition-all duration-400' onClick={handlesubmit} >Purchase Vehicle </button>
                </div>
            </div>
            
        </div>
        <Footer/>
    </div>
  )
}

export default CarRentPage





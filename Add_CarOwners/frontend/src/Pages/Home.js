import React, { useEffect, useState } from 'react'
import './Home.css';
import { GrLinkNext } from "react-icons/gr";
import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';
import Carcard from '../Components/Carcard';
import { Link, useNavigate } from 'react-router-dom';


const Home = () => {
  const [searchvalue,setsearchvalue]=useState({
    rent_date:"",
    Location:"",
    Car_type:""
  })

  const navigate=useNavigate()

  const handleChange=(e)=>{
    
    const {name,value}=e.target
    setsearchvalue(pre=>{
      return{
        ...pre,
        [name]:value
      }
    })
  }
  const handlesubmit=async(e)=>{
    e.preventDefault()
    const response=await fetch('http://localhost:8050/api/search',{
      method:'post',
      headers:{
        "content-type": "application/json"
      },
      body:JSON.stringify(searchvalue)

    })

    const responsedata=await response.json()
    

    if(responsedata.success){
      navigate('/search',{ state: { searchResults: responsedata.data, searchDetails: searchvalue } })
      
      
    }else{
      console.log(responsedata.error);
      
    }
  }

  // fetch data for RENT section
  const [cardata,setcardata]=useState([])

  const cardetails=async()=>{
    const response=await fetch('http://localhost:8050/api/getcars',{
      method:'get',
      headers:{
        "content-type": "application/json"
      }
    })

    const responsedata=await response.json()
    setcardata(responsedata.addcars)
    console.log(cardata);
    

  }

  useEffect(()=>{
    cardetails()
  },[])


  return (
    <div className='bg-black'>
      <NavBar/>
      <video autoPlay  muted className="background-video">
                <source src={`${process.env.PUBLIC_URL}/1.mp4`} type="video/mp4" />
            </video>
      <div className='pt-16 md:pt-32 pl-4 md:pl-9 ml-0 md:ml-9 flex flex-col md:flex-row z-10 relative'>
      <div className='text-white'>
        <h1 className='text-4xl md:text-8xl font-bold'>Rent Cars <br/>Travel Easy</h1>
        <p className='text-lg md:text-2xl mt-5 md:mt-7 w-full md:w-[500px]'>A car rental, hire car, or car hire agency is a company <br/> that rents automobiles for short periods of time,<br/> generally ranging from a few hours to a few weeks</p>
        <button className='mt-5 flex bg-white text-black font-bold py-3 px-6 md:px-12 rounded hover:text-white hover:bg-black transition-all duration-150 border-2 border-white'>
          Book Now <GrLinkNext className='mt-1 ml-2 md:ml-5 text-lg md:text-xl' />
        </button>
      </div>
      {/* *****************search car*********************  */}
      <form className='mx-auto my-8 md:my-auto'>
        <div className="p-4 bg-white rounded-md shadow-2xl font-bold bg-opacity-35 hover:scale-110 transition-all duration-700">
          <h2 className="text-xl md:text-2xl font-bold mb-4 text-center">Find Your Perfect Ride</h2>
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4 p-3">
            <div className="flex items-center space-x-2 md:space-x-4">
              <span className="material-icons">Location</span>
              <select className="p-2 border border-gray-300 rounded-md" required id='Location' name='Location' value={searchvalue.Location} onChange={handleChange}>
                <option value='' hidden>Choose a Location</option>
                <option>Colombo</option>
                <option>Gampaha</option>
                <option>Kalutara</option>
                <option>Kandy</option>
                <option>Matale</option>
                <option>Nuwara Eliya</option>
                <option>Galle</option>
                <option>Matara</option>
                <option>Hambantota</option>
              </select>
            </div>
            
            <div className="flex items-center space-x-2 md:space-x-4">
              <span className="material-icons">Rent Date</span>
              <input type="date" required className="p-2 border border-gray-300 rounded-md" placeholder="Pick-up Date" id='rent_date' name='rent_date' value={searchvalue.rent_date} onChange={handleChange}/>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:space-x-4 p-3">
            <div className="flex items-center space-x-2 md:space-x-2">
              <span className="material-icons">Vehicle Type</span>
              <select className="p-2 border border-gray-300 rounded-md" required id='Car_type' name='Car_type' value={searchvalue.Car_type} onChange={handleChange}>
                <option value='' hidden>Select Type</option>
                <option>CAR</option>
                <option>SUV</option>
                <option>VAN</option>
              </select>
            </div>
            <button type='submit' className="px-8 md:px-16 py-2 text-white bg-black rounded-md" onClick={handlesubmit}>
              Search
            </button>
          </div>
        </div>
      </form>
      </div> 


      <div className='text-white mt-[75px] bg-black'>
        {/* *****************ABOUT ************ */}
        <div className='flex flex-col md:flex-row justify-between w-full h-full'>
          <div className='bg-stone-300 w-full md:w-[800px] h-auto md:h-[550px] rounded-r-2xl text-black p-4 md:p-0'>
            <h2 className='font-bold text-2xl md:text-4xl text-center p-4 md:p-14'>Not your typical rental car</h2>
            <p className='text-center w-full md:w-[700px] mx-auto text-sm md:text-lg'>Forget expensive, impersonal rental car companies - SI Rents offers a revolutionary new way to rent out and hire vehicles. Our peer-to-peer platform revolutionises the industry, offering personalised options that established car rental companies don't.</p>
            <p className='text-center w-full md:w-[700px] mx-auto text-sm md:text-lg mt-4 md:mt-0'><br/>If you own vehicles, you can generate passive income from unused vehicles hassle-free; if you are in the mood to rent, you can find the ideal car for your needs at affordable prices.</p>
            <p className='text-center w-full md:w-[700px] mx-auto text-sm md:text-lg mt-4 md:mt-0'><br/>Whether you're after a luxury sedan for a weekend getaway or an oversized van for business use, SI Rents has all your driving needs covered! And who said earning money had to be hard work? With our easy-to-use platform, getting in control of your finances has never been simpler - what are you waiting for?</p>
          </div>
          <img src="img/about.jpg" alt='Description of the' className='w-full md:w-[450px] h-auto md:h-[550px] hidden md:block rounded-2xl mt-4 md:mt-0' />
          <div className='bg-stone-300 h-auto md:h-[550px] w-full md:w-[150px] rounded-l-2xl mt-4 md:mt-0'>
            <div className='text-center flex flex-row md:flex-col items-center justify-center h-full space-y-0 md:space-y-6 space-x-4 md:space-x-0'>
              <img src="img/car-rent.png" className='w-[50px] md:w-[100px] h-[50px] md:h-[100px]' />
              <img src="img/car-key.png" className='w-[50px] md:w-[100px] h-[50px] md:h-[100px]' />
              <img src="img/car-rental.png" className='w-[50px] md:w-[100px] h-[50px] md:h-[100px]' />
              <img src="img/rental.png" className='w-[50px] md:w-[100px] h-[50px] md:h-[100px]' />
            </div>
          </div>
      </div>
        {/* ***************RENT ********** */}
        <div className='text-center'>
          <h2 className='text-3xl md:text-6xl font-bold mt-10 md:mt-20'>Ride of the day</h2>
          <div className=' md:justify-between p-4 md:p-10'>
            <div className='flex flex-wrap justify-between m-2'>
            {cardata.slice(0, 4).map((car, index) => (
                <Carcard 
                  key={index} 
                  carname={car.Carname} 
                  fuel={car.Fueltype} 
                  location={car.Location} 
                  price={car.Price} 
                  carId={car._id} 
                  date={Date} 
                />
              ))}

            </div>
          </div>
        </div>
        {/* **************Service********** */}
        <div className='text-center'>
          <h2 className='text-3xl md:text-6xl font-bold mt-10 md:mt-20'>Name Eco System</h2>
          <div className='flex flex-col md:flex-row justify-center md:justify-between p-4 md:p-10 space-y-6 md:space-y-0 md:space-x-6'>
            <div className='bg-stone-300 h-auto md:h-[320px] w-full md:w-[650px] rounded-lg flex flex-col md:flex-row'>
              <img src="img/img-2.jpg" alt='Hirer' className='w-full md:w-[300px] h-[200px] md:h-full rounded-t-lg md:rounded-l-lg md:rounded-t-none object-cover' />
              <p className='text-black p-4 md:p-10 flex flex-col justify-center'>
                <span className='text-xl font-semibold'>SI Rents Hirers</span><br/><br/>
                Once you are registered on SI Rents, congrats, you are now a SI Rents member, and you can start choosing from thousands of vehicles and find your perfect match!
              </p>
            </div>
            <div className='bg-stone-300 h-auto md:h-[320px] w-full md:w-[650px] rounded-lg flex flex-col md:flex-row'>
              <p className='text-black p-4 md:p-10 flex flex-col justify-center'>
                <span className='text-xl font-semibold'>SI Rents Hosts</span><br/><br/>
                SI Rents Hosts are made up of countless vehicle owners. SI Rents members can easily sign up to be SI Rents hosts and start earning from their vehicles. Conditions apply.
              </p>
              <img src="img/img-3.jpg" alt='Host' className='w-full md:w-[300px] h-[200px] md:h-full rounded-b-lg md:rounded-r-lg md:rounded-b-none object-cover' />
            </div>
          </div>
        </div>
        
      </div>
      <Footer/>

    </div>
  )
}

export default Home
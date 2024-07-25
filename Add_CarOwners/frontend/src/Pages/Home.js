import React from 'react'
import './Home.css';
import { GrLinkNext } from "react-icons/gr";


const Home = () => {
  return (
    <div>
      <video autoPlay  muted className="background-video">
                <source src={`${process.env.PUBLIC_URL}/1.mp4`} type="video/mp4" />
            </video>
      <div className='pt-32 pl-9 ml-9 flex'>
        <div className='text-white'>
            <h1 className='text-8xl font-bold'>Rent Cars <br/>Travel Easy</h1>
            <p className='text-2xl mt-7 w-[500px]'>A car rental, hire car, or car hire agency is a company <br/> that rents automobiles for short periods of time,<br/> generally ranging from a few hours to a few weeks</p>
            <button className='mt-5 flex bg-white text-black font-bold py-3 px-12  rounded hover:text-white hover:bg-black  transition-all duration-150 border-2 border-white'>Book Now <GrLinkNext className='mt-1 ml-5 text-xl' /></button>
        </div>
        <div className='mx-auto my-auto '>
          <div className="p-4 bg-white  rounded-md shadow-2xl font-bold bg-opacity-35 hover:scale-110 transition-all duration-700">
          <h2 className="text-2xl font-bold mb-4 text-center">Find Your Perfect Ride</h2>
          <div className="flex items-center space-x-4 p-3">
            <div className="space-x-4">
                <span className="material-icons">Place</span>
                <select className="p-2 border border-gray-300 rounded-md" required>
                <option>Choose a Location</option>
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
            
            <div className="space-x-4">
              <span className="material-icons">Pick-up Date</span>
              <input type="date" required className="p-2 border border-gray-300 rounded-md" placeholder="Pick-up Date" />
            </div>
          </div>
          
          <div className="flex justify-between items-center space-x-4 p-3">
            <div className="flex items-center space-x-2">
              <span className="material-icons">Select Car Type</span>
              <select className="p-2 border border-gray-300 rounded-md" required>
                <option>Select Car</option>
                <option>CAR</option>
                <option>SUV</option>
                <option>VAN</option>
              </select>
            </div>
            
            <button className="px-16 py-2 text-white bg-black rounded-md ">
              Search
            </button>
          </div>
      
      </div>
      </div>
      
      
      </div> 
      <div className='text-white mt-[75px] bg-black'>
        {/* *****************ABOUT ************ */}
        <div className='flex justify-between'>
          <div className='bg-stone-300 w-[800px] h-[550px] rounded-r-2xl text-black'>
            <h2 className='font-bold text-4xl text-center p-14'>Not your typical rental car</h2>
            <p className='text-center w-[700px] mx-auto text-lg'>Forget expensive, impersonal rental car companies - SI Rents offers a revolutionary new way to rent out and hire vehicles. Our peer-to-peer platform revolutionises the industry, offering personalised options that established car rental companies don't.</p>
            <p className='text-center w-[700px] mx-auto text-lg'><br/>If you own vehicles, you can generate passive income from unused vehicles hassle-free; if you are in the mood to rent, you can find the ideal car for your needs at affordable prices.</p>
            <p className='text-center w-[700px] mx-auto text-lg'><br/>Whether you're after a luxury sedan for a weekend getaway or an oversized van for business use, SI Rents has all your driving needs covered! And who said earning money had to be hard work? With our easy-to-use platform, getting in control of your finances has never been simpler - what are you waiting for?</p>
          </div>
          <img src="img/about.jpg"  alt='Description of the' className='w-[450px] h-[550px] rounded-2xl ' />
          <div className='bg-stone-300 h-[550px] w-[150px] rounded-l-2xl'>
            <div className='text-center flex flex-col items-center justify-center h-full space-y-6'>
              <img src="img/car-rent.png"  className='w-[100px] h-[100px] ' />
              <img src="img/car-key.png"  className='w-[100px] h-[100px] ' />
              <img src="img/car-rental.png"  className='w-[100px] h-[100px] ' />
              <img src="img/rental.png"  className='w-[100px] h-[100px] ' />
              
            </div>
          </div>
        </div>
        {/* ***************RENT ********** */}
        <div className='text-center' >
          <h2 className='text-6xl font-bold mt-20'>Ride of the day</h2>
          <div className='flex justify-between p-10'>
            <div className='bg-stone-300 h-[450px] w-[300px]'></div>
            <div className='bg-stone-300 h-[450px] w-[300px]'></div>
            <div className='bg-stone-300 h-[450px] w-[300px]'></div>
            <div className='bg-stone-300 h-[450px] w-[300px]'></div>
          </div>
        </div>
        {/* **************Service********** */}
        <div className='text-center' >
          <h2 className='text-6xl font-bold mt-20'>Name Eco System</h2>
          <div className='flex justify-between p-10'>
            <div className='bg-stone-300 h-[320px] w-[650px] rounded-lg flex'>
            <img src="img/img-2.jpg "  className='w-[300px] h-full rounded-l-lg' />
            <p className='text-black p-10'> <span className='text-xl font-semibold'>SI Rents Hirers</span><br/><br/><br/>
            Once you are registered on SI Rents, congrats, you are now a SI Rents member, and you can start choosing from thousands of vehicles and find your perfect match!</p>
            </div>
            <div className='bg-stone-300 h-[320px] w-[650px] rounded-lg flex'>
            <p className='text-black p-10'> <span className='text-xl font-semibold'>SI Rents Hosts</span><br/><br/><br/>
            SI Rents Hosts are made up of countless vehicle owners. SI Rents members can easily sign up to be SI Rents hosts and start earning from their vehicles. Conditions apply</p>
            <img src="img/img-3.jpg "  className='w-[300px] h-full rounded-r-lg' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
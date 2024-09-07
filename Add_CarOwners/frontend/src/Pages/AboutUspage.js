import React from 'react'
import Member1 from '../img/ashan2.jpeg'
import Member2 from '../img/sadaru.jpeg'
import Member3 from '../img/imandi.jpg'
import Member4 from '../img/malin.jpeg'
import Member5 from '../img/sushmitha.jpeg'

const AboutUspage = () => {
  return (
    <div className='bg-gradient-to-r from-gray-200 to-blue-200 w-full h-screen overflow-auto'>
        <h1 className='text-5xl font-bold text-center mt-10'>About Us</h1>
        <div className=' mt-10'>
            <div className='w-full p-10'>
                <p className='text-2xl'>We are a car rental company that offers a wide range of vehicles for hire. We have been in business for over 20 years and have a reputation for providing top-quality service to our customers. Our fleet includes cars, trucks, and SUVs, so you can find the perfect vehicle for your needs. Whether you need a car for a day, a week, or longer, we have you covered. Our friendly staff is here to help you find the right vehicle and answer any questions you may have. We look forward to serving you!</p>
            </div>
        </div>
        <h1 className='text-5xl font-semibold text-center mt-5 mb-5 '>Meet Our Team</h1>
        <div className='flex justify-around'>
                <div>
                    <img src={Member1}  className='w-[220px] h-[220px] object-cover rounded-full'/>
                    <span className='text-2xl ml-16 '>Ashan</span>
                </div>
                <div>
                    <img src={Member2}  className='w-[220px] h-[220px] object-cover rounded-full'/>
                    <span className='text-2xl ml-16'>Sandaru</span>
                </div>
                <div>
                    <img src={Member3}  className='w-[220px] h-[220px] object-cover rounded-full'/>
                    <span className='text-2xl ml-16'>Imandi</span>
                </div>
                <div>
                    <img src={Member4}  className='w-[220px] h-[220px] object-cover rounded-full'/>
                    <span className='text-2xl ml-16'>Malin</span>
                </div>
                <div>
                    <img src={Member5}  className='w-[220px] h-[220px] object-cover rounded-full'/>
                    <span className='text-2xl ml-16'>Sushmitha</span>
                </div>
        </div>
        
        
    </div>
  )
}

export default AboutUspage
import React from 'react'
import logo from "../img/1logo.png"

const NavBar = () => {
  return (
    <div>
        <header className='h-[90px] shadow-md' >
        <div className='text-white h-full container mx-auto flex items-center pt-4 pr-9 pl-9  justify-between'>
            <div className=' mb-5 ml-9' >
                <img src={logo} className='w-[150px] h-[150px]' alt=''/>
            </div>
            <div className='ml-36'>
                <a href='#' className='mx-5 font-bold text-lg cursor-pointer px-4 py-1 rounded-full hover:text-black hover:bg-white transition-all duration-300' >Home</a>
                <a href='#' className='mx-5 font-bold text-lg cursor-pointer px-4 py-1 rounded-full hover:text-black hover:bg-white transition-all duration-300'>Service</a>       
                <a href='#' className='mx-5 font-bold text-lg cursor-pointer px-4 py-1 rounded-full hover:text-black hover:bg-white transition-all duration-300'>Rent</a>
                <a href='#' className='mx-5 font-bold text-lg cursor-pointer px-4 py-1 rounded-full hover:text-black hover:bg-white transition-all duration-300'>About</a>
            </div>
            <div>
                <button className='mx-5 py-3 px-7 font-bold rounded border border-white hover:text-black hover:bg-white hover:scale-110 transition-all duration-150'>login</button>
                <button className='mx-5 bg-white text-black font-bold py-3 px-7 rounded hover:scale-110 transition-all duration-150'>SignUp</button>
            </div>
        </div>
      </header>
    </div>
  )
}

export default NavBar
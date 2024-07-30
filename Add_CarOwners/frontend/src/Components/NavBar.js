import React, { useState } from 'react'
import logo from "../img/1logo.png"
import { Link } from 'react-router-dom'
import { GrMenu, GrClose } from 'react-icons/gr';


const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);


  return (
    <div className='relative z-10'>
      <header className='h-[90px] shadow-md'>
        <div className='text-white h-full container mx-auto flex items-center justify-between px-4 md:px-9'>
          <div className='w-24 mb-5'>
            <img src={logo} alt='Logo' />
          </div>
          <div className='hidden md:flex ml-48 space-x-6'>
            <Link to={'/'} className='font-bold text-lg cursor-pointer px-4 py-1 rounded-full hover:text-black hover:bg-white transition-all duration-300'>Home</Link>
            <Link to={'/carpage'} className='font-bold text-lg cursor-pointer px-4 py-1 rounded-full hover:text-black hover:bg-white transition-all duration-300'>Service</Link>
            <a href='#' className='font-bold text-lg cursor-pointer px-4 py-1 rounded-full hover:text-black hover:bg-white transition-all duration-300'>Rent</a>
            <a href='#' className='font-bold text-lg cursor-pointer px-4 py-1 rounded-full hover:text-black hover:bg-white transition-all duration-300'>About</a>
          </div>
          <div className='hidden md:flex space-x-5'>
            <Link to={'/Login'}><button className='mx-5 py-3 px-7 font-bold rounded border border-white hover:text-black hover:bg-white hover:scale-110 transition-all duration-150'>login</button></Link>
            <Link to={'/Signup'}><button className='mx-5 bg-white text-black font-bold py-3 px-7 rounded hover:scale-110 transition-all duration-150' >SignUp</button></Link>
          </div>
          <button className='md:hidden text-white' onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <GrClose size={24} /> : <GrMenu size={24} />}
          </button>
        </div>
        {isOpen && (
          <div className='md:hidden flex flex-col items-center space-y-4 mt-4 bg-white '>
            <Link to={'/'} className='font-bold text-lg cursor-pointer px-4 py-1 rounded-full hover:text-black hover:bg-white transition-all duration-300'>Home</Link>
            <Link to={'/carpage'} className='font-bold text-lg cursor-pointer px-4 py-1 rounded-full hover:text-black hover:bg-white transition-all duration-300'>Service</Link>
            <a href='#' className='font-bold text-lg cursor-pointer px-4 py-1 rounded-full hover:text-black hover:bg-white transition-all duration-300'>Rent</a>
            <a href='#' className='font-bold text-lg cursor-pointer px-4 py-1 rounded-full hover:text-black hover:bg-white transition-all duration-300'>About</a>
            <Link to={'/Login'}><button className='mx-5 py-3 px-7 font-bold rounded border border-white hover:text-black hover:bg-white hover:scale-110 transition-all duration-150'>login</button></Link>
            <Link to={'/Signup'}><button className='mx-5 bg-white text-black font-bold py-3 px-7 rounded hover:scale-110 transition-all duration-150' >SignUp</button></Link>
          </div>
        )}
      </header>
    </div>
  )
}

export default NavBar

            

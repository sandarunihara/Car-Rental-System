import React, { useContext, useEffect, useState } from 'react'
import logo from "../img/1logo.png"
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { GrMenu, GrClose } from 'react-icons/gr';
import { AuthContext } from '../Context/AuthContext';


const NavBar = ({scrollToBottom,scrollToabout,scrollTorent}) => {
  const navigate=useNavigate()
  const location = useLocation();
  const {authState,logout}=useContext(AuthContext)
  const [isOpen, setIsOpen] = useState(false);
  let role=""
  if(authState.user){
    role=authState.user.role
  }
  

  const [bgColor, setBgColor] = useState('bg-transparent');

  const handleScroll = () => {
    if (window.scrollY > 50) { // Adjust this value to change when the background color should change
      setBgColor('bg-black ');
    } else {
      setBgColor('bg-transparent');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handlehomeClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Smooth scrolling
    });
    // You can also navigate to a detailed view or perform other actions here
    
  };


  return (
    <div className='fixed w-full z-20'>
      <header className={`h-[90px]  ${bgColor} shadow-2xl transition-colors duration-300`}>
        <div className='text-white h-full container mx-auto flex items-center justify-between px-4 md:px-9'>
          <div className='w-24 mb-5'>
            <img src={logo} alt='Logo' />
          </div>
          {
            location.pathname==='/'?(
              <div className='hidden md:flex ml-48 space-x-6'>
            <Link to={'/'} onClick={handlehomeClick} className='font-bold text-lg cursor-pointer px-4 py-1 rounded-full hover:text-black hover:bg-white transition-all duration-300'>Home</Link>
            <Link onClick={scrollToabout} className='font-bold text-lg cursor-pointer px-4 py-1 rounded-full hover:text-black hover:bg-white transition-all duration-300'>About</Link>
            <Link onClick={scrollTorent} className='font-bold text-lg cursor-pointer px-4 py-1 rounded-full hover:text-black hover:bg-white transition-all duration-300'>Rent</Link>
            <Link onClick={scrollToBottom} className='font-bold text-lg cursor-pointer px-4 py-1 rounded-full hover:text-black hover:bg-white transition-all duration-300'>Service</Link>
            { 
              role==='Admin'?(
                <Link to={'/admin'} className='font-bold text-lg cursor-pointer px-4 py-1 rounded-full hover:text-black hover:bg-white transition-all duration-300'>Admin Panel</Link>
              ):role === 'CarOwner' ? (
                <Link to='/Addcar' className='font-bold text-lg cursor-pointer px-4 py-1 rounded-full hover:text-black hover:bg-white transition-all duration-300'>Dashboard</Link>
              ):role === 'User' ?(
                <Link to='/userdashbord/dash' className='font-bold text-lg cursor-pointer px-4 py-1 rounded-full hover:text-black hover:bg-white transition-all duration-300'>My Rents</Link>
              ):(
                <div></div>
              )
            }
          </div>
            ):(
              <div></div>
            )
          }
            {
              authState.user ?(
                <div className='hidden md:flex space-x-5'>
                <div className='rounded-full h-[50px] w-[50px] overflow-hidden cursor-pointer' onClick={()=>navigate('/userpro')}>
                  <img src='img/po.jpg' className="h-full w-full object-fill"/>
                </div>
                {
                  location.pathname === '/'?(
                    <Link onClick={logout} ><button className='ml-5 py-3 px-7 font-bold rounded border border-white hover:text-black hover:bg-white hover:scale-110 transition-all duration-150'>Logout</button></Link>
                  ):(
                    <div></div>
                  )
                }
                </div>
              ):(
                <div className='hidden md:flex space-x-5'>
                <Link to={'/Login'}><button className='mx-5 py-3 px-7 font-bold rounded border border-white hover:text-black hover:bg-white hover:scale-110 transition-all duration-150'>login</button></Link>
                <Link to={'/Signup'}><button className='mx-5 bg-white text-black font-bold py-3 px-7 rounded hover:scale-110 transition-all duration-150' >SignUp</button></Link>
                </div>
              )
            }
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

            

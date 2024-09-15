import React, { useContext, useState } from 'react'
import { toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { MdAlternateEmail } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { Button } from 'flowbite-react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../Context/AuthContext';

const ContactUs = () => {
    const navigate=useNavigate()
    const {backendDomain}=useContext(AuthContext)
    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [message, setmessage] = useState("");

    const handleonSubmit=async(e)=>{
        e.preventDefault()
        const response=await fetch(`${backendDomain}/api/contact`,{
            method:'post',
            headers:{
              "content-type": "application/json"
            },
            body:JSON.stringify({name,email,message}) 
          })
          const responsedata=await response.json()
          if(responsedata.success){
            toast.success("Your Message is Sent")
            setname('')
            setemail('')
            setmessage('')
          }else{
            
          }
    }

  return (
    <div className="w-screen h-screen flex  justify-center bg-cover bg-center"
    style={{ backgroundImage: `url('./img/contactusbg.jpeg')` }}>
        <div className='w-full'>
            <h1 className='text-5xl font-bold mt-10 mb-7 flex justify-center'>Contact Us</h1>
            <h4 className='text-xl font-semibold flex justify-center'>Need assistance? We're here to help. Drop us a message, and our support team will reach out shortly.</h4>
            <div className='flex w-full justify-around mt-10'>
                <div className='my-auto'>
                    <div className='flex items-start gap-10 mb-10'>
                        <FaLocationDot className='text-5xl bg-white p-1 rounded-full'/>
                        <p><span className='text-xl font-semibold'>Address</span><br/>4671 Maplewood Drive,<br/>Henderson, Nevada,<br/>89012,<br/>United States</p>
                    </div>
                    <div className='flex items-start gap-10 mb-10'>
                        <FaPhone className='text-5xl bg-white p-1 rounded-full'/>
                        <p><span className='text-xl font-semibold'>Phone</span><br/>011-2222223<br/>011-2265331</p>
                    </div>
                    <div className='flex items-start gap-10 mb-10'>
                        <MdAlternateEmail className='text-5xl bg-white p-1 rounded-full'/>
                        <p><span className='text-xl font-semibold'>Email</span><br/>support@simasrents.lk</p>
                    </div>
                </div>
                <div className='bg-white w-[700px] p-5 rounded-lg bg-opacity-90'>
                    <IoClose onClick={()=>{navigate("/")}} className='ml-auto text-2xl cursor-pointer hover:text-red-700 hover:scale-110 transition-all duration-300'/>
                    <form className=' text-xl text-center pt-3 w-full'  onSubmit={handleonSubmit} >
                        <h2 className='font-bold text-3xl mb-5' >Contact Us</h2>
                            <input 
                            type='text' 
                            placeholder='Enter Your Name' 
                            required 
                            className='mb-5 w-full mx-auto border-2 border-transparent border-b-black bg-transparent' 
                            id='name' 
                            value={name} 
                            onChange={(e)=>setname(e.target.value)} />
                        
                            <input 
                            type='email' 
                            id='email' 
                            placeholder='Enter Your Email' 
                            className='mb-5 w-full mx-auto border-2 border-transparent border-b-black bg-transparent'
                            value={email} 
                            onChange={(e)=>setemail(e.target.value)} />
                        
                            <textarea 
                            type='text' 
                            id='message' 
                            required  
                            placeholder='Enter Your Message' 
                            className='mb-5 w-full mx-auto resize-none border-2 border-transparent border-b-black bg-transparent' 
                            value={message} 
                            onChange={(e)=>setmessage(e.target.value)} />
                        
                        <Button gradientMonochrome="info" type='submit' className='w-full mt-7 bg-slate-300  font-bold py-3 px-9 rounded text-center justify-center'>Send</Button>
                    </form>
                </div>

            </div>
        </div>
    </div>
  )
}

export default ContactUs


{/* <form className=' text-xl text-center pt-12'  onSubmit={handleonSubmit} >
<h2 className={`cursor-pointer font-bold text-3xl mb-5`} >Contact Us</h2>
<div className='mb-5'>
<input type='text' placeholder='Enter Your Name' required className=' w-[800px] h-[50px] mx-auto rounded ' id='name' value={name} onChange={(e)=>setname(e.target.value)} />
</div>
<div className='mb-5'>
<input type='email' id='email' placeholder='Enter Your Email' className='w-[800px] h-[50px] mx-auto rounded' value={email} onChange={(e)=>setemail(e.target.value)} />
</div>
<div>
<textarea type='text' id='message' required  placeholder='Enter Your Message' className='w-[800px] h-[200px] mx-auto resize-none rounded' value={message} onChange={(e)=>setmessage(e.target.value)} />
</div>
<button type='submit' className=' mt-7 bg-slate-300 text-black hover:bg-black hover:text-slate-300 font-bold py-3 px-9 rounded text-center justify-center'>Submit</button>
</form> */}
import React, { useState } from 'react'
import { MdModeEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { Button, Label, Modal, TextInput } from "flowbite-react";
import { HiOutlineExclamationCircle } from 'react-icons/hi';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Bookingmsg = (data) => {
  const navigate=useNavigate()
    const rentdata=data.data
    const _id=rentdata._id
    
    const [showModal, setShowModal] = useState(false);
    const [editrent,seteditrent]=useState(false)

    const deletedata=async()=>{
        const response=await fetch('http://localhost:8050/api/deleterent',{
            method:'post',
            headers:{
            "content-type": "application/json"
            },
            body:JSON.stringify({_id})
        })

        const responsedata=await response.json()

        if (responsedata.success) {
          setShowModal(false)
          toast.success(responsedata.message)
          navigate('/userdashbord/dash')
        }
    }


    // edit rent
    const [rento,setrento]=useState({
      _id:rentdata._id,
      Carnumber: rentdata.Carnumber,
      email: rentdata.email,
      mobile:rentdata.mobile,
      name:rentdata.name,
      nic:rentdata.nic,
      price:rentdata.price,
      rent_date:rentdata.rent_date,
      Carname:rentdata.Carname
    })
    

    const handleChange=(e)=>{
      e.preventDefault()
      const {name,value}=e.target
      setrento(pre=>{
        return{
          ...pre,
          [name]:value
        }
      })
    }
    

    // update database
    const updatedata=async()=>{
      const response=await fetch('http://localhost:8050/api/updaterent',{
        method:'post',
        headers:{
            "content-type": "application/json"
        },
        body:JSON.stringify(rento)
      })
      const responsedata=await response.json()
      if(responsedata.success){
        toast.success(responsedata.message)
        navigate('/userdashbord/dash')
      }
    }

    const handlesubmit=(e)=>{
      e.preventDefault()
      seteditrent(false)
      updatedata()
      
    }

    
  return (
    <div className='bg-white w-[900px]  p-4 rounded-lg shadow-2xl transition-all duration-700 hover:scale-105 mb-5'>
        <div className='flex justify-between'>
            <p className='text-3xl font-semibold'>{rentdata.Carname}<span className='text-sm'>({rentdata.Carnumber})</span></p>
            <div className='flex text-2xl gap-4 items-center'>
                <div className='hover:bg-gradient-to-r from-green-300 to-green-800 rounded-full p-2 cursor-pointer' onClick={()=>{seteditrent(true)}}>
                <MdModeEdit />
                </div>
                <div className='hover:bg-gradient-to-r from-red-300 to-red-800 rounded-full p-2 cursor-pointer' onClick={()=>{setShowModal(true)}}>
                <MdDelete/>
                </div>
            </div>
        </div>
        <div className='mt-6'>
        <p className='text-xl mb-3 border-b-4 border-green-600 w-fit py-1 px-3'>Rent Details</p>
        <p className='text-lg mb-3'><span className='font-semibold'>Name :</span> {rentdata.name} <span className='ml-28'><span className='font-semibold'>NIC :</span> {rentdata.nic}</span></p>
        <p className='text-lg mb-3'><span className='font-semibold'>Mobile Number :</span> {rentdata.mobile} <span className='ml-[60px]'><span className='font-semibold'>Email :</span> {rentdata.email}</span></p>
        <div className='flex justify-between'>
            <p className='text-lg mb-3'><span className='font-semibold'>Rent Date :</span> {rentdata.rent_date} </p>
            <p className='text-2xl bg-black text-white py-1 px-3 rounded-lg'>RS.{rentdata.price}.00</p>
        </div>
        </div>

        <Modal
        show={showModal}
        onClose={() => setShowModal(false)}
        popup
        size='lg'
        >
        <Modal.Header/>
        <Modal.Body>
          <div className='text-center'>
            <HiOutlineExclamationCircle className='h-14 w-14 text-gray-400 dark:text-gray-200 mb-4 mx-auto' />
            <h3 className='mb-5 text-lg text-gray-500 dark:text-gray-400'>
              Are you sure you want to delete this Booking?
            </h3>
            <div className='flex justify-center gap-4'>
              <Button  color='failure' onClick={deletedata}>
                Yes, I'm sure
              </Button>
              <Button color='gray' onClick={() => setShowModal(false)}>
                No, cancel
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>

      {/* **********EDIT RENT FORM************** */}

      <Modal show={editrent} size="md" onClose={()=>seteditrent(false)} popup>
        <Modal.Header />
        <Modal.Body>
          <div className="space-y-3">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">Edit Booking</h3>
            <form className="space-y-3">
            <div>
              <Label htmlFor="name" value="Your Name" className='mb-2 block'/>
              <TextInput
                name='name'
                id="name"
                value={rento.name}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <Label htmlFor="nic" value="Your NIC" className='mb-2 block'/>
              <TextInput
                name='nic'
                id="nic"
                value={rento.nic}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <Label htmlFor="mobile" value="Your Mobile Number" className='mb-2 block'/>
              <TextInput
                name='mobile'
                id="mobile"
                value={rento.mobile}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <Label htmlFor="email" value="Your Email" className='mb-2 block'/>
              <TextInput
                name='email'
                id="email"
                value={rento.email}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="w-full flex justify-center ">
              <button className='bg-slate-500 py-2 px-4 rounded-lg bg-gradient-to-r from-green-400 to-green-800 hover:text-white' onClick={handlesubmit}>Confirm Edit</button>
            </div>
            </form>
          </div>
        </Modal.Body>
      </Modal>

    </div>
  )
}

export default Bookingmsg
import React, { useContext, useState } from 'react';
import { MdModeEdit, MdDelete } from 'react-icons/md';
import { Button, Label, Modal, TextInput } from 'flowbite-react';
import { HiOutlineExclamationCircle } from 'react-icons/hi';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../Context/AuthContext';

const Bookingmsg = (data) => {
  const {backendDomain}=useContext(AuthContext);
  const navigate = useNavigate();
  const rentdata = data.data;
  const _id = rentdata._id;

  const [showModal, setShowModal] = useState(false);
  const [editrent, setEditRent] = useState(false);

  const deletedata = async () => {
    const response = await fetch(`${backendDomain}/api/deleterent`, {
      method: 'post',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({ _id }),
    });

    const responsedata = await response.json();

    if (responsedata.success) {
      setShowModal(false);
      toast.success(responsedata.message);
      navigate('/userdashbord/dash');
    }
  };

  // Edit rent
  const [rento, setRento] = useState({
    _id: rentdata._id,
    Carnumber: rentdata.Carnumber,
    email: rentdata.email,
    mobile: rentdata.mobile,
    name: rentdata.name,
    nic: rentdata.nic,
    price: rentdata.price,
    rent_date: rentdata.rent_date,
    Carname: rentdata.Carname,
  });

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setRento((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Update database
  const updatedata = async () => {
    const response = await fetch(`${backendDomain}/api/updaterent`, {
      method: 'post',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(rento),
    });
    const responsedata = await response.json();
    if (responsedata.success) {
      toast.success(responsedata.message);
      navigate('/userdashbord/dash');
    }
  };

  const handlesubmit = (e) => {
    e.preventDefault();
    setEditRent(false);
    updatedata();
  };

  return (
    <div className='bg-white p-4 rounded-lg shadow-2xl transition-all duration-700 hover:scale-105 mb-5 w-full sm:w-[600px] lg:w-[900px]'>
      <div className='flex flex-col sm:flex-row justify-between'>
        <p className='text-2xl sm:text-3xl font-semibold'>
          {rentdata.Carname}
          <span className='text-sm'>({rentdata.Carnumber})</span>
        </p>
        <div className='flex gap-2 sm:gap-4 items-center mt-2 sm:mt-0'>
          <div
            className='hover:bg-gradient-to-r from-green-300 to-green-800 rounded-full p-2 cursor-pointer'
            onClick={() => setEditRent(true)}
          >
            <MdModeEdit />
          </div>
          <div
            className='hover:bg-gradient-to-r from-red-300 to-red-800 rounded-full p-2 cursor-pointer'
            onClick={() => setShowModal(true)}
          >
            <MdDelete />
          </div>
        </div>
      </div>
      <div className='mt-4'>
        <p className='text-lg sm:text-xl mb-3 border-b-4 border-green-600 w-fit py-1 px-3'>Rent Details</p>
        <p className='text-base sm:text-lg mb-3'>
          <span className='font-semibold'>Name :</span> {rentdata.name}{' '}
          <span className='ml-0 sm:ml-28'>
            <span className='font-semibold'>NIC :</span> {rentdata.nic}
          </span>
        </p>
        <p className='text-base sm:text-lg mb-3'>
          <span className='font-semibold'>Mobile Number :</span> {rentdata.mobile}{' '}
          <span className='ml-0 sm:ml-[60px]'>
            <span className='font-semibold'>Email :</span> {rentdata.email}
          </span>
        </p>
        <div className='flex flex-col sm:flex-row justify-between'>
          <p className='text-base sm:text-lg mb-3'>
            <span className='font-semibold'>Rent Date :</span> {rentdata.rent_date}
          </p>
          <p className='text-lg sm:text-2xl bg-black text-white py-1 px-3 rounded-lg'>
            RS.{rentdata.price}.00
          </p>
        </div>
      </div>

      {/* Delete Modal */}
      <Modal show={showModal} onClose={() => setShowModal(false)} popup size='md'>
        <Modal.Header />
        <Modal.Body>
          <div className='text-center'>
            <HiOutlineExclamationCircle className='h-14 w-14 text-gray-400 mb-4 mx-auto' />
            <h3 className='mb-5 text-lg text-gray-500'>Are you sure you want to delete this Booking?</h3>
            <div className='flex justify-center gap-4'>
              <Button color='failure' onClick={deletedata}>
                Yes, I'm sure
              </Button>
              <Button color='gray' onClick={() => setShowModal(false)}>
                No, cancel
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>

      {/* Edit Rent Form */}
      <Modal show={editrent} size='md' onClose={() => setEditRent(false)} popup>
        <Modal.Header />
        <Modal.Body>
          <div className='space-y-3'>
            <h3 className='text-xl font-medium text-gray-900'>Edit Booking</h3>
            <form className='space-y-3'>
              <div>
                <Label htmlFor='name' value='Your Name' className='mb-2 block' />
                <TextInput
                  name='name'
                  id='name'
                  value={rento.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <Label htmlFor='nic' value='Your NIC' className='mb-2 block' />
                <TextInput
                  name='nic'
                  id='nic'
                  value={rento.nic}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <Label htmlFor='mobile' value='Your Mobile Number' className='mb-2 block' />
                <TextInput
                  name='mobile'
                  id='mobile'
                  value={rento.mobile}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <Label htmlFor='email' value='Your Email' className='mb-2 block' />
                <TextInput
                  name='email'
                  id='email'
                  value={rento.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className='w-full flex justify-center'>
                <button
                  className='bg-slate-500 py-2 px-4 rounded-lg bg-gradient-to-r from-green-400 to-green-800 hover:text-white'
                  onClick={handlesubmit}
                >
                  Confirm Edit
                </button>
              </div>
            </form>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Bookingmsg;

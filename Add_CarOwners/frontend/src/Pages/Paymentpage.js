import { Button, Label, TextInput } from 'flowbite-react'
import React, { useState } from 'react'
import { FcSimCardChip } from "react-icons/fc";
import { SiCardano } from "react-icons/si";
import { SiVisa } from "react-icons/si";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Paymentpage = () => {
    const navigate=useNavigate()
    const [paydetails,setpaydetails]=useState({
        name:"",
        email:"",
        address:"",
        city:"",
        province:"",
        postalcode:"",
        nameoncard:"",
        cardnumber:"",
        expmonth:"",
        expyear:"",
        cvv:""
    })
    console.log(paydetails.cardnumber);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setpaydetails({
            ...paydetails,
            [name]: value
        });
    }
    const handlesubmit=()=>{
        setpaydetails({
            name:"",email:"",address:"",city:"",province:"",postalcode:"",nameoncard:"",cardnumber:"",expmonth:"", expyear:"",cvv:""
        })
        toast.success("Payment Succesfull")
        toast.success("Car Rent is Succesfull")
        navigate('/userdashbord')

    }

    


  return (
    <div className='h-screen bg-gradient-to-r from-gray-200 to-blue-200'>
        <div className='flex justify-around '>
        <form className='w-fit h-fit bg-slate-300 p-5' onSubmit={handlesubmit}>
            <div className='flex justify-between  space-x-5 '>
            <div className='space-y-4'>
                <h1 className='text-xl font-bold '>BILLING ADDRESS</h1>
            <div>
                <Label htmlFor="name" value="Name" className="mb-2 block" />
                <TextInput
                  type="text"
                  id="name"
                  name="name"
                  value={paydetails.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <Label htmlFor="email" value="Email" className="mb-2 block" />
                <TextInput
                  type="text"
                  id="email"
                  name="email"
                  value={paydetails.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <Label htmlFor="address" value="Address" className="mb-2 block" />
                <TextInput
                  type="text"
                  id="address"
                  name="address"
                  value={paydetails.address}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <Label htmlFor="city" value="City" className="mb-2 block" />
                <TextInput
                  type="text"
                  id="city"
                  name="city"
                  value={paydetails.city}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className='flex justify-between space-x-3'>
              <div>
                <Label htmlFor="province" value="Province" className="mb-2 block" />
                <TextInput
                  type="text"
                  id="province"
                  name="province"
                  value={paydetails.province}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <Label htmlFor="postalcode" value="Postal Code" className="mb-2 block" />
                <TextInput
                  type="text"
                  id="postalcode"
                  name="postalcode"
                  value={paydetails.postalcode}
                  onChange={handleInputChange}
                  required
                />
              </div>
              </div>
            </div>
            <div className='space-y-4'>
            <h1 className='text-xl font-bold '>PAYMENT</h1>
            <div className='mt-10'>
                <Label htmlFor="cardaccepted" value="Card Accepted" className="mb-2 block" />
                <div className='flex justify-around'>
                <img src='https://static.vecteezy.com/system/resources/previews/020/975/570/non_2x/visa-logo-visa-icon-transparent-free-png.png' className='w-[75px]'/>
                <img src='https://zeevector.com/wp-content/uploads/Mastercard-Emblem-PNG-VECTOR.png' className='w-[68px]'/>
                <img src='https://1000logos.net/wp-content/uploads/2016/10/American-Express-Color.png' className='w-[75px]'/>
                </div>
              </div>
              <div>
                <Label htmlFor="nameoncard" value="Name on Card" className="mb-2 block" />
                <TextInput
                  type="text"
                  id="nameoncard"
                  name="nameoncard"
                  value={paydetails.nameoncard}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <Label htmlFor="cardnumber" value="Card Number" className="mb-2 block" />
                <TextInput
                  type="text"
                  id="cardnumber"
                  name="cardnumber"
                  value={paydetails.cardnumber}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <Label htmlFor="expmonth" value="Exp Month" className="mb-2 block" />
                <TextInput
                  type="text"
                  id="expmonth"
                  name="expmonth"
                  value={paydetails.expmonth}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className='flex justify-between space-x-3'>
              <div>
                <Label htmlFor="expyear" value="Exp Year" className="mb-2 block" />
                <TextInput
                  type="text"
                  id="expyear"
                  name="expyear"
                  value={paydetails.expyear}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <Label htmlFor="cvv" value="CVV" className="mb-2 block" />
                <TextInput
                  type="text"
                  id="cvv"
                  name="cvv"
                  value={paydetails.cvv}
                  onChange={handleInputChange}
                  required
                />
              </div>
              </div>
            </div>
            </div>
            <Button type='submit' gradientMonochrome="success" className='w-full mt-6'>Procced to Checkout</Button>
        </form>
        <div className='w-[750px] relative flex items-center ml-10'>
            <div className='justify-around flex flex-col bg-gradient-to-r from-[#010101] via-[#3b1810] to-[#e95d3c] w-[470px] h-[270px] rounded-lg absolute z-20 top-20 shadow-2xl'>
                <div className='flex justify-between px-7'>
                <SiCardano className='text-white text-4xl mt-4'/>
                <SiVisa className='text-white text-7xl'/>
                </div>
                <p className='text-white pl-7 text-2xl'>{paydetails.cardnumber}</p>
                <div className='flex text-white justify-between'>
                    <div className='space-y-1'>
                        <p className='pl-7 text-sm'>Card Holder Name</p>
                        <p className='pl-7 text-lg font-semibold'>{paydetails.name}</p>
                    </div>
                    <div className='space-y-1'>
                        <p className='pl-7 text-sm'>Expiry Date</p>
                        <p className='pl-7 text-lg font-semibold'>{paydetails.expmonth}/{paydetails.expyear}</p>
                    </div>
                    <FcSimCardChip className='text-6xl mr-5'/>
                </div>
            </div>
            <div className='bg-gradient-to-t from-[#010101] via-[#3b1810] to-[#e95d3c] text-white w-[470px] h-[270px] rounded-lg absolute z-10 left-40 shadow-2xl'>
                <div className='bg-black w-full h-[60px] mt-8'></div>
                <div className='space-y-1 flex flex-col items-end mt-12 mr-16'>
                    <p className='text-sm px-5'>CVV</p>
                    <p className='text-lg font-semibold px-2 bg-white text-black rounded-lg'>{paydetails.cvv}</p>
                </div>
            </div>

        </div>
        </div>
        
    </div>
  )
}

export default Paymentpage
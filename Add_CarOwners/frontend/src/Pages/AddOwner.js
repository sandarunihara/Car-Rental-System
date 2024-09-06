import { Button } from 'flowbite-react';
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';

function AddOwner() {

  const [formData,setformData] = useState();
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();

  const handlechange = (e) => {
    
    setformData({ ...formData, [e.target.id]: e.target.value.trim() });
    
  };
  

  const handlesubmit = async (e)=>{
    e.preventDefault();
    
    if (
      !formData.name ||
      !formData.nic ||
      !formData.mobile ||
      !formData.gender ||
      !formData.address ||
      !formData.email 
      
    ) {
      setErrorMessage("All fields required");
      return;
    }
    try {
      setErrorMessage(null);
      
      const res = await fetch("http://localhost:8050/api/addowner",{
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })
      const data = await res.json();
      
      if (data.success === false) {
        toast.error(data.message)
      }
      if (res.ok) {
        navigate("/admin/owner-details");
        toast.success("Add Car Owner Succesfully")
      }
    } catch (error) {
      setErrorMessage("An error Occured.please try again");
    }
  }

  return (
    <div className="flex-grow h-screen w-full overflow-auto bg-gradient-to-r from-gray-200 to-blue-200 p-6 sm:p-8 md:p-12 text-white  flex justify-center items-center">
      <div className=" p-10 mt-12 ml-72   bg-black rounded-lg absolute bg-opacity-95">
      <form className="flex flex-col w-[500px] ">
          <div className="flex justify-between gap-10 mb-8">
            <label className="font-semibold">Owner Name</label>
            <input
              type="text"
              placeholder="Enter Car Owner Name"
              className="p-2 w-[350px] rounded-lg text-black"
              id="name"
              onChange={handlechange}
              required
            />
          </div>
          <div className="flex justify-between gap-10 mb-8">
            <label className="font-semibold">NIC</label>
            <input
              type="text"
              placeholder="Enter Car Owner NIC"
              className="p-2 w-[350px] rounded-lg text-black"
              id="nic"
              onChange={handlechange}
              required
            />
          </div>
          <div className="flex justify-between gap-10 mb-8">
            <label className="font-semibold">Mobile</label>
            <input
              type="text"
              placeholder="Enter Car Owner mobile"
              className="p-2 w-[350px] rounded-lg text-black"
              id="mobile"
              onChange={handlechange}
              required
            />
          </div>
          <div className="flex justify-between gap-10 mb-8">
            <label className="font-semibold">Gender</label>
            <input
              type="text"
              placeholder="Enter Car Owner Gender"
              className="p-2 w-[350px] rounded-lg text-black"
              id="gender"
              onChange={handlechange}
              required
            />
          </div>
          <div className="flex justify-between gap-10 mb-8">
            <label className="font-semibold">Address</label>
            <input
              type="text"
              placeholder="Enter Car Owner Address"
              className="p-2 w-[350px] rounded-lg text-black"
              id="address"
              onChange={handlechange}
              required
            />
          </div>
          <div className="flex justify-between gap-10 mb-8">
            <label className="font-semibold">Email</label>
            <input
              type="email"
              placeholder="Enter Car Owner Email"
              className="p-2 w-[350px] rounded-lg text-black"
              id="email"
              onChange={handlechange}
              required
            />
          </div>
        
        <Button
          type="submit" 
          onClick={handlesubmit}
          gradientMonochrome="success"
          className="p-2.5 bg-white text-black text-lg border-none rounded-md cursor-pointer hover:bg-gray-300"
        >
          Add Owner
        </Button>
      </form>
      </div>
    </div>
  );
}

export default AddOwner;

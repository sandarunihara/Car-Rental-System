import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

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
      !formData.age ||
      !formData.gender ||
      !formData.address ||
      !formData.email ||
      !formData.password 
      
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
      console.log({data});
      
      if (data.success === false) {
        return setErrorMessage(data.message);
      }
      if (res.ok) {
        console.log(formData);

        navigate("/admin/owner-details");
      }
    } catch (error) {
      setErrorMessage("An error Occured.please try again");
    }
  }

  return (
    <div className="flex-grow bg-black p-6 sm:p-8 md:p-12 text-white h-screen flex justify-center items-center overflow-auto">
      <form className="flex flex-col w-full max-w-md mt-10 ml-72" onSubmit={handlesubmit}>
        <label className="mb-1.5 text-lg">Name</label>
        <input 
          type="text" 
          id='name'
          placeholder="Enter your Name" 
          className="p-2.5 mb-5 text-base border border-gray-300 rounded-md text-black"
          onChange={handlechange}
        />

        <label className="mb-1.5 text-lg">NIC</label>
        <input 
          type="text" 
          id='nic'
          placeholder="Enter Your NIC" 
          className="p-2.5 mb-5 text-base border border-gray-300 rounded-md text-black"
          onChange={handlechange}
        />

        <label className="mb-1.5 text-lg">Age</label>
        <input 
          type="text" 
          id='age'
          placeholder="Enter your Age" 
          className="p-2.5 mb-5 text-base border border-gray-300 rounded-md text-black"
          onChange={handlechange}
        />

        <label className="mb-1.5 text-lg">Gender</label>
        <input 
          type="text" 
          id='gender'
          placeholder="Enter your Gender" 
          className="p-2.5 mb-5 text-base border border-gray-300 rounded-md text-black"
          onChange={handlechange}
        />

        <label className="mb-1.5 text-lg">Address</label>
        <input 
          type="text" 
          id='address'
          placeholder="Enter your Address" 
          className="p-2.5 mb-5 text-base border border-gray-300 rounded-md text-black"
          onChange={handlechange}
        />

          <label className="mb-1.5 text-lg">Email</label>
                    <input 
                      type="email" 
                      id='email'
                      placeholder="Enter your Email" 
                      className="p-2.5 mb-5 text-base border border-gray-300 rounded-md text-black"
                      onChange={handlechange}
                    />

              <label className="mb-1.5 text-lg">Password</label>
                      <input 
                        type="password" 
                        id='password'
                        placeholder="Enter your Password" 
                        className="p-2.5 mb-5 text-base border border-gray-300 rounded-md text-black"
                        onChange={handlechange}
                      />       

        <button 
          type="submit" 
          className="p-2.5 bg-white text-black text-lg border-none rounded-md cursor-pointer hover:bg-gray-300"
        >
          Add Owner
        </button>
      </form>
    </div>
  );
}

export default AddOwner;

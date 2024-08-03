import React from 'react';

function AddOwner() {
  return (
    <div className="flex-grow bg-black p-6 sm:p-8 md:p-12 text-white h-screen flex justify-center items-center">
      <form className="flex flex-col w-full max-w-md">
        <label className="mb-1.5 text-lg">Name</label>
        <input 
          type="text" 
          placeholder="Enter your Name" 
          className="p-2.5 mb-5 text-base border border-gray-300 rounded-md text-black"
        />

        <label className="mb-1.5 text-lg">NIC</label>
        <input 
          type="text" 
          placeholder="Enter Your NIC" 
          className="p-2.5 mb-5 text-base border border-gray-300 rounded-md text-black"
        />

        <label className="mb-1.5 text-lg">Age</label>
        <input 
          type="text" 
          placeholder="Enter your Age" 
          className="p-2.5 mb-5 text-base border border-gray-300 rounded-md text-black"
        />

        <label className="mb-1.5 text-lg">Gender</label>
        <input 
          type="text" 
          placeholder="Enter your Gender" 
          className="p-2.5 mb-5 text-base border border-gray-300 rounded-md text-black"
        />

        <label className="mb-1.5 text-lg">Address</label>
        <input 
          type="text" 
          placeholder="Enter your Address" 
          className="p-2.5 mb-5 text-base border border-gray-300 rounded-md text-black"
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

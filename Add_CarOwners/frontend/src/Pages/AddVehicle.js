import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddVehicle = () => {
  const [formData, setformData] = useState({});
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();

  const handlechange = (e) => {
    setformData({ ...formData, [e.target.id]: e.target.value.trim() });
  };
  const handlesubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.Carname ||
      !formData.Fueltype ||
      !formData.Carnumber ||
      !formData.Price ||
      !formData.Seat ||
      !formData.Location ||
      !formData.Car_type
    ) {
      setErrorMessage("All fields required");
      console.log(formData);
    }
    try {
      setErrorMessage(null);
      const res = await fetch("http://localhost:8050/api/createcar", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        return setErrorMessage(data.message);
      }
      if (res.ok) {
        navigate("/Addcar/vehicle-details");
      }
    } catch (error) {
      setErrorMessage("An error Occured.please try again");
    }
  };
  return (
    <div className=" w-full flex  justify-center h-screen bg-gradient-to-r from-gray-300 to-blue-200 ">
      <div className="w-[600px] p-6 mt-12  bg-black rounded-lg absolute bg-opacity-95">
        <form className="mt-20 text-white" onSubmit={handlesubmit}>
          <div className="flex justify-between gap-10 mb-8">
            <label className="font-semibold">Car Name</label>
            <input
              type="text"
              placeholder="Enter Car Name"
              className="p-2 w-[350px] rounded-lg text-black"
              id="Carname"
              onChange={handlechange}
              required
              
            />
          </div>
          <div className="flex justify-between gap-10 mb-8">
            <label className="font-semibold">Fuel Type</label>
            <input
              type="text"
              placeholder="Enter Fuel Type"
              className="p-2 w-[350px] rounded-lg text-black"
              id="Fueltype"
              onChange={handlechange}
              required
            />
          </div>
          <div className="flex justify-between gap-10 mb-8">
            <label className="font-semibold">Car Number</label>
            <input
              type="text"
              placeholder="Enter Car number"
              className="p-2 w-[350px] rounded-lg text-black"
              id="Carnumber"
              onChange={handlechange}
              required
            />
          </div>
          <div className="flex justify-between gap-10 mb-8">
            <label className="font-semibold">Price</label>
            <input
              type="text"
              placeholder="Enter Price "
              className="p-2 w-[350px] rounded-lg text-black"
              id="Price"
              onChange={handlechange}
              required
            />
          </div>
          <div className="flex justify-between gap-10 mb-8">
            <label className="font-semibold">Seat</label>
            <input
              type="text"
              placeholder="Enter Seat "
              className="p-2 w-[350px] rounded-lg text-black"
              id="Seat"
              onChange={handlechange}
              required
            />
          </div>
          <div className="flex justify-between gap-10 mb-8">
            <label className="font-semibold">Location</label>
            <input
              type="text"
              placeholder="Enter Location "
              className="p-2 w-[350px] rounded-lg text-black"
              id="Location"
              onChange={handlechange}
              required
            />
          </div>
          <div className="flex justify-between gap-10 mb-8">
            <label className="font-semibold">Car Type</label>
            <input
              type="text"
              placeholder="Enter Car Type "
              className="p-2 w-[350px] rounded-lg text-black"
              id="Car_type"
              onChange={handlechange}
              required
            />
          </div>
          <div className="mt-16">
            <button
              className="bg-white text-xl ml-64 rounded-2xl border-r-[25px] border-l-[25px] text-black border-white"
              type="submit"
            >
              Add Vehicle
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddVehicle;

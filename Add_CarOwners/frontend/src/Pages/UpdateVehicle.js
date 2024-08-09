import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useFetchData } from "../hooks/useFetchData";

export const UpdateVehicle = () => {
  const [formData, setformData] = useState({});
  const [errorMessage, setErrorMessage] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();

  const { data: carData, loading } = useFetchData("/fetchcar/" + id);

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
    }
    try {
      setErrorMessage(null);
      const res = await fetch("http://localhost:8050/api/updatecar/" + id, {
        method: "PUT",
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

  useEffect(() => {
    if (carData) {
      setformData(carData);
    }
  }, [carData]);

  if (loading || !carData) {
    return <p>Loading...</p>;
  }
  return (
    <div className=" w-full flex  justify-center ">
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
              value={formData.Carname}
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
              value={formData.Fueltype}
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
              value={formData.Carnumber}
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
              value={formData.Price}
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
              value={formData.Seat}
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
              value={formData.Location}
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
              value={formData.Car_type}
              required
            />
          </div>
          <div className="mt-16">
            <button
              className="bg-white text-xl ml-64 rounded-2xl border-r-[25px] border-l-[25px] text-black border-white"
              type="submit"
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

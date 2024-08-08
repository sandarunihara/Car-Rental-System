import React, { useState } from "react";
import { useFetchData } from "../hooks/useFetchData";
import { Link, useNavigate } from "react-router-dom";

const VehicleDetails = () => {
  const navigate = useNavigate();
  const { data: carsData, loading } = useFetchData("/getcars");
  const [showAll, setShowAll] = useState(false);

  if (loading || !carsData) {
    return <p>Loading...</p>;
  }

  
  const handleTodelete = async (id) => {
    try {
      const res = await fetch('http://localhost:8050/api/deletecar/' + id, {
        method: 'DELETE'
      })
      const data = await res.json();
      if (!res.ok) {
        console.log(data.message);
      } else {
        navigate('/Addcar/vehicle-details')
      }
    } catch (error) {
      console.log(error);
    }
  }

  const toggleShowAll = () => {
    setShowAll(prevState => !prevState);
  }

  const rowsToShow = showAll ? carsData : carsData.slice(0, 6);

  return (
    <div className="h-3/4 bg-slate-300 ml-3 mr-3 mb-10 overflow-auto">
      <div className="content ml-5 mr-5 mt-10 p-5">
        <table className="w-full">
          <thead className="bg-gray-50 border-b-2 border-gray-200">
            <tr>
              <th className="p-3 text-sm font-semibold tracking-wide text-left">Car Name</th>
              <th className="p-3 text-sm font-semibold tracking-wide text-left">Fuel Type</th>
              <th className="p-3 text-sm font-semibold tracking-wide text-left">Car Number</th>
              <th className="p-3 text-sm font-semibold tracking-wide text-left">Price</th>
              <th className="p-3 text-sm font-semibold tracking-wide text-left">Seat</th>
              <th className="p-3 text-sm font-semibold tracking-wide text-left">Location</th>
              <th className="p-3 text-sm font-semibold tracking-wide text-left">Car Type</th>
              <th className="p-3 text-sm font-semibold tracking-wide text-left">Update</th>
              <th className="p-3 text-sm font-semibold tracking-wide text-left">Delete</th>
            </tr>
          </thead>
          <tbody>
            {rowsToShow.map((carData, i) => (
              <tr key={i}>
                <td className="p-3 text-sm font-semibold tracking-wide text-left">{carData.Carname}</td>
                <td className="p-3 text-sm font-semibold tracking-wide text-left">{carData.Fueltype}</td>
                <td className="p-3 text-sm font-semibold tracking-wide text-left">{carData.Carnumber}</td>
                <td className="p-3 text-sm font-semibold tracking-wide text-left">{carData.Price}</td>
                <td className="p-3 text-sm font-semibold tracking-wide text-left">{carData.Seat}</td>
                <td className="p-3 text-sm font-semibold tracking-wide text-left">{carData.Location}</td>
                <td className="p-3 text-sm font-semibold tracking-wide text-left">{carData.Car_type}</td>
                <td className="p-3 text-sm font-semibold tracking-wide text-left">
                  <Link to={`/Addcar/update-vehicle/${carData._id}`}>
                    <button className='bg-green-700 text-white font-semibold border-8 border-r-[25px] border-l-[25px] border-green-700 rounded-xl'>Update</button>
                  </Link>
                </td>
                <td className="p-3 text-sm font-semibold tracking-wide text-left">
                  <button className='bg-red-700 text-white font-semibold border-8 border-r-[25px] border-l-[25px] border-red-700 rounded-xl' onClick={() => handleTodelete(carData._id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {carsData.length > 6 && (
          <div className="text-center mt-4">
            <button className='bg-blue-700 text-white font-semibold border-8 border-r-[25px] border-l-[25px] border-blue-700 rounded-xl' onClick={toggleShowAll}>
              {showAll ? 'Show Less' : 'Show More'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default VehicleDetails;

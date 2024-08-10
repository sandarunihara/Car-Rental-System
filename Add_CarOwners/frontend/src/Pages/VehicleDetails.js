import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Modal } from "flowbite-react";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import { useFetchData } from "../hooks/useFetchData";

const VehicleDetails = () => {
  const { data: carsData, loading } = useFetchData("/getcars");
  const [showAll, setShowAll] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [deletecarId, setDeletecarId] = useState("");
  const [currentData, setCurrentData] = useState([]);
  const [showingData, setShowingData] = useState([]);
  useEffect(() => {
    if (carsData) setCurrentData(carsData.addcars);
  }, [carsData]);

  useEffect(() => {
    if (!currentData) return;
    if (showAll) {
      setShowingData(currentData);
    } else {
      setShowingData(currentData.slice(0, 6));
    }
  }, [showAll, currentData]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!currentData.length) {
    return <p>No data available.</p>;
  }

  const handleToDelete = async (id) => {
    try {
      const res = await fetch("http://localhost:8050/api/deletecar/" + id, {
        method: "DELETE",
      });
      const data = await res.json();
      if (!res.ok) {
        console.log(data.message);
      } else {
        setCurrentData((prev) => prev.filter((cd) => cd._id !== deletecarId));
        setShowModal(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const toggleShowAll = () => {
    setShowAll((prevState) => !prevState);
  };

  return (
    <div className=" bg-slate-300 ml-3 mr-3 mb-10 h-screen bg-gradient-to-r from-gray-300 to-blue-200 overflow-auto">
      <div className="content ml-5 mr-5 mt-10 p-5">
        <table className="w-full">
          <thead className="bg-gray-50 border-b-2 border-gray-200">
            <tr>
              <th className="p-3 text-sm font-semibold tracking-wide text-left">
                Car Name
              </th>
              <th className="p-3 text-sm font-semibold tracking-wide text-left">
                Fuel Type
              </th>
              <th className="p-3 text-sm font-semibold tracking-wide text-left">
                Car Number
              </th>
              <th className="p-3 text-sm font-semibold tracking-wide text-left">
                Price
              </th>
              <th className="p-3 text-sm font-semibold tracking-wide text-left">
                Seat
              </th>
              <th className="p-3 text-sm font-semibold tracking-wide text-left">
                Location
              </th>
              <th className="p-3 text-sm font-semibold tracking-wide text-left">
                Car Type
              </th>
              <th className="p-3 text-sm font-semibold tracking-wide text-left">
                Update
              </th>
              <th className="p-3 text-sm font-semibold tracking-wide text-left">
                Delete
              </th>
            </tr>
          </thead>
          <tbody>
            {showingData.map((carData, i) => (
              <tr key={i}>
                <td className="p-3 text-sm font-semibold tracking-wide text-left">
                  {carData.Carname}
                </td>
                <td className="p-3 text-sm font-semibold tracking-wide text-left">
                  {carData.Fueltype}
                </td>
                <td className="p-3 text-sm font-semibold tracking-wide text-left">
                  {carData.Carnumber}
                </td>
                <td className="p-3 text-sm font-semibold tracking-wide text-left">
                  {carData.Price}
                </td>
                <td className="p-3 text-sm font-semibold tracking-wide text-left">
                  {carData.Seat}
                </td>
                <td className="p-3 text-sm font-semibold tracking-wide text-left">
                  {carData.Location}
                </td>
                <td className="p-3 text-sm font-semibold tracking-wide text-left">
                  {carData.Car_type}
                </td>
                <td className="p-3 text-sm font-semibold tracking-wide text-left">
                  <Link to={`/Addcar/update-vehicle/${carData._id}`}>
                    <button className="bg-green-700 text-white font-semibold border-8 border-r-[25px] border-l-[25px] border-green-700 rounded-xl">
                      Update
                    </button>
                  </Link>
                </td>
                <td className="p-3 text-sm font-semibold tracking-wide text-left">
                  <button
                    className="bg-red-700 text-white font-semibold border-8 border-r-[25px] border-l-[25px] border-red-700 rounded-xl"
                    onClick={() => {
                      setShowModal(true);
                      setDeletecarId(carData._id);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="text-center mt-4">
          <button
            className="bg-blue-700 text-white font-semibold border-8 border-r-[25px] border-l-[25px] border-blue-700 rounded-xl"
            onClick={toggleShowAll}
          >
            {showAll ? "Show Less" : "Show More"}
          </button>
        </div>
      </div>
      <Modal
        show={showModal}
        onClose={() => setShowModal(false)}
        popup
        size="md"
      >
        <Modal.Header />
        <Modal.Body>
          <div className="text-center">
            <HiOutlineExclamationCircle className="h-14 w-14 text-gray-400 dark:text-gray-200 mb-4 mx-auto" />
            <h3 className="mb-5 text-lg text-gray-500 dark:text-gray-400">
              Are you sure you want to delete this post?
            </h3>
            <div className="flex justify-center gap-4">
              <Button
                color="failure"
                onClick={() => handleToDelete(deletecarId)}
              >
                Yes, I'm sure
              </Button>
              <Button color="gray" onClick={() => setShowModal(false)}>
                No, cancel
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default VehicleDetails;

import React, { useEffect, useState } from 'react';
import { useFetchData } from "../hooks/useFetchData";
import { Link } from "react-router-dom";
import { Button, Modal } from 'flowbite-react';
import { HiOutlineExclamationCircle } from 'react-icons/hi';

function OwnerDetails() {

  const { data: ownersData, loading } = useFetchData("/getowners");
  const [formData,setformData] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [deleteownerId, setDeleteownerId] = useState("");
  const [showingData, setShowingData] = useState([]);

  useEffect(()=>{
    if(!ownersData) return
    if(ownersData) setformData(ownersData.carowners)
  },[ownersData])

  useEffect(() => {
    if (!formData) return;
    if (showAll) {
      setShowingData(formData);
    } else {
      setShowingData(formData.slice(0, 6));
      console.log(showingData);
      
    }
  }, [showAll, formData]);

  const handleToDelete = async (id) => {
    try {
      const res = await fetch("http://localhost:8050/api/deleteowner/" + id, {
        method: "DELETE",
      });
      const data = await res.json();
      if (!res.ok) {
        console.log(data.message);
      } else {
        setformData((prev) => prev.filter((cd) => cd._id !== deleteownerId));
        setShowModal(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  if (!formData.length) {
    return <p>No data available.</p>;
  }

  if (loading || !ownersData) {
    return <p>Loading...</p>;
  };

  const toggleShowAll = () => {
    setShowAll((prevState) => !prevState);
  };
 
  return (
    <div className=" h-3/4 bg-slate-300 ml-3 mr-3 mb-10">
      <div className="content ml-5 mr-5 mt-10 p-5">
        <table className="w-full ">
          <thead className="bg-gray-50 border-b-2 border-gray-200">
            <tr>
              <th className="p-3 text-sm font-semibold tracking-wide text-left">
                Name
              </th>
              <th className="p-3 text-sm font-semibold tracking-wide text-left">
                NIC
              </th>
              <th className="p-3 text-sm font-semibold tracking-wide text-left">
                Age
              </th>
              <th className="p-3 text-sm font-semibold tracking-wide text-left">
                Gender
              </th>
              <th className="p-3 text-sm font-semibold tracking-wide text-left">
                Address
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
            {showingData.map((ownerData, i) => (
              <tr key={i}>
                <td className="p-3 text-sm font-semibold tracking-wide text-left">
                  {ownerData.name}
                </td>
                <td className="p-3 text-sm font-semibold tracking-wide text-left">
                  {ownerData.nic}
                </td>
                <td className="p-3 text-sm font-semibold tracking-wide text-left">
                  {ownerData.age}
                </td>
                <td className="p-3 text-sm font-semibold tracking-wide text-left">
                  {ownerData.gender}
                </td>
                <td className="p-3 text-sm font-semibold tracking-wide text-left">
                  {ownerData.address}
                </td>
                <td className="p-3 text-sm font-semibold tracking-wide text-left">
                   <Link to={`/admin/update-owner/${ownerData._id}`}>
                   <button className='bg-green-700 text-white font-semibold border-8 border-r-[25px] border-l-[25px] border-green-700 rounded-xl'>Update</button>
                   </Link> 
                </td>
                <td className="p-3 text-sm font-semibold tracking-wide text-left">
                    <Link>
                    <button className='bg-red-700 text-white font-semibold border-8 border-r-[25px] border-l-[25px] border-red-700 rounded-xl'
                     onClick={() => {
                      setShowModal(true);
                      setDeleteownerId(ownerData._id);
                    }}
                    >Delete</button>
                    </Link>
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
                onClick={() => handleToDelete(deleteownerId)}
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

}

export default OwnerDetails;

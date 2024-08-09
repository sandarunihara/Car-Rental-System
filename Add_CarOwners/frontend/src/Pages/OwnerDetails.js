import React from 'react';
import { useFetchData } from "../hooks/useFetchData";
import { Link } from "react-router-dom";

function OwnerDetails() {

  const { data: ownersData, loading } = useFetchData("/getowners");

  if (loading || !ownersData) {
    return <p>Loading...</p>;
  }
 
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
            {ownersData.map((ownerData, i) => (
              <tr key={i}>
                <th className="p-3 text-sm font-semibold tracking-wide text-left">
                  {ownerData.Ownername}
                </th>
                <th className="p-3 text-sm font-semibold tracking-wide text-left">
                  {ownerData.OwnerNIC}
                </th>
                <th className="p-3 text-sm font-semibold tracking-wide text-left">
                  {ownerData.Ownerage}
                </th>
                <th className="p-3 text-sm font-semibold tracking-wide text-left">
                  {ownerData.Owneraddress}
                </th>
                <th className="p-3 text-sm font-semibold tracking-wide text-left">
                   <Link to={`/admin/update-owner/${ownerData._id}`}>
                   <button className='bg-green-700 text-white font-semibold border-8 border-r-[25px] border-l-[25px] border-green-700 rounded-xl'>Update</button>
                   </Link> 
                </th>
                <th className="p-3 text-sm font-semibold tracking-wide text-left">
                    <Link>
                    <button className='bg-red-700 text-white font-semibold border-8 border-r-[25px] border-l-[25px] border-red-700 rounded-xl'>Delete</button>
                    </Link>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

}

export default OwnerDetails;

import React, { useContext, useEffect, useState } from "react";
import { IoChevronBackOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
import { MdOutlineDownloadDone } from "react-icons/md";
import { toast } from "react-toastify";

const Updateuserdetails = () => {
  const { authState } = useContext(AuthContext);
  const navigate = useNavigate();
  const userid = authState.user._id;
  const [user, setuser] = useState({});
  const userrole = authState.user.role;

  const userdetails = async () => {
    if (userrole === "User") {
      const response = await fetch(
        `http://localhost:8050/api/getcustomer/${userid}`,
        {
          method: "get",
          headers: {
            "content-type": "application/json",
          },
        }
      );
      const responsedata = await response.json();
      setuser(responsedata);
    }
    if (userrole === "CarOwner") {
      const response = await fetch(
        `http://localhost:8050/api/fetchowner/${userid}`,
        {
          method: "get",
          headers: {
            "content-type": "application/json",
          },
        }
      );
      const responsedata = await response.json();
      setuser(responsedata.carowner);
    }
  };

  useEffect(() => {
    userdetails();
  }, []);

  const handlechange = (e) => {
    const { name, value } = e.target;
    setuser((pre) => {
      return {
        ...pre,
        [name]: value,
      };
    });
  };

  const handleonupdate = async () => {
    if (userrole === "User") {
      const response = await fetch(
        `http://localhost:8050/api/updatecustomer/${userid}`,
        {
          method: "post",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(user),
        }
      );
      const responsedata = await response.json();
      if (responsedata.data) {
        toast.success(responsedata.message);
        navigate("/userpro");
      }
    }
    if (userrole === "CarOwner") {
      const response = await fetch(
        `http://localhost:8050/api/updateowner/${userid}`,
        {
          method: "PUT",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(user),
        }
      );
      const responsedata = await response.json();

      if (responsedata.status) {
        toast.success(responsedata.status);
        navigate("/userpro");
      }
    }
  };

  return (
    <div className="w-screen h-screen flex gap-10 py-10 justify-center bg-gradient-to-r from-gray-200 to-blue-200">
      <div className="h-1/2 w-1/4 bg-customGray rounded-lg text-white shadow-2xl">
        <button
          onClick={() => navigate(-1)}
          className="pt-3 pl-2 flex w-[75px] transition-all  hover:text-red-500"
        >
          <IoChevronBackOutline className="text-2xl mt-[1px]" />
          <span className="font-semibold m">BACK</span>
        </button>
        <h1 className="font-bold text-center text-2xl">Profile</h1>
        <div className="rounded-full h-[150px] w-[150px] overflow-hidden mx-auto mt-4 mb-4">
          <img src="img/po.jpg" className="h-full w-full object-fill" />
        </div>
        <h2 className="font-semibold text-center text-xl">
          {user.username || user.name}
        </h2>
        <p className="font-semibold text-center text-lg">{user.email}</p>
      </div>

      <div className="h-full w-2/4 bg-customGray rounded-lg shadow-2xl text-white">
        <div className="flex justify-evenly  pl-32 mt-12  pb-12">
          <label className="font-semibold">Name</label>
          {
            userrole==="CarOwner"?(
                <input
            type="text"
            className="p-2 w-[350px] rounded-lg text-black"
            name="name"
            id="name"
            value={ user.name}
            onChange={handlechange}
            required
          />
            ):(
                <input
            type="text"
            className="p-2 w-[350px] rounded-lg text-black"
            name="username"
            id="username"
            value={user.username}
            onChange={handlechange}
            required
          />
            )
          }
          
        </div>
        <div className="flex pl-32 mt-12 justify-evenly pb-12">
          <label className="font-semibold">Email</label>
          <input
            type="text"
            className="p-2 w-[350px] rounded-lg text-black"
            name="email"
            id="email"
            value={user.email}
            onChange={handlechange}
            required
          />
        </div>

        {authState.user.age ? (
          <div className="flex pl-32 mt-12 justify-evenly pb-12">
            <label className="font-semibold">Age</label>
            <input
              type="text"
              className="p-2 w-[350px] rounded-lg text-black"
              name="age"
              id="age"
              value={user.age}
              onChange={handlechange}
              required
            />
          </div>
        ) : (
          <div></div>
        )}
        {authState.user.mobile ? (
          <div className="flex pl-32 mt-12 justify-evenly  pb-12">
            <label className="font-semibold">Mobile </label>
            <input
              type="text"
              className="p-2 w-[350px] rounded-lg text-black"
              name="mobile"
              id="mobile"
              value={user.mobile}
              onChange={handlechange}
              required
            />
          </div>
        ) : (
          <div></div>
        )}
        {authState.user.address ? (
          <div className="flex  pl-32 mt-12 justify-evenly pb-12">
            <label className="font-semibold">Address</label>
            <input
              type="text"
              className="p-2 w-[350px] rounded-lg text-black"
              name="address"
              id="address"
              value={user.address}
              onChange={handlechange}
              required
            />
          </div>
        ) : (
          <div></div>
        )}
        <div className="flex justify-center">
          <div
            onClick={handleonupdate}
            className="text-white flex items-center gap-3 bg-blue-500 py-2 w-fit px-4 mt-7 mr-4 rounded-lg cursor-pointer transition-all duration-500 hover:scale-105 "
          >
            <MdOutlineDownloadDone />
            <p>Save</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Updateuserdetails;

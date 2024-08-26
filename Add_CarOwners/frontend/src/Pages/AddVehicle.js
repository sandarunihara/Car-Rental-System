import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { app } from "../firebase";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const AddVehicle = () => {
  const [formData, setformData] = useState({});
  const [errorMessage, setErrorMessage] = useState(null);
  const [files, setFiles] = useState([]);
  const [imageUploadProgress, setImageUploadProgress] = useState([]);
  const [imageUploadError, setImageUploadError] = useState(null);
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
      !formData.Car_type ||
      !formData.CarImage||
      formData.CarImage.length === 0
    ) {
      setErrorMessage("All fields are required");
      return;
    }

    try {
      await handleUploadImages();

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
      setErrorMessage("An error occurred. Please try again.");
    }
  };

  const handleUploadImages = async () => {
    if (files.length === 0) {
      setImageUploadError("Please select images");
      return;
    }
    if (files.length > 3) {
      setImageUploadError("You can upload a maximum of 3 images");
      return;
    }

    try {
      setImageUploadError(null);
      const storage = getStorage(app);
      const promises = [];
      const progressArray = [];

      files.forEach((file, index) => {
        const fileName = new Date().getTime() + "-" + file.name;
        const storageRef = ref(storage, fileName);
        const uploadTask = uploadBytesResumable(storageRef, file);

        promises.push(
          new Promise((resolve, reject) => {
            uploadTask.on(
              "state_changed",
              (snapshot) => {
                const progress =
                  (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                progressArray[index] = progress.toFixed(0);
                setImageUploadProgress([...progressArray]);
              },
              (error) => {
                reject(error);
              },
              () => {
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                  resolve(downloadURL);
                });
              }
            );
          })
        );
      });

      const downloadURLs = await Promise.all(promises);
      setformData({ ...formData, CarImage: downloadURLs });
      setImageUploadProgress([]);
    } catch (error) {
      setImageUploadError("Image upload failed");
      setImageUploadProgress([]);
    }
  };

  return (
    <div className="w-full flex justify-center h-screen bg-gradient-to-r from-gray-300 to-blue-200 overflow-auto">
      <div className="w-[600px] p-6 mt-12 bg-black rounded-lg absolute bg-opacity-95">
        <form className="mt-4 text-white overflow-auto" onSubmit={handlesubmit}>
          <div className="flex flex-col mb-8">
            <label className="font-semibold">Car Images</label>
            <input
              type="file"
              className="p-2 rounded-lg text-white"
              id="CarImages"
              multiple
              accept="image/*"
              onChange={(e) => setFiles(Array.from(e.target.files))}
              required
            />
            {formData.CarImage && (
              <div className="flex mt-4">
                {formData.CarImage.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={`Car ${index}`}
                    className="w-[100px] h-[100px] bg-white mr-4"
                  />
                ))}
              </div>
            )}
            <button
              className={`flex justify-center items-center bg-white text-xl rounded-2xl border-r-[25px] border-l-[25px] text-black border-white mt-5 ${
                imageUploadProgress.length > 0 ? "opacity-50 cursor-not-allowed" : ""
              }`}
              onClick={handleUploadImages}
              disabled={imageUploadProgress.length > 0}
            >
              {imageUploadProgress.length > 0 ? (
                imageUploadProgress.map((progress, index) => (
                  <div key={index} className="w-12 h-12 mx-2">
                    <CircularProgressbar value={progress} text={`${progress || 0}%`} />
                  </div>
                ))
              ) : (
                "Upload"
              )}
            </button>
            {imageUploadError && (
              <div className="text-red-500 mt-2">{imageUploadError}</div>
            )}
          </div>
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

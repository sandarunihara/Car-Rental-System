import React, { useContext, useState } from "react";
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
import { Button } from "flowbite-react";
import { AuthContext } from "../Context/AuthContext";

const AddVehicle = () => {
  const {authState}=useContext(AuthContext)

  const [formData, setformData] = useState({OwnerId:authState.user._id});
  const [errorMessage, setErrorMessage] = useState(null);
  const [file, setfile] = useState();
  const [imageUploadProgress, setImageUploadProgress] = useState(null);
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
      !formData.CarImage
    ) {
      setErrorMessage("All fields required");
      console.log(formData);
    }
    try {
      await handleUploadImage();

      setErrorMessage(null);
      const res = await fetch("http://localhost:8050/api/createcar", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        console.log({ formData });
        return setErrorMessage(data.message);
      }
      if (res.ok) {
        console.log(formData);

        navigate("/Addcar/vehicle-details");
      }
    } catch (error) {
      setErrorMessage("An error Occured.please try again");
    }
  };
  const handleUploadImage = async () => {
    //     service firebase.storage {
    //   match /b/{bucket}/o {
    //     match /{allPaths=**} {
    //       allow read;
    //       allow write: if
    //       request.resource.size< 5*1024*1024 &&
    //       request.resource.contentType.matches('image/.*')
    //     }
    //   }
    // }
    try {
      if (!file) {
        setImageUploadError("Please select an image");
        return;
      }
      setImageUploadError(null);
      const storage = getStorage(app);
      const fileName = new Date().getTime() + "-" + file.name;
      const storageRef = ref(storage, fileName);
      const uploadTask = uploadBytesResumable(storageRef, file);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setImageUploadProgress(progress.toFixed(0));
        },
        (error) => {
          setImageUploadError("Image upload failed");
          setImageUploadProgress(null);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setImageUploadProgress(null);
            setImageUploadError(null);
            setformData({ ...formData, CarImage: downloadURL });
            

            console.log(formData.CarImage);
          });
        }
      );
    } catch (error) {
      setImageUploadError("Image upload failed");
      setImageUploadProgress(null);
      console.log(error);
    }
  };

  return (
    <div className=" w-full flex  justify-center h-screen bg-gradient-to-r from-gray-300 to-blue-200 overflow-auto">
      <div className=" p-10 mt-12 ml-72  bg-black rounded-lg absolute bg-opacity-95">
        <form className="mt-4 text-white" onSubmit={handlesubmit} encType="multipart/form-data">
          <div className="flex justify-between">
          <div>
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
          
          
          </div>
          <div className="  text-center w-[600px]">
            <div className=" flex justify-around">
            <label className="font-semibold">Car Image</label>
            <div className="group">
            <input
              type="file"
              className=" ml-4 mt-1 rounded-l-xl text-white bg-gradient-to-r from-gray-400 to-gray-700"
              id="CarImage"
              accept="image/*"
              multiple
              onChange={(e) => setfile(e.target.files[0])}
              required
            />
            <button
              className={`bg-gradient-to-r from-green-300 to-green-800 px-5 pt-[8px] pb-[9px] rounded-r-xl  text-black border-white hover:bg-green-800 ${
                imageUploadProgress ? "opacity-50 cursor-not-allowed" : ""
              }`}
              onClick={handleUploadImage}
              disabled={imageUploadProgress > 0}
            >
              {imageUploadProgress ? (
                <div className="">
                  <CircularProgressbar
                    value={imageUploadProgress}
                    text={`${imageUploadProgress || 0}%`}
                  />
                </div>
              ) : (
                "Upload"
              )}
            </button>
            </div>
            </div>
            {formData.CarImage && (
              <img
                src={formData.CarImage}
                className="w-[100px] h-[100px] mx-auto mt-5"
                alt="Car"
              />
            )}

            
          </div>
          </div>
            <Button
              gradientMonochrome="success"
              className=" py-3 px-16 rounded-lg w-full"
              type="submit"
            >
              Add Vehicle
            </Button>
          
        </form>
      </div>
    </div>
  );
};

export default AddVehicle;
import React from "react";
import { useFetchData } from "../hooks/useFetchData";
import {useSelector} from "react-redux";

const VehicleDetails = () => {
  // const [loading, setLoading] = useState(false);
  // const [carsData, setCarsData] = useState([]);
  // useEffect(() => {
  //   // const getdetails=axios.get('http://localhost:8050/api/getcars')
  //   // .then(res=>console.log(res))
  //   // .catch(err=>console.log(err))
  //   const fetchData = async () => {
  //     setLoading(true);
  //     try {
  //       const res = await fetch("http://localhost:8050/api/getcars");
  //       const data = await res.json();
  //       setCarsData(data);
  //     } catch (error) {
  //       alert(error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };
  //   fetchData();
  // }, []);

  const { data: carsData, loading } = useFetchData("/getcars");

  if (loading || !carsData) {
    return <p>Loading...</p>;
  }
  const handlesubmit = async (e)=>{
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:8050/api/updatecar/')
    } catch (error) {
      
    }
  }
  return (
    <div className=" h-3/4 bg-slate-300 ml-3 mr-3 mb-10">
      <div className="content ml-5 mr-5 mt-10 p-5">
        <table className="w-full ">
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
            {carsData.map((carData, i) => (
              <tr key={i}>
                <th className="p-3 text-sm font-semibold tracking-wide text-left">
                  {carData.Carname}
                </th>
                <th className="p-3 text-sm font-semibold tracking-wide text-left">
                  {carData.Fueltype}
                </th>
                <th className="p-3 text-sm font-semibold tracking-wide text-left">
                  {carData.Carnumber}
                </th>
                <th className="p-3 text-sm font-semibold tracking-wide text-left">
                  {carData.Price}
                </th>
                <th className="p-3 text-sm font-semibold tracking-wide text-left">
                  {carData.Seat}
                </th>
                <th className="p-3 text-sm font-semibold tracking-wide text-left">
                  {carData.Location}
                </th>
                <th className="p-3 text-sm font-semibold tracking-wide text-left">
                  {carData.Car_type}
                </th>
                <th className="p-3 text-sm font-semibold tracking-wide text-left">
                    <button className='bg-green-700 text-white font-semibold border-8 border-r-[25px] border-l-[25px] border-green-700 rounded-xl'>Update</button>
                </th>
                <th className="p-3 text-sm font-semibold tracking-wide text-left">
                    <button className='bg-red-700 text-white font-semibold border-8 border-r-[25px] border-l-[25px] border-red-700 rounded-xl'>Delete</button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default VehicleDetails;

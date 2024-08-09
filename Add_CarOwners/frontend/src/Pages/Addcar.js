import React, { useEffect, useState } from "react";
import { useFetchData } from "../hooks/useFetchData";
//import AddcarDashboard from '../Components/AddcarDashboard';

const Addcar = () => {
  const [totalcars, setTotalcars] = useState(0);
  const [formData, setformData] = useState("");
  const { data: carsData, loading } = useFetchData("/getcars");

  useEffect(() => {
    setTotalcars(formData.totalcars);
  }, [formData]);

  useEffect(() => {
    if (carsData) {
      setformData(carsData);
    }
  }, [carsData]);

  return <div className="w-full flex">{totalcars}</div>;
};

export default Addcar;

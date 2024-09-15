import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthContext";

export const useFetchData = (endpoint = "/") => {
  const {backendDomain}=useContext(AuthContext);
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const API_URL = `${backendDomain}/api`;
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch(API_URL + endpoint);
        const resData = await res.json();
        setData(resData);
      } catch (error) {
        setData(undefined);
        alert(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [endpoint]);

  return { data, loading };
};

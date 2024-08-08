import { useEffect, useState } from "react";

export const useFetchData = (endpoint = "/") => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const API_URL = `http://localhost:8050/api`;
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

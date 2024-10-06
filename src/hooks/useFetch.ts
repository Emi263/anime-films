import axios from "axios";
import { useEffect, useState } from "react";
import { MovieType } from "../types";

function useFetch() {
  const [data, setData] = useState<MovieType[]>([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  async function getData() {
    try {
      const { data } = await axios.get("https://ghibliapi.vercel.app/films?limit=9");
      setData(data);
      setLoading(false);
    } catch (error) {
      setError(true);
      setLoading(false);
    }
  }

  useEffect(() => {
    getData()
  }, []);

  return {
    data,
    loading,
    error,
  };
}

export default useFetch;

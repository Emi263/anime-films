import axios from "axios";
import { useEffect, useState } from "react";
import { MovieType } from "../types";

function useFetch(limit?: true | false) {
  const [data, setData] = useState<MovieType[]>([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  async function getData() {
    const url = limit ? "https://ghibliapi.vercel.app/films?limit=9" : "https://ghibliapi.vercel.app/films";

    try {
      const { data } = await axios.get(url);
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

import axios from "axios";
import { useEffect, useState } from "react";
import { MovieType } from "../types";

function useSingleMovieFetch(id: string) {
  const [data, setData] = useState<MovieType | null>(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  async function getData() {
    try {
      const { data } = await axios.get("https://ghibliapi.vercel.app/films/" + id);
      setData(data);
      setLoading(false);
    } catch (error) {
      setError(true);
      setLoading(false);
    }
  }

  useEffect(() => {
    getData()
  }, [id]);

  return {
    data,
    loading,
    error,
  };
}

export default useSingleMovieFetch;

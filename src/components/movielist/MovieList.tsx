import { useContext } from "react";
import MovieCard from "./components/movieCard/MovieCard"
import "./movieList.css";
import { GlobalContext } from "../../context/GlobalContext";
import useFetch from "../../hooks/useFetch";
import { Spin } from "antd";
import Loading from "../common/Loading";
import Error from "../common/Error";

function MovieList() {

  const {
    data: movies,
    loading,
    error
  } = useFetch();

  const { theme } = useContext(GlobalContext);

  if (loading) {
    return <Loading />
  }

  if (error) {
    return <Error />
  }

  return (
    <div style={{
      backgroundColor: theme === "light" ? "white" : "black"
    }
    } className="movie-list" >
      {
        movies.map((movie) => {
          return <MovieCard imageUrl={movie.movie_banner} title={movie.title} rating={movie.rt_score} key={movie.id} />
        })
      }
    </div >
  )
}

export default MovieList
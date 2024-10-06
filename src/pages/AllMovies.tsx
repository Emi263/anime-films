import { useContext, useEffect, useState } from "react";
import Header from "../components/header/Header";
import { GlobalContext } from "../context/GlobalContext";
import MovieCard from "../components/movielist/components/movieCard/MovieCard";
import useFetch from "../hooks/useFetch";
import Loading from "../components/common/Loading";
import Error from "../components/common/Error";
import { MovieType } from "../types";
import { Button } from "antd";

function AllMovies() {
  const { data: movies, loading, error } = useFetch();

  const [filteredMovies, setFilteredMovies] = useState(movies);


  console.log(filteredMovies);

  useEffect(() => {
    setFilteredMovies(movies);
  }, [movies])

  const { theme } = useContext(GlobalContext);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  function filterMoviesByRating(): MovieType[] {
    const bestRatedMovies = movies.filter((movie) => {
      if (parseInt(movie.rt_score) > 90) return true;
      return false;
    })
    setFilteredMovies(bestRatedMovies);

    return bestRatedMovies;
  }

  function sortMoviesByRating(): MovieType[] {
    const moviesToSort = [...movies];

    moviesToSort.sort((a, b) => parseInt(b.rt_score) - parseInt(a.rt_score));
    setFilteredMovies(moviesToSort);
    return moviesToSort;
  }



  return (
    <div>
      <Header />
      <Button color="primary" variant="filled" onClick={filterMoviesByRating}>Best Rated Movies</Button>
      <Button color="primary" variant="filled" onClick={sortMoviesByRating}>Sort Movies by Rating</Button>

      <div
        style={{
          backgroundColor: theme === "light" ? "white" : "black",
        }}
        className="movie-list"
      >
        {filteredMovies.map((movie) => {
          return (
            <MovieCard
              id={movie.id}
              imageUrl={movie.movie_banner}
              title={movie.title}
              rating={movie.rt_score}
              key={movie.id}
              description={movie.description}
              rt_score={movie.rt_score}
            />
          );
        })}
      </div>
    </div>
  );
}

export default AllMovies;

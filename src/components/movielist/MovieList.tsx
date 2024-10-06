import MovieCard from "./components/movieCard/MovieCard"
import "./movieList.css";

function MovieList() {

  const movies = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <div className="movie-list">
      {movies.map((movie) => {
        return <MovieCard key={movie} />
      })}
    </div>
  )
}

export default MovieList
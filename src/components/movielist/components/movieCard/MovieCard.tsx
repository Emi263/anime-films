import "./movieCard.css";

interface Props {
  imageUrl: string;
  title: string;
  rating: string;
}

function MovieCard(props: Props) {
  return (
    <article className="movie-card">
      <img src={props.imageUrl} alt='' />
      <h3>{props.title}</h3>
      <p>Rating: {props.rating}</p>
    </article>

  )
}

export default MovieCard
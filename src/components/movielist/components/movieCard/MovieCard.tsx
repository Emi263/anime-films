import { useNavigate } from "react-router-dom";
import "./movieCard.css";
import { Popover, Rate } from "antd";
import { getRating } from "../../../../utils";

interface Props {
  imageUrl: string;
  title: string;
  rating: string;
  id: string;
  description: string;
  rt_score: string;
}

function MovieCard(props: Props) {

  const nav = useNavigate();

  function handleSingleMovieNavigation() {
    nav(`/movie/${props.id}`);
  }

  const rating = getRating(props.rt_score)
  const content = (
    <div style={{
      maxWidth: 400
    }}>
      <Rate allowHalf value={rating} disabled />
      <p>{props.description}</p>

    </div>
  );



  return (
    <Popover placement="topLeft" title={props.title} content={content}>
      <article onClick={handleSingleMovieNavigation} className="movie-card">
        <img src={props.imageUrl} alt='' />
        <h3>{props.title}</h3>
        <p>Rating: {props.rating}</p>
      </article>
    </Popover>

  )
}

export default MovieCard
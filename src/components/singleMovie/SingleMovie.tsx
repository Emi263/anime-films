import { MovieType } from '../../types'
import { convertDurationToHoursAndMinutes, getRating } from '../../utils'
import { Rate } from 'antd';

interface Props {
  movie: MovieType
}

function SingleMovieCard(props: Props) {

  const duration = convertDurationToHoursAndMinutes(props.movie.running_time);

  const rating = getRating(props.movie.rt_score)



  return (
    <div style={{
      padding: 24
    }}>
      <h1 style={{
        textAlign: 'center'
      }}>{props.movie.title} <Rate allowHalf value={rating} disabled /></h1>
      <p style={{
        textAlign: 'center'
      }}>{props.movie.description}</p>
      <img style={{
        marginLeft: 'auto',
        marginRight: 'auto'
      }} src={props.movie.image} alt='' />
      <div>

        <p>Producer: {props.movie.producer}</p>
        <p>Duration:  {duration.hours} hour, {duration.minutes} minutes</p>
      </div>
    </div>
  )
}

export default SingleMovieCard
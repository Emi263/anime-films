import { useParams } from 'react-router-dom'
import useSingleMovieFetch from '../hooks/useSingleMovieFetch';
import Loading from '../components/common/Loading';
import Error from '../components/common/Error';
import Header from '../components/header/Header';
import SingleMovieCard from '../components/singleMovie/SingleMovie';

function SingleMovie() {
  const params = useParams() as {
    id: string;
  };

  const { data, loading, error } = useSingleMovieFetch(params.id);

  if (loading) {
    return <Loading />
  }

  if (error) {
    return <Error />
  }

  return (
    <div>
      <Header />
      {data !== null && <SingleMovieCard movie={data} />}
    </div>
  )
}

export default SingleMovie
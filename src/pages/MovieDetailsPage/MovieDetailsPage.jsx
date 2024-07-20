import React, { Suspense, useEffect, useRef, useState } from "react";
import { Link, Outlet, useLocation, useParams } from "react-router-dom";
import MovieCard from '../../components/MovieCard/MovieCard';
import { getMovieDetails } from "../../api";
import ErrorMessage from '../../components/ErrorMassage/ErrorMessage';
import Loader from "../../components/Loader/Loader";
import { NotFound } from "../../components/NotFound/NotFound";

const MovieDetailsPage = () => {
  const [data, setData] = useState(null);
  const { movieId } = useParams();
  const [errorMessage, setErrorMessage] = useState("");
  const [statusCode, setStatusCode] = useState(null);
  const [loading, setLoading] = useState(false);

  const location = useLocation();
  const ref = useRef(location.state ?? "/");

  const getMovieDetailsAsync = async () => {
    setLoading(true);
    try {
      const data = await getMovieDetails(movieId);
      setData(data);
    } catch (e) {
      setErrorMessage(e.message);
      setStatusCode(e.response?.status);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getMovieDetailsAsync();
  }, [movieId]);

  return (
    <>
      <Link to={ref.current}>Back</Link>
      {errorMessage && statusCode !== 404 && (
        <ErrorMessage message={errorMessage} />
      )}
      {statusCode === 404 && <NotFound errorMessage={errorMessage} />}
      {loading ? (
        <Loader />
      ) : (
        data && (
          <MovieCard
            backdrop_path={data.backdrop_path}
            title={data.title}
            overview={data.overview}
            genres={data.genres}
            vote_average={data.vote_average}
          />
        )
      )}
      <>
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </>
    </>
  );
};

export default MovieDetailsPage;

0000
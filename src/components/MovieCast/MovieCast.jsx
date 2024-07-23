import React, { useEffect, useState } from "react";
import MovieCastItem from "../MovieCastItem/MovieCastItem";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import { useParams } from "react-router-dom";
import { getMovieCredits } from "../../api";
import Loader from "../Loader/Loader";

const MovieCast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [castLoading, setCastLoading] = useState(false);
  const [errorMessageCast, setErrorMessageCast] = useState("");

  const getMovieCastAsync = async () => {
    setCastLoading(true);
    try {
      const data = await getMovieCredits(movieId);
      console.log('Fetched data:', data); // Для отладки
      setCast(data.cast || []); // Убедитесь, что это массив
    } catch (e) {
      setErrorMessageCast(e.message);
    } finally {
      setCastLoading(false);
    }
  };

  useEffect(() => {
    getMovieCastAsync();
  }, [movieId]);

  return (
    <>
      {errorMessageCast && <ErrorMessage message={errorMessageCast} />}
      {castLoading ? (
        <Loader />
      ) : (
        <div>
          {Array.isArray(cast) && cast.map(({ profile_path, name, character, id }) => (
            <MovieCastItem
              key={id}
              profile_path={profile_path}
              name={name}
              character={character}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default MovieCast;

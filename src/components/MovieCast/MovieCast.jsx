import React, { useEffect, useState } from "react";
import PropTypes from "prop-types"; 
import MovieCastItem from "../MovieCastItem/MovieCastItem";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import { useParams } from "react-router-dom";
import { getMovieCredits } from "../../api";
import Loader from "../Loader/Loader";
import * as S from "./MovieCast.style";

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
        <S.ListCast>
          {Array.isArray(cast) && cast.map(({ profile_path, name, character, id }) => (
            <MovieCastItem
              key={id}
              profile_path={profile_path}
              name={name}
              character={character}
            />
          ))}
        </S.ListCast>
      )}
    </>
  );
};

MovieCast.propTypes = {
  movieId: PropTypes.string.isRequired, // Указываем, что movieId должен быть строкой и обязательным
  cast: PropTypes.arrayOf(
    PropTypes.shape({
      profile_path: PropTypes.string,
      name: PropTypes.string.isRequired,
      character: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
  castLoading: PropTypes.bool,
  errorMessageCast: PropTypes.string,
};

export default MovieCast;
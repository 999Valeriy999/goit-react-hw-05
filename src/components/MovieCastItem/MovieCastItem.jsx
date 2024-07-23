import React from "react";
import PropTypes from "prop-types";

const MovieCastItem = ({ profile_path, name, character }) => {
  // Возвращаем пустой элемент, если нет `profile_path`
  if (!profile_path) {
    return null;
  }

  // Возвращаем данные компонента, если `profile_path` есть
  return (
    <>
      <img
        src={`https://image.tmdb.org/t/p/w500${profile_path}`}
        alt={name}
      />
      <div>{name}</div>
      <div>{character}</div>
    </>
  );
};

MovieCastItem.propTypes = {
  profile_path: PropTypes.string,
  name: PropTypes.string.isRequired,
  character: PropTypes.string.isRequired,
};

export default MovieCastItem;
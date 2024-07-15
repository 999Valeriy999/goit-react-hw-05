import React from 'react';
import TrendingItem from '../TrendingItem/TrendingItem'; // Предполагается, что у вас есть компонент TrendingItem для отображения каждого элемента списка

const MovieList = ({ title, movies, isLoading }) => {
  return (
    <div>
      {title && <h2>{title}</h2>}
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {Array.isArray(movies) && movies.map((movie) => (
            <TrendingItem key={movie.id} id={movie.id} name={movie.title} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default MovieList;
import React from 'react';
import TrendingItem from '../TrendingItem/TrendingItem'; // Предполагается, что у вас есть компонент TrendingItem для отображения каждого элемента списка

const MovieList = ({ movies }) => {
  return (
    
      <ul>
        {Array.isArray(movies) && movies.map((movie) => (
          <TrendingItem key={movie.id} id={movie.id} name={movie.title} />
        ))}
      </ul>
    
  );
};

export default MovieList;
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import TrendingItem from '../TrendingItem/TrendingItem'; // список элементов фильма//

const MovieList = ({ movies }) => {
  const location = useLocation();

  return (
    <ul>
      {Array.isArray(movies) && movies.map((movie) => (
        <li key={movie.id}>
          <Link 
            to={`/movies/${movie.id}`} 
            state={{ from: location }}
          >
            <TrendingItem id={movie.id} name={movie.title} />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MovieList;
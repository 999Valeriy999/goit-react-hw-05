import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import TrendingItem from '../TrendingItem/TrendingItem'; // список элементов фильма//
import Loader from '../Loader/Loader'; // Передбачається, що у вас є компонент Loader

const MovieList = ({ movies = [], title, list = [], isLoading }) => {
  const location = useLocation();

  return (
    <ul>
      {isLoading ? (
        <Loader /> // Відображення компонента Loader під час завантаження
      ) : (
        <>
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
          {Array.isArray(list) && list.map(({ original_title, id }) => (
            <li key={id}>
              <Link 
                to={`/movies/${id}`} 
                state={{ from: location }}
              >
                <TrendingItem id={id} name={original_title} />
              </Link>
            </li>
          ))}
          {(!movies.length && !list.length) && (
            <div>No movies found.</div>
          )}
        </>
      )}
    </ul>
  );
};

export default MovieList;9
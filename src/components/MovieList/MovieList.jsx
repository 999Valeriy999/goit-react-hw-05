import React, { useState, useEffect } from 'react';
import { fetchMovies } from '../../api';

const MovieList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const moviesData = await fetchMovies();
        setMovies(moviesData); // Сохраняем данные о фильмах в состояние
      } catch (error) {
        console.error('Error loading movies:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Movie List</h2>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <h3>{movie.title}</h3>
            <p>Director: {movie.director}</p>
            <p>Release Year: {movie.releaseYear}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;

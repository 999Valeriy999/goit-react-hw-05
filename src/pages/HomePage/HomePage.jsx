
import React, { useEffect, useState } from 'react';
import { fetchFilm  } from '../api';
import MovieList from './MovieList';

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getMovies = async () => {
      const moviesData = await fetchFilm();
      setMovies(moviesData);
      setLoading(false);
    };

    getMovies();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <h1>Home Page</h1>
      <MovieList movies={movies} />
    </div>
  );
};

export default HomePage;
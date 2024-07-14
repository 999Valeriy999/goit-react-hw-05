import React, { useState, useEffect } from 'react';
import { fetchMovies } from '../../api';

const MovieList = () => {
  const [moviesList, setMoviesList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const data = await fetchMovies();
        setMoviesList(data);
      } catch (error) {
        setError('Error loading movies');
        console.error('Error loading movies:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return (
      <div>
        <h2>Movie List</h2>
        <p>Error: {error}</p>
      </div>
    );
  }

 
};

export default MovieList;
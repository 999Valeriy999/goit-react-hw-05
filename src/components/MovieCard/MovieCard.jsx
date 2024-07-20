import React, { useState, useEffect } from 'react';
import MovieCard from '../../components/MovieCard/MovieCard';

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // Замените на реальный API запрос или статичные данные
    const fetchedMovies = [
      {
        id: 1,
        backdrop_path: '{https://image.tmdb.org/t/p/w500${backdrop_path}`}',
        title: 'Movie 1',
        overview: 'Description 1',
        genres: [{ id: 1, name: 'Action' }, { id: 2, name: 'Drama' }],
        vote_average: 7.5,
      },
      // Другие фильмы
    ];
    setMovies(fetchedMovies);
  }, []);

  return (
    <div>
      <h1>Movies Page</h1>
      <div className="movie-list">
        {movies.map(movie => (
          <MovieCard
            key={movie.id}
            backdrop_path={movie.backdrop_path}
            title={movie.title}
            overview={movie.overview}
            genres={movie.genres}
            vote_average={movie.vote_average}
          />
        ))}
      </div>
    </div>
  );
};

export default MoviesPage;
import { useEffect, useState } from "react";
import { fetchTopRatedFilms } from "../../api";
import MovieList from '../../components/MovieList/MovieList';

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null); // Состояние для хранения ошибки

  const handleMoviesUpdate = (movies) => {
    setMoviesList(movies);
  };

  useEffect(() => {
    const asyncWrapper = async () => {
      try {
        setIsLoading(true);
        const data = await fetchTopRatedFilms();
        setMovies(data);
      } catch (error) {
        setError(error); n
        console.error("Error fetching top rated films:", error);
      } finally {
        setIsLoading(false);
      }
    };

    asyncWrapper();
  }, []);

  return (
    <div>
    <h2>Trending today</h2>
    <MovieList movies={movies} />
    
    {isLoading && <p>Loading...</p>}

    {error && (
      <div>
        <p>Failed to fetch top rated films. Please try again later.</p>
        <p>Error details: {error.message}</p>
      </div>
    )}
  </div>
);
};

export default HomePage;
     

     
        
  



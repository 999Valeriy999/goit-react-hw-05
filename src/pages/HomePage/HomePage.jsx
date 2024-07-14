
import { useEffect, useState } from "react";
import { fetchTopRatedFilms } from "../../api";
import { fetchMovies } from "../../api";

const HomePage = () => {
const [movies, setMovies] = useState ([]);
const [isLoading, setIsLoading] = useState(false);
useEffect(() => {
  const asyncWrapper = async () => {
    try {
      setIsLoading(true);
    const data = await fetchTopRatedFilms ();
    setMovies(data);
    } catch (error) {
    console.log(error);
  } finally {
    setIsLoading(false);
  }
  };

 asyncWrapper(); }, []);
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
      <h1>Home page</h1>
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
    </div>
  );
};

export default HomePage;
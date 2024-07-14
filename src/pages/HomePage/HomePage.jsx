
import { useEffect, useState } from "react";
import { fetchTopRatedFilms } from "../../api";
import MovieList from "../../components/MovieList/MovieList";


const HomePage = () => {
const [movies, setMovies] = useState ([]);
const [isLoading, setIsLoading] = useState(false);
const [moviesList, setMoviesList] = useState([]);

  const handleMoviesUpdate = (movies) => {
    setMoviesList(movies);
  };
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
 


 return (
  <div>
    <h1></h1>
    <MovieList onMoviesUpdate={handleMoviesUpdate} />
    <div>
      <h2> MovieList</h2>
      <ul>
        {moviesList.map(movie => (
          <li key={movie.id}>
            {movie.title}
          </li>
        ))}
      </ul>
    </div>
  </div>
);
};

export default HomePage;
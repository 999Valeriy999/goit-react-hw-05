
import { useEffect, useState } from "react";
import { fetchTopRatedFilms } from "../../api";

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

  return (
    <div>
      <h1>Home page</h1>
    </div>
  );
};

export default HomePage;
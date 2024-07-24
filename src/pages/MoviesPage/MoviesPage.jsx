import React, { useEffect, useState } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import MovieList from "../../components/MovieList/MovieList";
import { getSearchMovie } from "../../api";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import { useSearchParams } from "react-router-dom";

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState();
  const [searchParams, setSearchParams] = useSearchParams();

  async function getSearchMovieAsync(value) {
    try {
      setLoading(true);
      setMovies([]);
      console.log("Fetching movies for query:", value); // Лог для налагодження
      const { results } = await getSearchMovie(value);
      console.log("Fetched movies:", results); // Лог для налагодження
      setMovies(results);
      if (results.length === 0)
        iziToast.show({
          color: "red",
          message: "Unfortunately, we did not find a film for your request",
          position: "topRight",
        });
    } catch (e) {
      console.error("Error fetching movies:", e); // Лог для налагодження
      setErrorMessage(e.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    const query = searchParams.get("query") ?? "";
    console.log("Query parameter:", query); // Лог для налагодження
    if (query.trim() !== "") {
      getSearchMovieAsync(query);
    }
  }, [searchParams]);

  const handleSubmit = (value) => {
    console.log("Submitting query:", value); // Лог для налагодження
    if (value === "") {
      iziToast.error({
        title: "Error",
        message: "Enter the value before submitting.",
        position: "topRight",
      });
      return;
    }
    setSearchParams({ query: value });
    setMovies([]);
  };

  return (
    <>
      <SearchBar onSubmit={handleSubmit} query={searchParams.get("query") || ""} />
      <MovieList
        list={movies}
        errorMessage={errorMessage}
        isLoading={loading}
      />
    </>
  );
};

export default MoviesPage;
import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.params = {
  api_key: "28914ce15cab0b4f8d47d4bcf46462e9",
};
const apiKeyParameter = 'api_key=28914ce15cab0b4f8d47d4bcf46462e9';

export const fetchTopRatedFilms = async () => {
  try {
    const response = await axios.get("/movie/top_rated", {
      params: {
        include_adult: true,
        page: 1,
      },
    });

    return response.data.results; // возвращаем только массив результатов фильмов
  } catch (error) {
    console.error("Ошибка при запросе к API:", error);
    throw error;
    
  }
 }
 export const getMovieDetails = async (movie_id) => {
  try {
    const response = await axios.get(`/movie/${movie_id}`);
    return response.data; // возвращаем данные о фильме
  } catch (error) {
    console.error("Ошибка при запросе к API:", error);
    throw error;
  }
};

export const getMovieCredits = async id => {
  const { data } = await axios.get(`movie/${id}/credits?${apiKeyParameter}`);
  return data;
};

export const  getMovieReviews = async id => {
  const { data } = await axios.get(`movie/${id}/reviews?${apiKeyParameter}`);
  return data;
};

export const getSearchMovie = async (query, page = 1) => {
  try {
    const { data } = await axios.get("search/movie", {
      params: {
        query: query,
        page: page,
      },
    });
    return data;
  } catch (error) {
    console.error("Error fetching movies:", error);
    throw error;
  }
};





import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.params = {
  api_key: "28914ce15cab0b4f8d47d4bcf46462e9",
};

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
};
export const fetchMovies = async () => {
  try {
    const response = await fetch('https://api.themoviedb.org/3/lists');
    const data = await response.json();
    return data; // Возвращает массив объектов с данными о фильмах
  } catch (error) {
    console.error('Error', error);
    throw error;
  }
};
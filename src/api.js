import axios from "axios";

axios.defaults.baseURL = "https://www.themoviedb.org/";
axios.defaults.params =
 {api_key: "28914ce15cab0b4f8d47d4bcf46462e9",};

export const fetchFilm = async (searchQuery) => {
  try {
    const response = await axios.get("https://themoviedb.org/3/account/rated/movies", {
      params: {
        query: searchQuery,
      },
    });

    return response.data;
  } catch (error) {
    console.error("Ошибка при запросе к API:", error);
    throw error;
  }
};
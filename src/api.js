import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.params =
 {api_key: "28914ce15cab0b4f8d47d4bcf46462e9",};

export const fetchFilm = async (searchQuery) => {
  try {
    const response = await axios.get("/rated/movies", {
          });

    return response.data;
  } catch (error) {
    console.error("Ошибка при запросе к API:", error);
    throw error;
  }
};
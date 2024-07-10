import axios from "axios";

axios.defaults.baseURL = "https://api.example.com/";
const API_KEY = "your_api_key_here";
const AUTH_TOKEN = "your_auth_token_here";

export const fetchFilm = async (searchQuery, currentPage) => {
  try {
    const response = await axios.get("/search/movie", {
      params: {
        api_key: API_KEY,
        query: searchQuery,
        page: currentPage,
      },
      headers: {
        Authorization: `Bearer ${AUTH_TOKEN}`,
      },
    });

    return response.data;
  } catch (error) {
    console.error("Ошибка при запросе к API:", error);
    throw error;
  }
};
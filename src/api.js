import axios from "axios";

axios.defaults.baseURL = "https://www.themoviedb.org/";
const API_KEY = "28914ce15cab0b4f8d47d4bcf46462e9";
const AUTH_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyODkxNGNlMTVjYWIwYjRmOGQ0N2Q0YmNmNDY0NjJlOSIsIm5iZiI6MTcyMDcyODUxMy44ODcyOTksInN1YiI6IjY2ODVhMjBhNjNkMGI1ZDdmYTFhNDc3MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rFu2IKeY4pJGKzWA4TiC_A4EHz3SlbkO2qkDWVDKCmM ";

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
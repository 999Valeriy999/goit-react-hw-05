import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3/";
const ACCESS_KEY = "28914ce15cab0b4f8d47d4bcf46462e9";

export const fetchFilm = async (searchQuery, currentPage) => {
  const response = await axios.get("/search/movie", {
    params: {
      query: searchQuery,
      page: currentPage,
      per_page: 15,
      client_id: ACCESS_KEY,
      orientation: "landscape",
    },
    headers: {
      Authorization: `Bearer 28914ce15cab0b4f8d47d4bcf46462e9 `,
    }
  });

  return response.data;
};

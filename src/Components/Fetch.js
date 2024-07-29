import axios from "axios";

export const BASE_URL = "https://youtube-v31.p.rapidapi.com/search";

const options = {
  params: {
    maxResults: 50,
  },
  headers: {
    "x-rapidapi-key": window.REACT_APP_RAPID_API_KEY,
    "x-rapidapi-host": "youtube-v31.p.rapidapi.com",
  },
};

export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(url, options);
  return data;
};

import axios from "axios";
import { Photo } from "./types";

axios.defaults.headers.common["Authorization"] =
  "Client-ID zr1Os87TpRzUJS7xGhKv3NSxWm-6AC-9zIcesBRS42c";

const params = {
  orientation: "landscape",
  per_page: 20,
};

interface Data {
  results: Photo[];
  total: number;
  total_pages: number;
}

export const fetchApi = async (query: string, page: number): Promise<Data> => {
  const { data } = await axios.get(
    `https://api.unsplash.com/search/photos?query=${query}&page=${page}`,
    { params }
  );

  return data;
};

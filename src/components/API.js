import axios from "axios";

axios.defaults.headers.common["Authorization"] =
  "Client-ID zkBf59qD7nf-CT-LbIfg71dXEScVfPzxmuY-z1bEAb8";

const params = {
  orientation: "landscape",
  per_page: 20,
};

export const fetchApi = async (query, page) => {
  const { data } = await axios.get(
    `https://api.unsplash.com/search/photos?query=${query}&page=${page}`,
    { params }
  );

  return data;
};

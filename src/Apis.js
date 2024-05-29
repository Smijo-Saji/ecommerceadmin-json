import axios from "axios";

export const base_url = "https://productmanagement-json-backend.onrender.com";

export const fetchData = async () => {
  const { data } = await axios.get(`${base_url}/products`);
  return data;
};

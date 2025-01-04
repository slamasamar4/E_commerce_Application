import axios from "axios";

const API_URL = "http://localhost:8080/api/clients";

export const getAllProducts = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const createProduct = async (product) => {
  const response = await axios.post(API_URL, product);
  return response.data;
};

import axios from "axios";

const API_URL = "http://localhost:8080/api/clients";

export const getAllClients = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const createClient = async (client) => {
  const response = await axios.post(API_URL, client);
  return response.data;
};

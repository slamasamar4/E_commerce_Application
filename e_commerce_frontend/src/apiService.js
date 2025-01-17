import axios from 'axios';

// Base URL for the backend
const BASE_URL = 'http://localhost:8080/api'; // Replace with your backend URL

export const loginUser = async (credentials) => {
  const response = await axios.post(`${BASE_URL}/auth/login`, credentials);
  return response.data;
};

export const signUpUser = async (userDetails) => {
  const response = await axios.post(`${BASE_URL}/auth/signup`, userDetails);
  return response.data;
};

export const fetchProducts = async () => {
  const response = await axios.get(`${BASE_URL}/products`);
  return response.data;
};

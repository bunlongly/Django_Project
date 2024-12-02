import axios from "axios";
import { ACCESS_TOKEN } from "./constants";

// Create an axios instance
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

// Request interceptor to add the authorization token if available
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem(ACCESS_TOKEN);
    if (token) {
      // Correct string interpolation using backticks (`) for template literals
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config; // Don't forget to return the config object here!
  },
  (error) => {
    return Promise.reject(error); // Handle any request errors
  }
);

export default api;

// axiosInstance.js
import axios from 'axios';
// import { setupCache } from 'axios-cache-adapter';

import { serverBaseUrl } from 'src/configs/endpoints';

// Create `axios-cache-adapter` instance
// const cache = setupCache({
//   maxAge: 15 * 60 * 1000,
//   exclude: { query: false }
// });

// Create axios instance
const axiosInstance = axios.create({
  // adapter: cache.adapter,
  baseURL: serverBaseUrl,
  timeout: 10000
});

// Request interceptor to add Bearer token
axiosInstance.interceptors.request.use(
  config => {
    const token = sessionStorage.getItem('authToken').split(" ")[1];
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => Promise.reject(error)
);

// Response interceptor to handle errors
axiosInstance.interceptors.response.use(
  response => response,
  error => {
    if (error.response) {
      console.error(error.response.status);
      if (error.response.status === 401) {
        // Handle unauthorized access
        window.location.href = '/login';
      }
      if (error.response.status === 404) {
        // Handle unauthorized access
        // window.location.href = '/404';
      }
    } else if (error.request) {
      console.error('Request error:', error.request);
    } else {
      console.error('General error:', error.message);
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;


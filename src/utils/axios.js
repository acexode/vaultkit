// axiosInstance.js
import axios from 'axios';
import { setupCache } from 'axios-cache-adapter';

import { serverBaseUrl } from 'src/configs/endpoints';

import { history } from './history';

// Create `axios-cache-adapter` instance
const cache = setupCache({
  maxAge: 15 * 60 * 1000,
  exclude: { query: false }
});

// Create axios instance
const axiosInstance = axios.create({
  adapter: cache.adapter,
  baseURL: serverBaseUrl,
  timeout: 10000
});

// Request interceptor to add Bearer token
axiosInstance.interceptors.request.use(
  config => {
    const token = localStorage.getItem('token');
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
      console.error('Response error:', error.response.data);
      if (error.response.status === 401) {
        // Handle unauthorized access
        history.push('/login');
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


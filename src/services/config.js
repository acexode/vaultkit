// eslint-disable-next-line import/no-extraneous-dependencies
import axios from 'axios';

export const getToken = () => {
  if (typeof window !== 'undefined') {
    return localStorage.getItem('lgtk') ? localStorage.getItem('lgtk') : null;
  }
  return null;
};
export const getAuthorizationHeader = () => `Bearer ${getToken()}`;

export const baseURL = import.meta.env.VITE_API_URL;

export const client = axios.create({
  baseURL,
  headers: {
    Authorization: getAuthorizationHeader(),
  },
});

export const instance = axios.create({
  baseURL,
});

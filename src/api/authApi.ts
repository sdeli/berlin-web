import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000', // Backend URL
});

export const login = async (username: string, password: string) => {
  const response = await api.post('/auth/login', { username, password });
  return response.data;
};

export const refreshToken = async (refreshToken: string) => {
  const response = await api.post('/auth/refresh', { refresh_token: refreshToken });
  return response.data;
};

import axios from 'axios';

const API_URL = "https://healthy-pulse-ai-server.onrender.com";

const api = axios.create({
  baseURL: API_URL
});



export const signup = async (userData) => {
  return await api.post('/api/auth/register', userData); 
};

export const login = async (userData) => {
  return await api.post('/api/auth/login', userData);
};

export default api;
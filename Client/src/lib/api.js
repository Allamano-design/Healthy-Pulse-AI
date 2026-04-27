import axios from 'axios';

// Make sure this is your SERVER url, not the frontend one
const API_URL = "https://healthy-pulse-ai-server.onrender.com"; 

const api = axios.create({
  baseURL: API_URL,
});


export const signup = async (userData) => {
  return await api.post('/api/auth/register', userData); 
};

export const login = async (userData) => {
  return await api.post('/api/auth/login', userData);
};


export const verifyEmail = async (verificationData) => {

  return await api.post('/api/auth/verify-email', verificationData);
};

export default api;
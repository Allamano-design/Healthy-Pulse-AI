import axios from 'axios';

const API_URL = "https://healthy-pulse-ai-server.onrender.com";

export const signup = async (userData) => {
  return await axios.post(`${API_URL}/api/auth/signup`, userData);
};



export default api;
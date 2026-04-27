import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

const response = await axios.post(`${API_URL}/api/auth/signup`, userData);

export default api;
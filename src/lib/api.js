import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api', // This matches your Server's port
});

export default api;
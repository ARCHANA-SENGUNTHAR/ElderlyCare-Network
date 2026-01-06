import axios from 'axios';

const api = axios.create({
  baseURL: "https://elderlycare-network-backend.onrender.com/api", // 👈 IMPORTANT
});

export default api;

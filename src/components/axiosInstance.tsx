import axios from "axios";

const axiosInstance = axios.create({
    baseURL: process.env.REACT_SERVER_IP,
});

axiosInstance.interceptors.request.use((config) => {
    const token = localStorage.getItem("access_token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  });

export default axiosInstance;
import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "http://54.85.180.170:3001",
});

axiosInstance.interceptors.request.use((config) => {
    const token = localStorage.getItem("access_token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  });

export default axiosInstance;
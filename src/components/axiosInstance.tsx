import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "http://api-staging.mtumx.com",
});

axiosInstance.interceptors.request.use((config) => {
    const token = localStorage.getItem("access_token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  });

export default axiosInstance;
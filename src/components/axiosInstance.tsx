import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "http://api-staging.mtumx.com",
});

let authToken: string | null = null; // Provide a type for authToken

// Function to set the authorization header with the token
const setAuthorizationHeader = (token: string | null) => {
  authToken = token;
  axiosInstance.defaults.headers.common["Authorization"] = token ? `Bearer ${token}` : "";
};

axiosInstance.interceptors.request.use((config) => {
  // Set the authorization header if the token is available
  if (authToken) {
    config.headers.Authorization = `Bearer ${authToken}`;
  }
  return config;
});

export { axiosInstance, setAuthorizationHeader };
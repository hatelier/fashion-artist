import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "http://api-staging.mtumx.com",
});

let authToken: string | null = null; // Provide a type for authToken

// Function to set the authorization header with the token
const setAuthorizationHeader = (token: string | null, userId: string | null) => {
  authToken = token;
  axiosInstance.defaults.headers.common["Authorization"] = token ? `Bearer ${token}` : "";

  if (userId) {
    axiosInstance.defaults.headers.common["X-User-Id"] = userId;
  } else {
    delete axiosInstance.defaults.headers.common["X-User-Id"];
  }
};

axiosInstance.interceptors.request.use((config) => {
  // Set the authorization header if the token is available
  if (authToken) {
    config.headers.Authorization = `Bearer ${authToken}`;
  }
  return config;
});

export { axiosInstance, setAuthorizationHeader };
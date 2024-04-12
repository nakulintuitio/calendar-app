import axios from "axios";

const baseURL = "http://localhost:8000/"; // Replace this with your API base URL

const axiosInstance = axios.create({
  baseURL,
  timeout: 10000, // Adjust timeout as needed
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;

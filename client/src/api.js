// import axios from "axios";
// import { toast } from "react-toastify";

// const API = axios.create({
//   baseURL: import.meta.env.VITE_API_BASE_URL || "http://localhost:5000/api",
// });

// // ✅ attach token automatically if present
// API.interceptors.request.use(
//   (config) => {
//     const token = localStorage.getItem("token");
//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
//   },
//   (error) => Promise.reject(error)
// );

// // ✅ handle expired token globally
// API.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     if (error.response?.status === 401) {
//       toast.error("Session expired. Please login again.");
//       localStorage.removeItem("token");
//       localStorage.removeItem("username");
//       window.location.href = "/login"; // redirect
//     }
//     return Promise.reject(error);
//   }
// );

// export default API;


import axios from "axios";
import { toast } from "react-toastify";

// ✅ Create Axios instance with base URL
const API = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || "http://localhost:5000/api",
});

// ✅ Attach token automatically if present
API.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// ✅ Handle expired or invalid token globally
API.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      toast.error("Session expired. Please login again.");
      localStorage.removeItem("token");
      localStorage.removeItem("username");
      localStorage.removeItem("role"); // optional: remove role too
      window.location.href = "/login"; // redirect to login
    }
    return Promise.reject(error);
  }
);

export default API;

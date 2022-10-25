import axios from "axios";

export const BASE_URL = process.env.REACT_APP_BASE_URL;
export const SOCKET_URL = process.env.REACT_APP_SOCKET_URL;

export const API = axios.create({ baseURL: BASE_URL });

API.interceptors.request.use((req) => {
  if (localStorage.getItem("token")) {
    req.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
  }
  return req;
});

// let token = localStorage.token;

// export const HEADER = {
//   "Content-Type": "application/json",
// };

// export const TOKEN_HEADER = {
//   "Content-Type": "application/json",
//   Authorization: `Bearer ${token}`,
// };

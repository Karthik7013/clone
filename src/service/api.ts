import axios from "axios";

const deployURL = 'https://clone-api.onrender.com/api/v1/dashboard'
export const serverLogin = axios.create({
  // baseURL: 'https://blog-post-api-dsam.onrender.com/api/v1',
  baseURL: deployURL,
  // baseURL: 'http://localhost:8000/api/v1/dashboard',
  headers: {
    'Content-Type': 'application/json',
  }
})
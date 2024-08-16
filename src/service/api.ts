import axios from "axios";


export const serverLogin = axios.create({
  // baseURL: 'https://blog-post-api-dsam.onrender.com/api/v1',
  baseURL: 'http://localhost:8000/api/v1/dashboard',
  headers: {
    'Content-Type': 'application/json',
  }
})
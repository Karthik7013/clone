import axios from "axios";


export const serverLogin = axios.create({
  baseURL: 'https://blog-post-api-dsam.onrender.com/api/v1',
  headers: {
    'Content-Type': 'application/json',
  }
})
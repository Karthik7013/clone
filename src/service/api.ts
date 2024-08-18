import axios from "axios";

const deployURL = 'https://clone-api.onrender.com/api/v1/dashboard'
export const serverLogin = axios.create({
  baseURL: deployURL,
  // baseURL: 'http://localhost:8000/api/v1/dashboard',
  headers: {
    'Content-Type': 'application/json',
  }
})



export const customerService = axios.create({
  // baseURL: deployURL,
  baseURL: 'http://localhost:8000/api/v1/dashboard/customer',
  headers: {
    'Content-Type': 'application/json',
  }
})

export const pospService = axios.create({
  // baseURL: deployURL,
  baseURL: 'http://localhost:8000/api/v1/dashboard/posp',
  headers: {
    'Content-Type': 'application/json',
  }
})
import axios from "axios";

const deployURL = 'https://clone-api.onrender.com/api/v1/dashboard';
const localURL = 'http://localhost:8000/api/v1/dashboard'
export const serverLogin = axios.create({
  baseURL: localURL,
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

export const EmployeeService = axios.create({
  // baseURL: deployURL,
  baseURL: 'http://localhost:8000/api/v1/dashboard/employee',
  headers: {
    'Content-Type': 'application/json',
  }
})
import axios from "axios";

// const deployURL = 'https://clone-api.onrender.com/api/v1/dashboard';
// const localURL = 'http://localhost:8000/api/v1/dashboard'
// const deployURL = 'https://clone-api.onrender.com/api/v1/dashboard';
const localURL = 'http://localhost:8000/api/v1/auth/employee/verify';
export const serverLogin = axios.create({
  baseURL: localURL,
  headers: {
    'Content-Type': 'application/json',
  }
})



export const CustomerService = axios.create({
  // baseURL: deployURL,
  baseURL: 'http://localhost:8000/api/v1/auth/employee',
  headers: {
    'Content-Type': 'application/json',
  }
})

export const AgentService = axios.create({
  // baseURL: deployURL,
  baseURL: 'http://localhost:8000/api/v1/auth/agent',
  headers: {
    'Content-Type': 'application/json',
  }
})

export const EmployeeService = axios.create({
  baseURL: 'http://localhost:8000/api/v1/auth/employee',
  headers: {
    'Content-Type': 'application/json',
  }
})




axios.interceptors.response.use(
  response => response,
  async error => {
      const originalRequest = error.config;
      if (error.response.status === 401 && !originalRequest._retry) {
          originalRequest._retry = true;
          try {
              // Attempt to refresh the token
              await axios.post('/refresh-token');
              // Retry the original request after refreshing the token
              return axios(originalRequest);
          } catch (refreshError) {
              // If refresh fails, redirect to login or show an error
              return Promise.reject(refreshError);
          }
      }
      return Promise.reject(error);
  }
);

import axios from "axios";

const deployURL = 'https://clone-api.onrender.com/api/v1';
const localURL = 'http://localhost:8000/api/v1'
// const localURL = 'https://clone-api.onrender.com/api/v1'

export const authService = axios.create({
  baseURL: `${localURL}/auth`,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true
})

export const CustomerResources = axios.create({
  baseURL: `${localURL}/customer`,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true
})

export const AgentResources = axios.create({
  baseURL: `${localURL}/agent`,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true
})

export const EmployeeResources = axios.create({
  baseURL: `${localURL}/employee`,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true
})




// customerResources => response interceptor
CustomerResources.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response && error.response.status === 401) {
      const originalRequest = error.config;
      if (!originalRequest._retry) {
        originalRequest._retry = true;
        try {
          await authService.post('/generate-access-token');
          return CustomerResources(originalRequest);
        } catch (refreshError) {
          console.error('Token refresh failed', refreshError);
        }
      }
    }
    return Promise.reject(error);
  }
);
// agentResources => response interceptor
AgentResources.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response && error.response.status === 401) {
      const originalRequest = error.config;
      if (!originalRequest._retry) {
        originalRequest._retry = true;
        try {
          await authService.post('/generate-access-token');
          return AgentResources(originalRequest);
        } catch (refreshError) {
          console.error('Token refresh failed', refreshError);
        }
      }
    }
    return Promise.reject(error);
  }
);
// employeeResources => response interceptor
EmployeeResources.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response && error.response.status === 401) {
      const originalRequest = error.config;
      if (!originalRequest._retry) {
        originalRequest._retry = true;
        try {
          await authService.post('/generate-access-token');
          return EmployeeResources(originalRequest);
        } catch (refreshError) {
          console.error('Token refresh failed', refreshError);
        }
      }
    }
    return Promise.reject(error);
  }
);


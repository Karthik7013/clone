import axios from "axios";

// const deployURL = 'https://clone-api.onrender.com/api/v1/dashboard';
// const localURL = 'http://localhost:8000/api/v1/dashboard'
// const deployURL = 'https://clone-api.onrender.com/api/v1/dashboard';

export const authService = axios.create({
  baseURL:'http://localhost:8000/api/v1/auth',
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true
})

export const CustomerService = axios.create({
  baseURL: 'http://localhost:8000/api/v1/auth/customer',
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true
})
export const CustomerResources = axios.create({
  // baseURL: deployURL,
  baseURL: 'http://localhost:8000/api/v1/customer',
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true
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




// // Add response interceptor
// api.interceptors.response.use(
//   (response) => response, // Return response if no error
//   async (error) => {
//     // If the error is due to an expired token (401 Unauthorized)
//     if (error.response && error.response.status === 401) {
//       const originalRequest = error.config;

//       // Avoid infinite loops in case of refresh token failure
//       if (!originalRequest._retry) {
//         originalRequest._retry = true;

//         try {
//           // Refresh the access token
//           const newAccessToken = await refreshAccessToken();

//           // Update the original request with the new access token
//           originalRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;

//           // Retry the original request with the new token
//           return api(originalRequest);
//         } catch (refreshError) {
//           // Handle token refresh failure (e.g., logout user, show error message)
//           console.error('Token refresh failed', refreshError);
//           // Optionally, you could redirect the user to the login page
//         }
//       }
//     }

//     // Return the error if we are not handling the 401 case or refresh fails
//     return Promise.reject(error);
//   }
// );
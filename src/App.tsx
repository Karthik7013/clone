import { Auth0Provider } from '@auth0/auth0-react';
import './App.css'
import ThemeProvider from './providers/ThemeProvider'
import { BrowserRouter } from "react-router-dom"
import { Suspense } from "react"
import Loader from './components/Loader/Loader'
import AppRoutes from './routes/AppRoutes'
import ContextProvider from './providers/ContextProvider'


function App() {
  return (
    <ContextProvider>
      <Auth0Provider
        domain="dev-7clw25wzfrrsgust.us.auth0.com"
        clientId="pqzqxXnb7QZ6wFvKAijQ4f4zOVso0mgC"
        authorizationParams={{
          redirect_uri: window.location.origin
        }}
      >
        <ThemeProvider>
          <Suspense fallback={<Loader />}>
            <BrowserRouter future={{
              v7_relativeSplatPath: true,
              v7_startTransition: true, // 👈 Add this line
            }}
            >
              <AppRoutes />
            </BrowserRouter>
          </Suspense>
        </ThemeProvider>
      </Auth0Provider>
    </ContextProvider>
  )
}

export default App











// import { Auth0Provider } from '@auth0/auth0-react';
import './App.css'
import ThemeProvider from './providers/ThemeProvider'
import { BrowserRouter } from "react-router-dom"
import { Suspense } from "react"
import Loader from './components/Loader'
import AppRoutes from './routes/AppRoutes'
import ContextProvider from './providers/ContextProvider'

function App() {
  return (
    <ContextProvider>
      {/* <Auth0Provider
        domain={import.meta.env.VITE_DOMAIN}
        clientId={import.meta.env.VITE_CLIENT_ID}
        authorizationParams={{
          redirect_uri: window.location.origin
        }}
      > */}
        <ThemeProvider>
          <Suspense fallback={<Loader />}>
            <BrowserRouter future={{
              v7_relativeSplatPath: true,
              v7_startTransition: true
            }}
            >
              <AppRoutes />
            </BrowserRouter>
          </Suspense>
        </ThemeProvider>
      {/* </Auth0Provider> */}
    </ContextProvider>
  )
}

export default App;
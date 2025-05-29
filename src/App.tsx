
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
      < ThemeProvider >
        <Suspense fallback={<Loader />}>
          <BrowserRouter future={{
            v7_relativeSplatPath: true,
            v7_startTransition: true, // 👈 Add this line
          }}
          >
            <AppRoutes />
          </BrowserRouter>
        </Suspense>
      </ThemeProvider >
    </ContextProvider>
  )
}

export default App

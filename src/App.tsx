
import './App.css'
import AppLayout from './layouts/AppLayout'
import ThemeProvider from './providers/ThemeProvider'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Suspense } from "react"
import Loader from './components/Loader/Loader'

function App() {
  console.log("app render")
  return (
    <ThemeProvider>
      <Suspense fallback={<Loader />}>
        <BrowserRouter future={{
          v7_relativeSplatPath: true,
          v7_startTransition: true, // 👈 Add this line
        }}
        >
          <Routes>
            <Route path='/' element={<AppLayout />} />
          </Routes>
        </BrowserRouter>
      </Suspense>
    </ThemeProvider>
  )
}

export default App

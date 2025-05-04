
import './App.css'
import AppLayout from './layouts/AppLayout'
import ThemeProvider from './providers/ThemeProvider'
import { BrowserRouter, Routes, Route } from "react-router-dom"
function App() {
  console.log("app render")
  return (
    <ThemeProvider>
      <BrowserRouter
        future={{
          v7_relativeSplatPath: true,
          v7_startTransition: true, // 👈 Add this line
        }}
      >
        <Routes>
          <Route path='/' element={<AppLayout />}></Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App

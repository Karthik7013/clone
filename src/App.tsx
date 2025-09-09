
import './App.css'
import ThemeProvider from './providers/ThemeProvider'
import AppRoutes from './routes/AppRoutes'
import ContextProvider from './providers/ContextProvider'
import AuthProvider from './providers/AuthProvider'

function App() {
  return (
    <ContextProvider>
      <AuthProvider>
        <ThemeProvider>
          <AppRoutes />
        </ThemeProvider>
      </AuthProvider>
    </ContextProvider>
  )
}

export default App;
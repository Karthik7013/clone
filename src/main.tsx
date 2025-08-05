import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

if (import.meta.env.VITE_NODE_ENV === 'PRODUCTION') {
  // console.log('production ENV');
  // console.log = () => { };
  // console.warn = () => { };
  // console.error = () => { };
}
ReactDOM.createRoot(document.getElementById('root')!).render(
  <App />
)
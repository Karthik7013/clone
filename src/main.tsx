import ReactDOM from 'react-dom/client'
//============ CSS IMPORTS ==============>
import "./index.css";
//============ REDUX IMPORTS ==============>
import { Provider } from 'react-redux';
//============ PROJECT IMPORTS ==============>
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root')!)
if (import.meta.env.VITE_NODE_ENV === 'PRODUCTION') {
  console.log = () => { };
  console.warn = () => { };
  console.error = () => { };
}

root.render(
    <App />
)
import { jsx as _jsx } from "react/jsx-runtime";
import ReactDOM from 'react-dom/client';
//============ CSS IMPORTS ==============>
import "./index.css";
//============ PROJECT IMPORTS ==============>
import App from './App';
const root = ReactDOM.createRoot(document.getElementById('root'));
if (import.meta.env.VITE_NODE_ENV === 'PRODUCTION') {
    console.log = () => { };
    console.warn = () => { };
    console.error = () => { };
}
root.render(_jsx(App, {}));

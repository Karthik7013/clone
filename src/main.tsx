import React from 'react';
import ReactDOM from 'react-dom/client'

//============ CSS IMPORTS ==============>
import "./index.css";
//============ REDUX IMPORTS ==============>
import { Provider } from 'react-redux';
import { store } from './redux/store';
//============ PROJECT IMPORTS ==============>
import App from './App';
import ErrorBoundary from './Framework/components/ErrorBoundary';

const root = ReactDOM.createRoot(document.getElementById('root')!)
if (import.meta.env.VITE_NODE_ENV === 'PRODUCTION') {
  // Override console.log to do nothing in production
  console.log = () => { };
  console.warn = () => { };
  console.error = () => { };
}
root.render(
  <ErrorBoundary>
    <Provider store={store}>
      <App />
    </Provider>
  </ErrorBoundary>
)
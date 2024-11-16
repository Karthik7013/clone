import React from 'react';
import ReactDOM from 'react-dom/client'

//============ CSS IMPORTS ==============>
import "./index.css";
//============ REDUX IMPORTS ==============>
import { Provider } from 'react-redux';
import { store } from './redux/store.tsx';
//============ PROJECT IMPORTS ==============>
import App from './App.tsx';
import ErrorBoundary from './Framework/components/ErrorBoundary.tsx';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <ErrorBoundary >
 <Provider store={store}>
      <App />
  </Provider>
  </ErrorBoundary>
)

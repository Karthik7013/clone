import ReactDOM from 'react-dom/client'
//============ CSS IMPORTS ==============>
import "./index.css";
//============ REDUX IMPORTS ==============>
import { Provider } from 'react-redux';
import { store } from './redux/store';
//============ PROJECT IMPORTS ==============>
import App from './App';
import ErrorBoundary, { ErrorComponent } from './Framework/components/ErrorBoundary';

const root = ReactDOM.createRoot(document.getElementById('root')!)
if (import.meta.env.VITE_NODE_ENV === 'PRODUCTION') {
  console.log = () => { };
  console.warn = () => { };
  console.error = () => { };
}

root.render(
  <ErrorBoundary fallback={<ErrorComponent />}>
    <Provider store={store}>
      <App />
    </Provider>
  </ErrorBoundary>
)
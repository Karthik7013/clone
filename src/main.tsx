import ReactDOM from 'react-dom/client'
import "./index.css";
import { Provider } from 'react-redux';
import { store, persistor } from './redux/store.tsx';
import { PersistGate } from 'redux-persist/integration/react';
import App from './App.tsx';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
)

import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";
import sessionStorage from 'redux-persist/lib/storage/session';

// reducers
import uiReducer from "./slice/uiSlice";
import authReducer from "./slice/authSlice";
import loanReducer from "./slice/loanSlice";
import travelReducer from './slice/travelSlice';
import healthReducer from './slice/healthSlice';
import vehicleReducer from "./slice/vehicleSlice";
import dashboardReducer from "./slice/dashboardSlice";
const persistConfig = {
  key: 'root',
  storage: sessionStorage
};

const combinedReducers = combineReducers({
  ui: uiReducer,
  auth: authReducer,
  loan: loanReducer,
  travel: travelReducer,
  vehicle: vehicleReducer,
  health: healthReducer,
  dashboard: dashboardReducer
});

const persistedReducer = persistReducer(persistConfig, combinedReducers);
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    })
})
export const persistor = persistStore(store);
import { combineReducers, configureStore } from "@reduxjs/toolkit";

// reducers
import uiReducer from "./slice/uiSlice";
import authReducer from "./slice/authSlice";
import loanReducer from "./slice/loanSlice";
import travelReducer from './slice/travelSlice';
import healthReducer from './slice/healthSlice';
import vehicleReducer from "./slice/vehicleSlice";
import dashboardReducer from "./slice/dashboardSlice";
import botReducer from "./slice/botSlice"


const combinedReducers = combineReducers({
  ui: uiReducer,
  auth: authReducer,
  loan: loanReducer,
  travel: travelReducer,
  vehicle: vehicleReducer,
  health: healthReducer,
  dashboard: dashboardReducer,
  bot:botReducer,
});


export const store = configureStore({
  reducer: combinedReducers
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
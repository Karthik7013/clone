import { createSlice } from "@reduxjs/toolkit";
import { dashboardProps } from "../../types/DashboardProps/dashboardProps";

const initialState: dashboardProps = {
  
  

}

const dashboardSlice = createSlice({
    name: 'dashboard',
    initialState,
    reducers: {

    }
})
export const { } = dashboardSlice.actions;
export default dashboardSlice.reducer
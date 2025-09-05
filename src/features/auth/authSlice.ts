import { createSlice } from "@reduxjs/toolkit";

type initialProps = {

}

const initialState: initialProps = {

}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
    }
})

export const { } = authSlice.actions;
export default authSlice.reducer;
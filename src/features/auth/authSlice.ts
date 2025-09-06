import { createSlice } from "@reduxjs/toolkit";
import { user } from "../../types/app-types";

type initialProps = {
    isLogin: boolean,
    user: null | user,

}

const initialState: initialProps = {
    isLogin: false,
    user: null
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {

    }
})

export const { } = authSlice.actions;
export default authSlice.reducer;
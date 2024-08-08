import { createSlice } from "@reduxjs/toolkit";
import { uiProps } from "../../types/UiProps/uiProps";


const getPreference = () => localStorage.getItem('dark') || 'light'

const initialState: uiProps = {
    dark: getPreference() === 'dark' ? true : false,
    borderRadius: 32,
    fontFamily: 'Poppins'
}

const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        toggleTheme: (state) => {
            state.dark = !state.dark
            localStorage.setItem('dark', state.dark ? 'dark' : 'light')
        },
        changeBorderRadius: (state, action) => {
            state.borderRadius = action.payload
        },
        changeFontFamily: (state, action) => {
            state.fontFamily = action.payload;
        }
    }
})

export const { toggleTheme, changeBorderRadius,changeFontFamily } = uiSlice.actions
export default uiSlice.reducer
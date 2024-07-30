import { createSlice } from "@reduxjs/toolkit";
import { uiProps } from "../../types/UiProps/uiProps";


const getPreference = () => localStorage.getItem('dark') || 'light'

const initialState: uiProps = {
    dark: getPreference() === 'dark' ? true : false
}

const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        toggleTheme: (state) => {
            state.dark = !state.dark
            localStorage.setItem('dark', state.dark ? 'dark' : 'light')
        }
    }
})

export const { toggleTheme } = uiSlice.actions
export default uiSlice.reducer
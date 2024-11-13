import { createSlice } from "@reduxjs/toolkit";
import { uiProps } from "../../types/UiProps/uiProps";


const getPreference = () => localStorage.getItem('dark') || 'light'

const initialState: uiProps = {
    dark: getPreference() === 'dark' ? true : false,
    borderRadius: 8,
    fontFamily: 'Poppins',
    customizePalleteOpen: false,
    cookieConsent: false,
    customerEditProfile:false
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
        },
        handleCookieConsent: (state, action) => {
            state.cookieConsent = action.payload
        },
        handlePallete: (state) => {
            state.customizePalleteOpen = !state.customizePalleteOpen
        },
        handleEditProfile :(state)=>{
            state.customerEditProfile = !state.customerEditProfile
        }
    }
})

export const { handleEditProfile,toggleTheme, changeBorderRadius, changeFontFamily, handleCookieConsent, handlePallete } = uiSlice.actions
export default uiSlice.reducer
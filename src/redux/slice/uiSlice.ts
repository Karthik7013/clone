import { createSlice } from "@reduxjs/toolkit";
import { uiProps } from "../../types/UiProps/uiProps";


const getPreference = () => localStorage.getItem('dark') || 'light'

const initialState: uiProps = {
    dark: getPreference() === 'dark' ? true : false,
    borderRadius: 8,
    fontFamily: 'Poppins',
    customizePalleteOpen: false,
    cookieConsent: false,
    customerEditProfile: false,
    counter: 0,
    isMobile: false
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
        handleEditProfile: (state) => {
            state.customerEditProfile = !state.customerEditProfile
        },
        increaseCounter: (state) => {
            state.counter = state.counter + 1
        },
        handleIsMobile: (state) => {
            state.isMobile = !state.isMobile
        }
    }
})

export const { increaseCounter, handleEditProfile, toggleTheme, changeBorderRadius, changeFontFamily, handleCookieConsent, handlePallete, handleIsMobile } = uiSlice.actions
export default uiSlice.reducer
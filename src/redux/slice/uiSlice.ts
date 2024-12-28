import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { uiProps } from "../../types/UiProps/uiProps";


const getPreference = () => localStorage.getItem('dark') || 'light'

const initialState: uiProps = {
    dark: getPreference() === 'dark' ? true : false,
    borderRadius: 24,
    fontFamily: 'Poppins',
    customizePalleteOpen: false,
    cookieConsent: false,
    customerEditProfile: false,
    isMobile: false,
    isDesktop: true,
    productsCompare: [0],
    otpModal: false,
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
        handleIsDesktop: (state) => {
            state.isDesktop = !state.isDesktop
        },
        handleIsMobile: (state) => {
            state.isMobile = !state.isMobile
        },
        handleOtpModal: (state, action: PayloadAction<boolean>) => {
            state.otpModal = action.payload
        },
        handleAddtoCompare: (state, action) => {
            const id = state.productsCompare.findIndex((product_id) => product_id === action.payload);
            if (id !== -1) {
                state.productsCompare.push(action.payload)
            } else {
                state.productsCompare = state.productsCompare.filter((product_id) => product_id !== action.payload)
            }
        },
        handleEmptyCompare: (state) => {
            state.productsCompare = []
        }
    }
})

export const { handleIsDesktop, handleEditProfile, toggleTheme, changeBorderRadius, changeFontFamily, handleCookieConsent, handlePallete, handleIsMobile,
    handleOtpModal, handleAddtoCompare, handleEmptyCompare } = uiSlice.actions
export default uiSlice.reducer
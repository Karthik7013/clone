import { createSlice } from "@reduxjs/toolkit";

const mode = localStorage.getItem('mode');

type initialProps = {
    borderRadius: number,
    fontFamily: string,
    variant: string,
    primaryColor: string,
    mode: 'dark' | 'light' | 'system',
    preview: boolean
}

const initialState: initialProps = {
    fontFamily: 'Poppins, sans-serif',
    borderRadius: 6,
    mode: (mode === 'dark' || mode === 'light' || mode === 'system') ? mode : 'system',
    variant: 'middle',
    primaryColor: '#23a8fa',
    preview: false
}

const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        toggleMode: (state, action: { payload: 'light' | 'dark' | 'system', type: string }) => {
            const { payload } = action
            state.mode = payload;
            localStorage.setItem('mode', payload);
        },
        togglePreview: (state, action: { payload: boolean, type: string }) => {
            const { payload } = action
            state.preview = payload;
        }
    }
})

export const { toggleMode, togglePreview } = themeSlice.actions;
export default themeSlice.reducer;
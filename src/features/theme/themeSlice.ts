import { createSlice } from "@reduxjs/toolkit";

const mode = localStorage.getItem('mode');

type initialProps = {
    borderRadius: number,
    fontFamily: string,
    variant: string,
    primaryColor: string,
    mode: 'dark' | 'light' | 'system'
}

const initialState: initialProps = {
    fontFamily: 'Montserrat, sans-serif',
    borderRadius: 4,
    mode: (mode === 'dark' || mode === 'light' || mode === 'system') ? mode : 'system',
    variant: 'middle',
    primaryColor: '#23a8fa'
}

const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        toggleMode: (state, action: { payload: 'light' | 'dark' | 'system', type: string }) => {
            const { payload } = action
            state.mode = payload;
            localStorage.setItem('mode', payload);
        }
    }
})

export const { toggleMode } = themeSlice.actions;
export default themeSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";



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
    mode: 'dark',
    variant: 'middle',
    primaryColor: '#23a8fa'
}

const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        toggleMode: (state, action: { payload: 'light' | 'dark' | 'system', type: string }) => {
            const { payload } = action
            state.mode = payload
        }
    }
})

export const { toggleMode } = themeSlice.actions;
export default themeSlice.reducer;
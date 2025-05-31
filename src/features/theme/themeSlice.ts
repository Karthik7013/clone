import { createSlice } from "@reduxjs/toolkit";



type initialProps = {
    borderRadius: number,
    fontFamily: string,
    variant: string,
    primaryColor: string,
    mode: 'dark' | 'light' | 'system'
}

const initialState: initialProps = {
    fontFamily: 'Poppins',
    borderRadius: 4,
    mode: 'light',
    variant: 'middle',
    primaryColor: '#23a8fa'
}

const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {

    }
})

// export const { } = themeSlice.actions;
export default themeSlice.reducer;
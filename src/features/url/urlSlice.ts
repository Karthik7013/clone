import { createSlice } from "@reduxjs/toolkit";


type initialProps = {
    mode: 'temporary' | undefined
}

const initialState: initialProps = {
    mode: undefined
}

const urlSlice = createSlice({
    name: 'url',
    initialState,
    reducers: {
        temporaryMode: (state, action: { payload: 'temporary' | undefined, type: string }) => {
            const { payload } = action
            state.mode = payload;
        }
    }
})

export const { temporaryMode } = urlSlice.actions;
export default urlSlice.reducer;
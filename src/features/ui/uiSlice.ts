import { createSlice } from "@reduxjs/toolkit";



type initialProps = {
    mobileDrawer: boolean,
    previewMode: boolean,
    previewContent: string | undefined
    collapse: boolean,
    search: boolean
}

const initialState: initialProps = {
    collapse: true,
    mobileDrawer: false,
    previewMode: false,
    previewContent: undefined,
    search: false
}

const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        toggleMobileDrawer: (state, action: { payload: boolean }) => {
            const { payload } = action;
            state.mobileDrawer = payload
        },
        togglePreviewMode: (state, action: { payload: boolean }) => {
            const { payload } = action;
            state.previewMode = payload
        },
        toggleCollapse: (state, action: { payload: boolean }) => {
            const { payload } = action;
            state.collapse = payload
        },
        setPreviewContent: (state, action: { payload: string | undefined }) => {
            const { payload } = action;
            state.previewContent = payload;
        },
        toggleSearch: (state, action: { payload: boolean }) => {
            const { payload } = action;
            state.search = payload
        }
    }
})

export const { toggleMobileDrawer, toggleCollapse, togglePreviewMode, setPreviewContent, toggleSearch } = uiSlice.actions;
export default uiSlice.reducer;
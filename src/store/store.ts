import { configureStore } from '@reduxjs/toolkit'
import { chatbotApi } from '../features/chatbot/chatbotApi'
import chartbotReducer from '../features/chatbot/chatbotSlice';
import { uploadApi } from '../features/upload/uploadApi';
import themeReducer from "../features/theme/themeSlice";

export const store = configureStore({
    reducer: {
        chatbotReducer: chartbotReducer,
        themeReducer: themeReducer,
        [chatbotApi.reducerPath]: chatbotApi.reducer,
        [uploadApi.reducerPath]: uploadApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .concat(chatbotApi.middleware)
            .concat(uploadApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
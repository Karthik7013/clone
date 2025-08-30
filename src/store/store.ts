import { configureStore } from '@reduxjs/toolkit'
// import { chatbotApi } from '../features/chatbot/chatbotApi'
import chartbotReducer from '../features/chatbot/chatbotSlice';
import { uploadApi } from '../features/upload/uploadApi';
import themeReducer from "../features/theme/themeSlice";
import urlReducer from "../features/url/urlSlice";
import chatReducer from '../features/chatbot/chatbotSlice'

export const store = configureStore({
    reducer: {
        chatbotReducer: chartbotReducer,
        themeReducer: themeReducer,
        urlReducer: urlReducer,
        chat: chatReducer,
        // [chatbotApi.reducerPath]: chatbotApi.reducer,
        [uploadApi.reducerPath]: uploadApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .concat(uploadApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
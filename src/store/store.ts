import { configureStore } from '@reduxjs/toolkit'
import { chatbotApi } from '../features/chatbot/chatbotApi'
import chartbotReducer from '../features/chatbot/chatbotSlice';
import themeReducer from "../features/theme/themeSlice";

export const store = configureStore({
    reducer: {
        chatbotReducer: chartbotReducer,
        themeReducer: themeReducer,
        [chatbotApi.reducerPath]: chatbotApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .concat(chatbotApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
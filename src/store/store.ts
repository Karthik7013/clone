import { configureStore } from '@reduxjs/toolkit'
import { chatbotApi } from '../features/chatbot/chatbotApi'
import chartbotReducer from '../features/chatbot/chatbotSlice';
export const store = configureStore({
    reducer: {
        chatbotReducer: chartbotReducer,
        [chatbotApi.reducerPath]: chatbotApi.reducer,
    },
    // Adding the api middleware enables caching, invalidation, polling,
    // and other useful features of `rtk-query`.
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .concat(chatbotApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
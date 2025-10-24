import { configureStore } from '@reduxjs/toolkit'
import chatbotReducer from '../features/chatbot/chatbotSlice';
import { uploadApi } from '../features/upload/uploadApi';
import themeReducer from "../features/theme/themeSlice";
import urlReducer from "../features/url/urlSlice";
import uiReducer from '../features/ui/uiSlice';
import authReducer from '../features/auth/authSlice';
import { getChatListApi } from '../features/chatbot/chatbotApi';

export const store = configureStore({
    reducer: {
        themeReducer: themeReducer,
        urlReducer: urlReducer,
        chat: chatbotReducer,
        ui: uiReducer,
        auth: authReducer,
        [uploadApi.reducerPath]: uploadApi.reducer,
        [getChatListApi.reducerPath]: getChatListApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .concat(uploadApi.middleware)
            .concat(getChatListApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
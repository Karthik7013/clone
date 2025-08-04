import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
const BASE_URL = import.meta.env.VITE_BASE_URL;

// Define a service using a base URL and expected endpoints
export const chatbotApi = createApi({
    reducerPath: 'chatbotApi',
    baseQuery: fetchBaseQuery({ baseUrl: BASE_URL + '/bot' }),
    endpoints: (builder) => ({
        sendMessage: builder.mutation({
            query: (message) => ({
                url: '/ask',
                method: 'POST',
                body: message,
            })
        }),
    }),
})

export const { useSendMessageMutation } = chatbotApi
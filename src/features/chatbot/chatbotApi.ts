import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const chatbotApi = createApi({
    reducerPath: 'chatbotApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://namelixinsurance.koyeb.app/api/v1/bot' }),
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
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const uploadApi = createApi({
    reducerPath: 'uploadApi',
    baseQuery: fetchBaseQuery(
        { baseUrl: 'https://namelixinsurance.koyeb.app/api/v1/upload' }),
    endpoints: (builder) => ({
        uploadFile: builder.mutation({
            query: (message) => ({
                url: '/',
                method: 'POST',
                body: message,
            })
        }),
    }),
})

export const { useUploadFileMutation } = uploadApi
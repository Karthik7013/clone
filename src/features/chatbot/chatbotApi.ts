// import { createAsyncThunk } from '@reduxjs/toolkit';
// import { addMessage, startStreaming, streamChunk, streamComplete, streamError } from './chatbotSlice';
// import { BotSubmitType } from '../../layouts/AppLayout';

// export const sendMessageStream = createAsyncThunk(
//     'chat/sendMessageStream',
//     async ({ t, file }: BotSubmitType, { dispatch }) => {
//         dispatch(addMessage({ type: 'user', message: t }));
//         dispatch(startStreaming());

//         const BASE_URL = import.meta.env.VITE_BASE_URL;

//         try {
//             const response = await fetch(`${BASE_URL}/bot/ask`, {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify({ t, file }),
//             });

//             if (!response.ok) {
//                 throw new Error(`HTTP ${response.status}: ${response.statusText}`);
//             }

//             const body = response.body;
//             if (!body) {
//                 throw new Error('Response body is empty');
//             }

//             const reader = body.getReader();
//             const decoder = new TextDecoder('utf-8');

//             for (; ;) {
//                 const { done, value } = await reader.read();
//                 if (done) {
//                     break;
//                 }
//                 // ✅ Decode the chunk
//                 const chunk = decoder.decode(value, { stream: true });
//                 // ✅ Dispatch partial bot response
//                 dispatch(streamChunk(chunk));
//             }

//             // ✅ Streaming finished
//             dispatch(streamComplete());
//         } catch (err: unknown) {
//             const message = err instanceof Error ? err.message : 'An unknown error occurred';
//             dispatch(streamError(message));
//             throw err; // maintain rejected promise for `unwrap` etc.
//         }
//     }
// );


import { createAsyncThunk } from '@reduxjs/toolkit';
import {
    addMessage,
    startStreaming,
    streamChunk,
    streamComplete,
    streamError,
} from './chatbotSlice';
import { BotSubmitType } from '../../layouts/AppLayout';

export const sendMessageStream = createAsyncThunk(
    'chat/sendMessageStream',
    async ({ t }: BotSubmitType, { dispatch }) => {
        // Save user message first
        dispatch(addMessage({ type: 'user', message: t }));
        dispatch(startStreaming());

        const BASE_URL = import.meta.env.VITE_BASE_URL;

        return new Promise<void>((resolve, reject) => {
            try {
                // Create SSE connection
                const es = new EventSource(`${BASE_URL}/event?query=${t}`);

                es.onmessage = (event) => {
                    console.log(JSON.parse(event.data))
                    const data = JSON.parse(event.data);
                    if (data.type === 'chunk') {
                        dispatch(streamChunk(data.content));
                    }
                };

                es.addEventListener('end', () => {
                    // ✅ custom "end" event from backend
                    es.close();
                    dispatch(streamComplete());
                    resolve();
                });

                es.onerror = (err) => {
                    // Network error or server closed badly
                    console.error('SSE error', err);
                    es.close();
                    dispatch(streamError('Stream connection error'));
                    reject(err);
                };
            } catch (err) {
                const message =
                    err instanceof Error ? err.message : 'Unknown error occurred';
                dispatch(streamError(message));
                reject(err);
            }
        });
    }
);
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
    async ({ t, file }: BotSubmitType, { dispatch }) => {
        // Save user message first
        dispatch(addMessage({ type: 'user', message: t }));
        dispatch(startStreaming());

        const BASE_URL = import.meta.env.VITE_BASE_URL;

        return new Promise<void>((resolve, reject) => {
            try {
                // Create SSE connection
                let url = `${BASE_URL}/event?query=${encodeURIComponent(t)}`;

                if (file?.url) {
                    url += `&fileUrl=${encodeURIComponent(file.url)}`;
                }

                const es = new EventSource(url);


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
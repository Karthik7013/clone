import { createAsyncThunk } from '@reduxjs/toolkit';
import {
    addMessage,
    newChat,
    setError,
    setLoading,
    streamChunk,
    streamComplete,
    streamError,
    streamStart,
} from './chatbotSlice';
import { FormSubmit } from '../../types/app-types';
import axios from 'axios';

export const streamChat = createAsyncThunk(
    'chat/stream',
    async (id: string, { dispatch }) => {
        console.log("zzzzzzzzzzzzzzz")
        const BASE_URL = import.meta.env.VITE_BASE_URL;
        return new Promise<void>((resolve, reject) => {
            try {
                const url = `${BASE_URL}/stream/${id}`;
                const es = new EventSource(url);

                es.addEventListener('response-start', () => {
                    dispatch(streamStart());
                })
                es.addEventListener('response-data', (event) => {
                    const data = JSON.parse(event.data);
                    if (data.type === 'chunk') {
                        console.log(data.content)
                        dispatch(streamChunk(data.content));
                    }
                })

                es.addEventListener('response-end', () => {
                    dispatch(streamComplete());
                })

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
                resolve()
            } catch (err) {
                reject(err);
            }
        });
    }
);

export const createChat = createAsyncThunk(
    'new-chat',
    async (data: FormSubmit, { dispatch }) => {
        const BASE_URL = import.meta.env.VITE_BASE_URL;
        return new Promise<void>((resolve, reject) => {
            try {
                dispatch(setLoading(true));
                const url = `${BASE_URL}/chat`;
                axios.post(url, {
                    query: data,
                    timestamp: new Date().toISOString(),
                }, {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                })
                    .then(response => {
                        const responseData = response.data.data;
                        dispatch(newChat({
                            title: responseData.title,
                            id: responseData.cid
                        }))
                        dispatch(addMessage({ type: 'user', message: data.query }));
                        dispatch(streamChat(responseData.cid))
                        resolve();
                    })
                    .catch(error => {
                        dispatch(setError(error));
                        reject(error);
                    }).finally(() => {
                        dispatch(setLoading(false));
                    })

            } catch (err) {
                const message =
                    err instanceof Error ? err.message : 'Unknown error occurred';
                console.log(message)
                reject(err);
            }
        });
    }
);
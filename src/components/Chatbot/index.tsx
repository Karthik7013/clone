import React, { useEffect } from 'react';
import chat_bot from "../../assets/images/gemini_ai_.svg";
import { Alert, Avatar, Box, Button, Card, CardActions, CardContent, CircularProgress, Collapse, Divider, FormControl, IconButton, keyframes, List, ListItem, ListItemIcon, ListItemText, Menu, MenuItem, Paper, Select, Skeleton, Stack, TextField, Typography } from '@mui/material';
import { AppDispatch, RootState } from '../../store/store';
import { useDispatch, useSelector } from 'react-redux';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import AutoAwesomeRoundedIcon from '@mui/icons-material/AutoAwesomeRounded';
import StopCircleRoundedIcon from '@mui/icons-material/StopCircleRounded';
import CircleIcon from '@mui/icons-material/Circle';
import { useSendMessageMutation } from '../../features/chatbot/chatbotApi';
import { pushMessage } from '../../features/chatbot/chatbotSlice';
import MicRoundedIcon from '@mui/icons-material/MicRounded';
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import InsertDriveFileRoundedIcon from '@mui/icons-material/InsertDriveFileRounded';

import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import rehypeHighlight from 'rehype-highlight';
// import ArrowDownwardRoundedIcon from '@mui/icons-material/ArrowDownwardRounded';
import Markdown from 'react-markdown';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { SerializedError } from '@reduxjs/toolkit';
import AnimatedWrapper from '../AnimatedWrapper/AnimatedWrapper';
import Title from '../Title/Title';
import 'highlight.js/styles/github.css'; // theme
type conversationProps = {
    candidate: 'user' | 'bot',
    response: string,
    timeStamp: string
}
interface BotSubmitType {
    t: string,
    model: string
}

function isFetchBaseQueryError(
    error: unknown
): error is FetchBaseQueryError {
    return (
        typeof error === 'object' &&
        error !== null &&
        'status' in error &&
        'data' in error
    );
}

const Chatbot = () => {
    const [errorVisible, setErrorVisible] = React.useState<undefined | FetchBaseQueryError | SerializedError | undefined>(undefined);
    const borderRadius = useSelector((state: RootState) => state.themeReducer.borderRadius)
    const dispatch: AppDispatch = useDispatch()
    const { handleSubmit, control, reset } = useForm<BotSubmitType>({
        defaultValues: {
            t: '',
            model: 'models/gemini-2.5-flash'
        }
    })
    const conversation = useSelector((state: RootState) => state.chatbotReducer.conversation);
    const [handleSendMessage, { isLoading, error }] = useSendMessageMutation();

    const onHandleSubmit: SubmitHandler<BotSubmitType> = async (data) => {
        dispatch(pushMessage({
            canditate: 'user',
            t: data.t
        }));
        reset();
        try {
            const result = await handleSendMessage(data).unwrap();
            dispatch(pushMessage({
                canditate: 'bot',
                t: result.data.response,
                timeStamp: result.data.timeStamp
            }));
        } catch (err) {
            console.log(err)
        }
    };


    useEffect(() => {
        setErrorVisible(error);
    }, [error]);
    const Conversation = ({ candidate, response }: conversationProps) => {
        return (
            <ListItem sx={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'flex-end' }}>
                {!(candidate === 'user') &&
                    <Box sx={{
                        borderRadius: '10px', overflow: 'auto',
                        //  maxWidth: '320px',
                        width: '100%',
                        padding: '0 10px'
                    }}>
                        <CardContent>
                            <Avatar sx={{ width: '26px', height: '26px' }} src={chat_bot} alt="Remy Sharp" />
                            <Markdown
                                remarkPlugins={[remarkGfm]}
                                rehypePlugins={[rehypeRaw, rehypeHighlight]}
                            >{response}</Markdown>
                        </CardContent>
                    </Box>}
                {(candidate === 'user') &&
                    <Paper sx={{ p: 1.5, borderRadius, borderTopRightRadius: 0, maxWidth: '320px' }}>
                        <Typography variant='body2'>{response}</Typography>
                    </Paper>
                }
            </ListItem>
        )
    }

    const ChatLoader = () => <ListItem>
        <Card sx={{ padding: '10px', borderRadius: '10px', overflowY: 'auto', width: '100%' }}>
            <Box sx={{ display: 'inline-flex', position: 'relative', justifyContent: 'center', alignItems: 'center' }}>
                <CircularProgress variant='indeterminate' />
                {<Avatar sx={{ width: '26px', height: '26px', position: 'absolute' }} src={chat_bot} alt="Remy Sharp" />}
            </Box>
            <Box position='relative' mb={1}>
                <Stack>
                    <Skeleton animation="wave" width={'25%'} />
                    <Skeleton animation="wave" width={'50%'} />
                    <Skeleton animation="wave" width={'70%'} />
                </Stack>
            </Box>
        </Card>
    </ListItem>

    const handleClose = () => {
        setErrorVisible(undefined);
    }

    const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  40% {
    transform: rotate(180deg);
  }
  60% {
    transform: rotate(200deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;
    const models = [
        {
            "name": "models/embedding-gecko-001",
            "version": "001",
            "displayName": "Embedding Gecko",
            "description": "Obtain a distributed representation of a text.",
            "inputTokenLimit": 1024,
            "outputTokenLimit": 1,
            "supportedGenerationMethods": [
                "embedText",
                "countTextTokens"
            ]
        },
        {
            "name": "models/gemini-1.0-pro-vision-latest",
            "version": "001",
            "displayName": "Gemini 1.0 Pro Vision",
            "description": "The original Gemini 1.0 Pro Vision model version which was optimized for image understanding. Gemini 1.0 Pro Vision was deprecated on July 12, 2024. Move to a newer Gemini version.",
            "inputTokenLimit": 12288,
            "outputTokenLimit": 4096,
            "supportedGenerationMethods": [
                "generateContent",
                "countTokens"
            ],
            "temperature": 0.4,
            "topP": 1,
            "topK": 32
        },
        {
            "name": "models/gemini-pro-vision",
            "version": "001",
            "displayName": "Gemini 1.0 Pro Vision",
            "description": "The original Gemini 1.0 Pro Vision model version which was optimized for image understanding. Gemini 1.0 Pro Vision was deprecated on July 12, 2024. Move to a newer Gemini version.",
            "inputTokenLimit": 12288,
            "outputTokenLimit": 4096,
            "supportedGenerationMethods": [
                "generateContent",
                "countTokens"
            ],
            "temperature": 0.4,
            "topP": 1,
            "topK": 32
        },
        {
            "name": "models/gemini-1.5-pro-latest",
            "version": "001",
            "displayName": "Gemini 1.5 Pro Latest",
            "description": "Alias that points to the most recent production (non-experimental) release of Gemini 1.5 Pro, our mid-size multimodal model that supports up to 2 million tokens.",
            "inputTokenLimit": 2000000,
            "outputTokenLimit": 8192,
            "supportedGenerationMethods": [
                "generateContent",
                "countTokens"
            ],
            "temperature": 1,
            "topP": 0.95,
            "topK": 40,
            "maxTemperature": 2
        },
        {
            "name": "models/gemini-1.5-pro-002",
            "version": "002",
            "displayName": "Gemini 1.5 Pro 002",
            "description": "Stable version of Gemini 1.5 Pro, our mid-size multimodal model that supports up to 2 million tokens, released in September of 2024.",
            "inputTokenLimit": 2000000,
            "outputTokenLimit": 8192,
            "supportedGenerationMethods": [
                "generateContent",
                "countTokens",
                "createCachedContent"
            ],
            "temperature": 1,
            "topP": 0.95,
            "topK": 40,
            "maxTemperature": 2
        },
        {
            "name": "models/gemini-1.5-pro",
            "version": "001",
            "displayName": "Gemini 1.5 Pro",
            "description": "Stable version of Gemini 1.5 Pro, our mid-size multimodal model that supports up to 2 million tokens, released in May of 2024.",
            "inputTokenLimit": 2000000,
            "outputTokenLimit": 8192,
            "supportedGenerationMethods": [
                "generateContent",
                "countTokens"
            ],
            "temperature": 1,
            "topP": 0.95,
            "topK": 40,
            "maxTemperature": 2
        },
        {
            "name": "models/gemini-1.5-flash-latest",
            "version": "001",
            "displayName": "Gemini 1.5 Flash Latest",
            "description": "Alias that points to the most recent production (non-experimental) release of Gemini 1.5 Flash, our fast and versatile multimodal model for scaling across diverse tasks.",
            "inputTokenLimit": 1000000,
            "outputTokenLimit": 8192,
            "supportedGenerationMethods": [
                "generateContent",
                "countTokens"
            ],
            "temperature": 1,
            "topP": 0.95,
            "topK": 40,
            "maxTemperature": 2
        },
        {
            "name": "models/gemini-1.5-flash",
            "version": "001",
            "displayName": "Gemini 1.5 Flash",
            "description": "Alias that points to the most recent stable version of Gemini 1.5 Flash, our fast and versatile multimodal model for scaling across diverse tasks.",
            "inputTokenLimit": 1000000,
            "outputTokenLimit": 8192,
            "supportedGenerationMethods": [
                "generateContent",
                "countTokens"
            ],
            "temperature": 1,
            "topP": 0.95,
            "topK": 40,
            "maxTemperature": 2
        },
        {
            "name": "models/gemini-1.5-flash-002",
            "version": "002",
            "displayName": "Gemini 1.5 Flash 002",
            "description": "Stable version of Gemini 1.5 Flash, our fast and versatile multimodal model for scaling across diverse tasks, released in September of 2024.",
            "inputTokenLimit": 1000000,
            "outputTokenLimit": 8192,
            "supportedGenerationMethods": [
                "generateContent",
                "countTokens",
                "createCachedContent"
            ],
            "temperature": 1,
            "topP": 0.95,
            "topK": 40,
            "maxTemperature": 2
        },
        {
            "name": "models/gemini-1.5-flash-8b",
            "version": "001",
            "displayName": "Gemini 1.5 Flash-8B",
            "description": "Stable version of Gemini 1.5 Flash-8B, our smallest and most cost effective Flash model, released in October of 2024.",
            "inputTokenLimit": 1000000,
            "outputTokenLimit": 8192,
            "supportedGenerationMethods": [
                "createCachedContent",
                "generateContent",
                "countTokens"
            ],
            "temperature": 1,
            "topP": 0.95,
            "topK": 40,
            "maxTemperature": 2
        },
        {
            "name": "models/gemini-1.5-flash-8b-001",
            "version": "001",
            "displayName": "Gemini 1.5 Flash-8B 001",
            "description": "Stable version of Gemini 1.5 Flash-8B, our smallest and most cost effective Flash model, released in October of 2024.",
            "inputTokenLimit": 1000000,
            "outputTokenLimit": 8192,
            "supportedGenerationMethods": [
                "createCachedContent",
                "generateContent",
                "countTokens"
            ],
            "temperature": 1,
            "topP": 0.95,
            "topK": 40,
            "maxTemperature": 2
        },
        {
            "name": "models/gemini-1.5-flash-8b-latest",
            "version": "001",
            "displayName": "Gemini 1.5 Flash-8B Latest",
            "description": "Alias that points to the most recent production (non-experimental) release of Gemini 1.5 Flash-8B, our smallest and most cost effective Flash model, released in October of 2024.",
            "inputTokenLimit": 1000000,
            "outputTokenLimit": 8192,
            "supportedGenerationMethods": [
                "createCachedContent",
                "generateContent",
                "countTokens"
            ],
            "temperature": 1,
            "topP": 0.95,
            "topK": 40,
            "maxTemperature": 2
        },
        {
            "name": "models/gemini-2.5-pro-preview-03-25",
            "version": "2.5-preview-03-25",
            "displayName": "Gemini 2.5 Pro Preview 03-25",
            "description": "Gemini 2.5 Pro Preview 03-25",
            "inputTokenLimit": 1048576,
            "outputTokenLimit": 65536,
            "supportedGenerationMethods": [
                "generateContent",
                "countTokens",
                "createCachedContent",
                "batchGenerateContent"
            ],
            "temperature": 1,
            "topP": 0.95,
            "topK": 64,
            "maxTemperature": 2,
            "thinking": true
        },
        {
            "name": "models/gemini-2.5-flash-preview-05-20",
            "version": "2.5-preview-05-20",
            "displayName": "Gemini 2.5 Flash Preview 05-20",
            "description": "Preview release (April 17th, 2025) of Gemini 2.5 Flash",
            "inputTokenLimit": 1048576,
            "outputTokenLimit": 65536,
            "supportedGenerationMethods": [
                "generateContent",
                "countTokens",
                "createCachedContent",
                "batchGenerateContent"
            ],
            "temperature": 1,
            "topP": 0.95,
            "topK": 64,
            "maxTemperature": 2,
            "thinking": true
        },
        {
            "name": "models/gemini-2.5-flash",
            "version": "001",
            "displayName": "Gemini 2.5 Flash",
            "description": "Stable version of Gemini 2.5 Flash, our mid-size multimodal model that supports up to 1 million tokens, released in June of 2025.",
            "inputTokenLimit": 1048576,
            "outputTokenLimit": 65536,
            "supportedGenerationMethods": [
                "generateContent",
                "countTokens",
                "createCachedContent",
                "batchGenerateContent"
            ],
            "temperature": 1,
            "topP": 0.95,
            "topK": 64,
            "maxTemperature": 2,
            "thinking": true
        },
        {
            "name": "models/gemini-2.5-flash-lite-preview-06-17",
            "version": "2.5-preview-06-17",
            "displayName": "Gemini 2.5 Flash-Lite Preview 06-17",
            "description": "Preview release (June 11th, 2025) of Gemini 2.5 Flash-Lite",
            "inputTokenLimit": 1048576,
            "outputTokenLimit": 65536,
            "supportedGenerationMethods": [
                "generateContent",
                "countTokens",
                "createCachedContent",
                "batchGenerateContent"
            ],
            "temperature": 1,
            "topP": 0.95,
            "topK": 64,
            "maxTemperature": 2,
            "thinking": true
        },
        {
            "name": "models/gemini-2.5-pro-preview-05-06",
            "version": "2.5-preview-05-06",
            "displayName": "Gemini 2.5 Pro Preview 05-06",
            "description": "Preview release (May 6th, 2025) of Gemini 2.5 Pro",
            "inputTokenLimit": 1048576,
            "outputTokenLimit": 65536,
            "supportedGenerationMethods": [
                "generateContent",
                "countTokens",
                "createCachedContent",
                "batchGenerateContent"
            ],
            "temperature": 1,
            "topP": 0.95,
            "topK": 64,
            "maxTemperature": 2,
            "thinking": true
        },
        {
            "name": "models/gemini-2.5-pro-preview-06-05",
            "version": "2.5-preview-06-05",
            "displayName": "Gemini 2.5 Pro Preview",
            "description": "Preview release (June 5th, 2025) of Gemini 2.5 Pro",
            "inputTokenLimit": 1048576,
            "outputTokenLimit": 65536,
            "supportedGenerationMethods": [
                "generateContent",
                "countTokens",
                "createCachedContent",
                "batchGenerateContent"
            ],
            "temperature": 1,
            "topP": 0.95,
            "topK": 64,
            "maxTemperature": 2,
            "thinking": true
        },
        {
            "name": "models/gemini-2.5-pro",
            "version": "2.5",
            "displayName": "Gemini 2.5 Pro",
            "description": "Stable release (June 17th, 2025) of Gemini 2.5 Pro",
            "inputTokenLimit": 1048576,
            "outputTokenLimit": 65536,
            "supportedGenerationMethods": [
                "generateContent",
                "countTokens",
                "createCachedContent",
                "batchGenerateContent"
            ],
            "temperature": 1,
            "topP": 0.95,
            "topK": 64,
            "maxTemperature": 2,
            "thinking": true
        },
        {
            "name": "models/gemini-2.0-flash-exp",
            "version": "2.0",
            "displayName": "Gemini 2.0 Flash Experimental",
            "description": "Gemini 2.0 Flash Experimental",
            "inputTokenLimit": 1048576,
            "outputTokenLimit": 8192,
            "supportedGenerationMethods": [
                "generateContent",
                "countTokens",
                "bidiGenerateContent"
            ],
            "temperature": 1,
            "topP": 0.95,
            "topK": 40,
            "maxTemperature": 2
        },
        {
            "name": "models/gemini-2.0-flash",
            "version": "2.0",
            "displayName": "Gemini 2.0 Flash",
            "description": "Gemini 2.0 Flash",
            "inputTokenLimit": 1048576,
            "outputTokenLimit": 8192,
            "supportedGenerationMethods": [
                "generateContent",
                "countTokens",
                "createCachedContent",
                "batchGenerateContent"
            ],
            "temperature": 1,
            "topP": 0.95,
            "topK": 40,
            "maxTemperature": 2
        },
        {
            "name": "models/gemini-2.0-flash-001",
            "version": "2.0",
            "displayName": "Gemini 2.0 Flash 001",
            "description": "Stable version of Gemini 2.0 Flash, our fast and versatile multimodal model for scaling across diverse tasks, released in January of 2025.",
            "inputTokenLimit": 1048576,
            "outputTokenLimit": 8192,
            "supportedGenerationMethods": [
                "generateContent",
                "countTokens",
                "createCachedContent",
                "batchGenerateContent"
            ],
            "temperature": 1,
            "topP": 0.95,
            "topK": 40,
            "maxTemperature": 2
        },
        {
            "name": "models/gemini-2.0-flash-exp-image-generation",
            "version": "2.0",
            "displayName": "Gemini 2.0 Flash (Image Generation) Experimental",
            "description": "Gemini 2.0 Flash (Image Generation) Experimental",
            "inputTokenLimit": 1048576,
            "outputTokenLimit": 8192,
            "supportedGenerationMethods": [
                "generateContent",
                "countTokens",
                "bidiGenerateContent"
            ],
            "temperature": 1,
            "topP": 0.95,
            "topK": 40,
            "maxTemperature": 2
        },
        {
            "name": "models/gemini-2.0-flash-lite-001",
            "version": "2.0",
            "displayName": "Gemini 2.0 Flash-Lite 001",
            "description": "Stable version of Gemini 2.0 Flash-Lite",
            "inputTokenLimit": 1048576,
            "outputTokenLimit": 8192,
            "supportedGenerationMethods": [
                "generateContent",
                "countTokens",
                "createCachedContent",
                "batchGenerateContent"
            ],
            "temperature": 1,
            "topP": 0.95,
            "topK": 40,
            "maxTemperature": 2
        },
        {
            "name": "models/gemini-2.0-flash-lite",
            "version": "2.0",
            "displayName": "Gemini 2.0 Flash-Lite",
            "description": "Gemini 2.0 Flash-Lite",
            "inputTokenLimit": 1048576,
            "outputTokenLimit": 8192,
            "supportedGenerationMethods": [
                "generateContent",
                "countTokens",
                "createCachedContent",
                "batchGenerateContent"
            ],
            "temperature": 1,
            "topP": 0.95,
            "topK": 40,
            "maxTemperature": 2
        },
        {
            "name": "models/gemini-2.0-flash-preview-image-generation",
            "version": "2.0",
            "displayName": "Gemini 2.0 Flash Preview Image Generation",
            "description": "Gemini 2.0 Flash Preview Image Generation",
            "inputTokenLimit": 32768,
            "outputTokenLimit": 8192,
            "supportedGenerationMethods": [
                "generateContent",
                "countTokens"
            ],
            "temperature": 1,
            "topP": 0.95,
            "topK": 64,
            "maxTemperature": 2
        },
        {
            "name": "models/gemini-2.0-flash-lite-preview-02-05",
            "version": "preview-02-05",
            "displayName": "Gemini 2.0 Flash-Lite Preview 02-05",
            "description": "Preview release (February 5th, 2025) of Gemini 2.0 Flash-Lite",
            "inputTokenLimit": 1048576,
            "outputTokenLimit": 8192,
            "supportedGenerationMethods": [
                "generateContent",
                "countTokens",
                "createCachedContent",
                "batchGenerateContent"
            ],
            "temperature": 1,
            "topP": 0.95,
            "topK": 40,
            "maxTemperature": 2
        },
        {
            "name": "models/gemini-2.0-flash-lite-preview",
            "version": "preview-02-05",
            "displayName": "Gemini 2.0 Flash-Lite Preview",
            "description": "Preview release (February 5th, 2025) of Gemini 2.0 Flash-Lite",
            "inputTokenLimit": 1048576,
            "outputTokenLimit": 8192,
            "supportedGenerationMethods": [
                "generateContent",
                "countTokens",
                "createCachedContent",
                "batchGenerateContent"
            ],
            "temperature": 1,
            "topP": 0.95,
            "topK": 40,
            "maxTemperature": 2
        },
        {
            "name": "models/gemini-2.0-pro-exp",
            "version": "2.5-exp-03-25",
            "displayName": "Gemini 2.0 Pro Experimental",
            "description": "Experimental release (March 25th, 2025) of Gemini 2.5 Pro",
            "inputTokenLimit": 1048576,
            "outputTokenLimit": 65536,
            "supportedGenerationMethods": [
                "generateContent",
                "countTokens",
                "createCachedContent",
                "batchGenerateContent"
            ],
            "temperature": 1,
            "topP": 0.95,
            "topK": 64,
            "maxTemperature": 2,
            "thinking": true
        },
        {
            "name": "models/gemini-2.0-pro-exp-02-05",
            "version": "2.5-exp-03-25",
            "displayName": "Gemini 2.0 Pro Experimental 02-05",
            "description": "Experimental release (March 25th, 2025) of Gemini 2.5 Pro",
            "inputTokenLimit": 1048576,
            "outputTokenLimit": 65536,
            "supportedGenerationMethods": [
                "generateContent",
                "countTokens",
                "createCachedContent",
                "batchGenerateContent"
            ],
            "temperature": 1,
            "topP": 0.95,
            "topK": 64,
            "maxTemperature": 2,
            "thinking": true
        },
        {
            "name": "models/gemini-exp-1206",
            "version": "2.5-exp-03-25",
            "displayName": "Gemini Experimental 1206",
            "description": "Experimental release (March 25th, 2025) of Gemini 2.5 Pro",
            "inputTokenLimit": 1048576,
            "outputTokenLimit": 65536,
            "supportedGenerationMethods": [
                "generateContent",
                "countTokens",
                "createCachedContent",
                "batchGenerateContent"
            ],
            "temperature": 1,
            "topP": 0.95,
            "topK": 64,
            "maxTemperature": 2,
            "thinking": true
        },
        {
            "name": "models/gemini-2.0-flash-thinking-exp-01-21",
            "version": "2.5-preview-05-20",
            "displayName": "Gemini 2.5 Flash Preview 05-20",
            "description": "Preview release (April 17th, 2025) of Gemini 2.5 Flash",
            "inputTokenLimit": 1048576,
            "outputTokenLimit": 65536,
            "supportedGenerationMethods": [
                "generateContent",
                "countTokens",
                "createCachedContent",
                "batchGenerateContent"
            ],
            "temperature": 1,
            "topP": 0.95,
            "topK": 64,
            "maxTemperature": 2,
            "thinking": true
        },
        {
            "name": "models/gemini-2.0-flash-thinking-exp",
            "version": "2.5-preview-05-20",
            "displayName": "Gemini 2.5 Flash Preview 05-20",
            "description": "Preview release (April 17th, 2025) of Gemini 2.5 Flash",
            "inputTokenLimit": 1048576,
            "outputTokenLimit": 65536,
            "supportedGenerationMethods": [
                "generateContent",
                "countTokens",
                "createCachedContent",
                "batchGenerateContent"
            ],
            "temperature": 1,
            "topP": 0.95,
            "topK": 64,
            "maxTemperature": 2,
            "thinking": true
        },
        {
            "name": "models/gemini-2.0-flash-thinking-exp-1219",
            "version": "2.5-preview-05-20",
            "displayName": "Gemini 2.5 Flash Preview 05-20",
            "description": "Preview release (April 17th, 2025) of Gemini 2.5 Flash",
            "inputTokenLimit": 1048576,
            "outputTokenLimit": 65536,
            "supportedGenerationMethods": [
                "generateContent",
                "countTokens",
                "createCachedContent",
                "batchGenerateContent"
            ],
            "temperature": 1,
            "topP": 0.95,
            "topK": 64,
            "maxTemperature": 2,
            "thinking": true
        },
        {
            "name": "models/gemini-2.5-flash-preview-tts",
            "version": "gemini-2.5-flash-exp-tts-2025-05-19",
            "displayName": "Gemini 2.5 Flash Preview TTS",
            "description": "Gemini 2.5 Flash Preview TTS",
            "inputTokenLimit": 8192,
            "outputTokenLimit": 16384,
            "supportedGenerationMethods": [
                "countTokens",
                "generateContent"
            ],
            "temperature": 1,
            "topP": 0.95,
            "topK": 64,
            "maxTemperature": 2
        },
        {
            "name": "models/gemini-2.5-pro-preview-tts",
            "version": "gemini-2.5-pro-preview-tts-2025-05-19",
            "displayName": "Gemini 2.5 Pro Preview TTS",
            "description": "Gemini 2.5 Pro Preview TTS",
            "inputTokenLimit": 8192,
            "outputTokenLimit": 16384,
            "supportedGenerationMethods": [
                "countTokens",
                "generateContent"
            ],
            "temperature": 1,
            "topP": 0.95,
            "topK": 64,
            "maxTemperature": 2
        },
        {
            "name": "models/learnlm-2.0-flash-experimental",
            "version": "2.0",
            "displayName": "LearnLM 2.0 Flash Experimental",
            "description": "LearnLM 2.0 Flash Experimental",
            "inputTokenLimit": 1048576,
            "outputTokenLimit": 32768,
            "supportedGenerationMethods": [
                "generateContent",
                "countTokens"
            ],
            "temperature": 1,
            "topP": 0.95,
            "topK": 64,
            "maxTemperature": 2
        },
        {
            "name": "models/gemma-3-1b-it",
            "version": "001",
            "displayName": "Gemma 3 1B",
            "inputTokenLimit": 32768,
            "outputTokenLimit": 8192,
            "supportedGenerationMethods": [
                "generateContent",
                "countTokens"
            ],
            "temperature": 1,
            "topP": 0.95,
            "topK": 64
        },
        {
            "name": "models/gemma-3-4b-it",
            "version": "001",
            "displayName": "Gemma 3 4B",
            "inputTokenLimit": 32768,
            "outputTokenLimit": 8192,
            "supportedGenerationMethods": [
                "generateContent",
                "countTokens"
            ],
            "temperature": 1,
            "topP": 0.95,
            "topK": 64
        },
        {
            "name": "models/gemma-3-12b-it",
            "version": "001",
            "displayName": "Gemma 3 12B",
            "inputTokenLimit": 32768,
            "outputTokenLimit": 8192,
            "supportedGenerationMethods": [
                "generateContent",
                "countTokens"
            ],
            "temperature": 1,
            "topP": 0.95,
            "topK": 64
        },
        {
            "name": "models/gemma-3-27b-it",
            "version": "001",
            "displayName": "Gemma 3 27B",
            "inputTokenLimit": 131072,
            "outputTokenLimit": 8192,
            "supportedGenerationMethods": [
                "generateContent",
                "countTokens"
            ],
            "temperature": 1,
            "topP": 0.95,
            "topK": 64
        },
        {
            "name": "models/gemma-3n-e4b-it",
            "version": "001",
            "displayName": "Gemma 3n E4B",
            "inputTokenLimit": 8192,
            "outputTokenLimit": 2048,
            "supportedGenerationMethods": [
                "generateContent",
                "countTokens"
            ],
            "temperature": 1,
            "topP": 0.95,
            "topK": 64
        },
        {
            "name": "models/gemma-3n-e2b-it",
            "version": "001",
            "displayName": "Gemma 3n E2B",
            "inputTokenLimit": 8192,
            "outputTokenLimit": 2048,
            "supportedGenerationMethods": [
                "generateContent",
                "countTokens"
            ],
            "temperature": 1,
            "topP": 0.95,
            "topK": 64
        },
        {
            "name": "models/embedding-001",
            "version": "001",
            "displayName": "Embedding 001",
            "description": "Obtain a distributed representation of a text.",
            "inputTokenLimit": 2048,
            "outputTokenLimit": 1,
            "supportedGenerationMethods": [
                "embedContent"
            ]
        },
        {
            "name": "models/text-embedding-004",
            "version": "004",
            "displayName": "Text Embedding 004",
            "description": "Obtain a distributed representation of a text.",
            "inputTokenLimit": 2048,
            "outputTokenLimit": 1,
            "supportedGenerationMethods": [
                "embedContent"
            ]
        },
        {
            "name": "models/gemini-embedding-exp-03-07",
            "version": "exp-03-07",
            "displayName": "Gemini Embedding Experimental 03-07",
            "description": "Obtain a distributed representation of a text.",
            "inputTokenLimit": 8192,
            "outputTokenLimit": 1,
            "supportedGenerationMethods": [
                "embedContent",
                "countTextTokens",
                "countTokens"
            ]
        },
        {
            "name": "models/gemini-embedding-exp",
            "version": "exp-03-07",
            "displayName": "Gemini Embedding Experimental",
            "description": "Obtain a distributed representation of a text.",
            "inputTokenLimit": 8192,
            "outputTokenLimit": 1,
            "supportedGenerationMethods": [
                "embedContent",
                "countTextTokens",
                "countTokens"
            ]
        },
        {
            "name": "models/gemini-embedding-001",
            "version": "001",
            "displayName": "Gemini Embedding 001",
            "description": "Obtain a distributed representation of a text.",
            "inputTokenLimit": 2048,
            "outputTokenLimit": 1,
            "supportedGenerationMethods": [
                "embedContent",
                "countTextTokens",
                "countTokens"
            ]
        },
        {
            "name": "models/aqa",
            "version": "001",
            "displayName": "Model that performs Attributed Question Answering.",
            "description": "Model trained to return answers to questions that are grounded in provided sources, along with estimating answerable probability.",
            "inputTokenLimit": 7168,
            "outputTokenLimit": 1024,
            "supportedGenerationMethods": [
                "generateAnswer"
            ],
            "temperature": 0.2,
            "topP": 1,
            "topK": 40
        },
        {
            "name": "models/imagen-3.0-generate-002",
            "version": "002",
            "displayName": "Imagen 3.0 002 model",
            "description": "Vertex served Imagen 3.0 002 model",
            "inputTokenLimit": 480,
            "outputTokenLimit": 8192,
            "supportedGenerationMethods": [
                "predict"
            ]
        }
    ]

    return (
        <Stack height={"100%"} position={'relative'} bgcolor={'background.paper'} component='form' onSubmit={handleSubmit(onHandleSubmit)}>
            {/* header */}
            <Title
                title='Gemini AI | Chatbot-model'
                description='An intelligent, conversational AI designed to understand user intent, provide accurate responses, and deliver seamless, human-like interactions across a variety of topics and services.'
                metacontent="Google AI Pro &amp; Ultra — get access to Gemini 2.5 Pro &amp; more"
                icon='https://gemini.google/images/spark_4c.png'
            />
            <Box position={'sticky'} top={0} left={0}>
                <CardContent>
                    <ListItem disableGutters disablePadding
                        secondaryAction={
                            <FormControl size="small">
                                <Controller
                                    name="model"
                                    control={control}
                                    render={({ field }) => (
                                        <Select
                                            size='small'
                                            sx={{ width: '200px', borderRadius }}
                                            labelId="Model-label"
                                            {...field}
                                        >
                                            {
                                                models.map((models) => {
                                                    return <MenuItem key={models.name} value={models.name}>
                                                        {models.displayName}
                                                    </MenuItem>
                                                })
                                            }
                                        </Select>
                                    )}
                                />
                            </FormControl>
                        }
                    >
                        <ListItemIcon>
                            <AnimatedWrapper animation={rotate} duration="2s" timingFunction="ease-in-out" sx={{ mr: 2 }}>
                                <Avatar src={chat_bot} sx={{ width: '42px', height: '42px' }} />

                                {/* <CardMedia src='https://storage.googleapis.com/gweb-gemini-cdn/gemini/uploads/a21a64fe0131928e76bc9924aed2da8fccd5dfad.mp4' component='video' autoPlay loop sx={{ width: '42px', height: '42px', mr: 2 }} /> */}
                            </AnimatedWrapper>
                        </ListItemIcon>
                        <ListItemText
                            primary={<Typography variant='body2'>Groot AI</Typography>}
                            secondary={<Typography variant='caption'><CircleIcon fontSize='inherit' sx={{ mr: 1 }} color='success' />Online</Typography>}
                        />
                    </ListItem>
                </CardContent>
                <Divider />
            </Box>
            {/* body */}
            <Box flexGrow={1} overflow={'auto'} sx={{
                position: 'relative',
                '&::-webkit-scrollbar': {
                    display: 'none',
                },

                scrollbarWidth: 'none',
                msOverflowStyle: 'none',
            }}>
                {!conversation.length && <Box height={'100%'} display='flex' alignItems='center' flexDirection='column' justifyContent='space-between'>
                    <Stack gap={2} justifyContent={'center'} width={'100%'} flexGrow={1}>
                        <Typography
                            variant="h5"
                            fontWeight={600}
                            textAlign="center"
                            sx={{
                                background: 'linear-gradient(0deg, #4285F4, #9B72CB, #FF5CAA)', // Gemini-like gradient
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent'
                            }}
                        >
                            🖐 Hi there<br /> how can I help you today?
                        </Typography>
                    </Stack>
                </Box>}
                <List>
                    {conversation.map((content, _) => {
                        return <Conversation key={_} candidate={content.candidate} response={content.response} timeStamp={content.timeStamp} />
                    })}
                    {isLoading && <ChatLoader />}
                </List>

            </Box>
            {/* footer */}
            <Box position={'sticky'} bottom={0} left={0}>
                <Collapse in={Boolean(errorVisible)} unmountOnExit orientation='vertical'>
                    <Alert
                        variant="filled"
                        severity="error"
                        sx={{ width: '100%', borderRadius, mb: 0.5 }}
                        action={
                            <Button size="small" onClick={handleClose} color="inherit">
                                Close
                            </Button>
                        }
                    >
                        {(isFetchBaseQueryError(error) &&
                            typeof error.data === 'object' &&
                            error.data !== null &&
                            'message' in error.data &&
                            typeof error.data.message === 'string')
                            ? error.data.message
                            : "An error occurred while processing your request."}
                    </Alert>


                </Collapse>
                <Card elevation={1} sx={{ borderRadius, borderBottomLeftRadius: 0, borderBottomRightRadius: 0,borderBottomColor:'transparent' }}>
                    <CardContent sx={{ borderRadius }}>
                        <CardActions sx={{ position: 'sticky', bottom: 0, zIndex: 9999 }}>
                            {/* <Avatar src='https://avatar.iran.liara.run/public' sx={{ width: '32px', height: '32px' }} /> */}
                            <Controller
                                name="t"
                                control={control}
                                rules={{ required: 'Ask Something !' }}
                                render={({ field }) => (
                                    <TextField
                                        sx={{
                                            flex: 1,
                                            '& .MuiInputBase-root': {
                                                border: 'none',
                                            },
                                            '& .MuiInput-root:before, & .MuiInput-root:after': {
                                                display: 'none', // removes default underline from 'standard' variant
                                            },
                                        }}
                                        placeholder='Ask anything'
                                        multiline
                                        size='small'
                                        maxRows={4}
                                        variant="standard"
                                        value={field.value}
                                        onChange={field.onChange}
                                        onBlur={field.onBlur}
                                        name={field.name}
                                        inputRef={field.ref}
                                    />
                                )}
                            />
                        </CardActions>
                        <Stack direction={'row'}>
                            <Box sx={{ position: 'relative' }}>
                                <IconButton
                                    id="basic-button"

                                    aria-haspopup="true"

                                >
                                    <AddCircleOutlineRoundedIcon />
                                </IconButton>
                                <Menu
                                    open={false}
                                    anchorOrigin={{
                                        horizontal: 'right',
                                        vertical: 'top'
                                    }}
                                    id="basic-menu"

                                >
                                    <MenuItem>
                                        <InsertDriveFileRoundedIcon fontSize='small' sx={{ mr: 1 }} />
                                        Files
                                    </MenuItem>
                                    <MenuItem>My account</MenuItem>
                                </Menu>
                            </Box>
                            <Box flexGrow={1} />
                            <IconButton>
                                <MicRoundedIcon />
                            </IconButton>
                            <IconButton
                                disableRipple
                                disableTouchRipple
                                disableFocusRipple
                                type='submit'
                                disabled={isLoading}
                                color='default'
                            >
                                {isLoading ? (
                                    <StopCircleRoundedIcon color='action' />
                                ) : (
                                    <AutoAwesomeRoundedIcon color='warning' />
                                )}
                            </IconButton>
                        </Stack>
                    </CardContent>
                </Card>
            </Box>
        </Stack >
    )
}

export default React.memo(Chatbot);
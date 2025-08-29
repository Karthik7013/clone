import React, { useEffect, useRef, useState } from 'react';
import { Alert, Box, CardActionArea, CardContent, Chip, Collapse, Container, List, ListItem, Skeleton, Stack, useMediaQuery, useTheme } from '@mui/material';
// custom components
import Card from "../components/ui/Card"
import Typography from "../components/ui/Typography"
// import Avatar from "../components/ui/Avatar"
import Button from "../components/ui/Button"
import IconButton from "../components/ui/IconButton"
// import TextField from "../components/ui/InputField"

import { useDispatch, useSelector } from 'react-redux';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';


import StopCircleRoundedIcon from '@mui/icons-material/StopCircleRounded';
import FlightTakeoffRoundedIcon from '@mui/icons-material/FlightTakeoffRounded';
import LocalDiningRoundedIcon from '@mui/icons-material/LocalDiningRounded';
import CodeRoundedIcon from '@mui/icons-material/CodeRounded';
import MovieRoundedIcon from '@mui/icons-material/MovieRounded';
import FileDownloadRoundedIcon from '@mui/icons-material/FileDownloadRounded';
import ContentCopyRoundedIcon from '@mui/icons-material/ContentCopyRounded';
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import DescriptionRoundedIcon from '@mui/icons-material/DescriptionRounded';
// import BiotechRoundedIcon from '@mui/icons-material/BiotechRounded';
// import AttachFileRoundedIcon from '@mui/icons-material/AttachFileRounded'
import CancelRoundedIcon from '@mui/icons-material/CancelRounded';
// custom icons
import AudioLines from '../assets/icons/audio-lines';
import GeminiIcon from '../assets/icons/GeminiIcon';
import ArrowUp from '../assets/icons/arrow-up';

import { AppDispatch, RootState } from '../store/store';
import { useSendMessageMutation } from '../features/chatbot/chatbotApi';
import { pushMessage } from '../features/chatbot/chatbotSlice';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { SerializedError } from '@reduxjs/toolkit';

import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import rehypeHighlight from 'rehype-highlight';
import Markdown from 'react-markdown';

// import GoogleButton from '../GoogleButton';
import Upload from '../components/Upload';
import Header from '../components/Header';
import Scrollbar from '../components/Scrollbar/Scrollbar';
// import ChatContainer from '../ChatContainer';
// import { GeminiText } from '../../assets/icons/GeminiText';

type conversationProps = {
    candidate: 'user' | 'bot',
    response: string,
    timeStamp: string
}

export type file = {
    filename: string,
    size_formatted: string,
    url: string,
    thumb_url: string,
    delete_url: string
}

export interface BotSubmitType {
    t: string,
    file?: file | undefined
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

import { ComponentPropsWithoutRef } from "react";

type CodeProps = ComponentPropsWithoutRef<"code"> & {
    inline?: boolean;
};
const AppLayout = () => {
    const muiTheme = useTheme();
    const contentRef = useRef<HTMLDivElement>(null);

    const isMobile = useMediaQuery(muiTheme.breakpoints.down("sm"));
    // const isTablet = useMediaQuery(muiTheme.breakpoints.between("sm", "md"));
    // const isDesktop = useMediaQuery(muiTheme.breakpoints.up("md"));


    const messagesEndRef = useRef<HTMLDivElement>(null);
    const [errorVisible, setErrorVisible] = React.useState<undefined | FetchBaseQueryError | SerializedError | undefined>(undefined);
    const borderRadius = useSelector((state: RootState) => state.themeReducer.borderRadius)
    const dispatch: AppDispatch = useDispatch()
    const { handleSubmit, control, watch, setValue, reset } = useForm<BotSubmitType>({
        defaultValues: {
            t: '',
            file: undefined
        }
    })
    const file = watch('file');
    const t = watch('t');
    const conversation = useSelector((state: RootState) => state.chatbotReducer.conversation);
    const [handleSendMessage, { isLoading, error }] = useSendMessageMutation();
    const onHandleSubmit: SubmitHandler<BotSubmitType> = async (data) => {
        dispatch(pushMessage({
            canditate: 'user',
            t: data.t
        }));
        try {
            if (contentRef.current) {
                contentRef.current.textContent = '';
            }
            setValue('t', '', { shouldValidate: false });
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
    const scrollToBottom = () => {
        if (messagesEndRef?.current?.scrollIntoView) {
            messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
        }
    };

    useEffect(() => {
        // Remove old theme if exists
        const existingLink = document.getElementById("hljs-theme") as HTMLLinkElement;
        if (existingLink) {
            existingLink.remove();
        }

        // Create new theme link
        const link = document.createElement("link");
        link.id = "hljs-theme";
        link.rel = "stylesheet";
        link.type = "text/css";
        link.href =
            muiTheme.palette.mode === "dark"
                ? "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/tomorrow-night-bright.min.css"
                : "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/default.min.css";
        document.head.appendChild(link);
    }, [muiTheme.palette.mode]);

    useEffect(() => {
        scrollToBottom();
    }, [conversation]);
    useEffect(() => {
        setErrorVisible(error);
    }, [error]);


    const CodeBlock = ({ className, children, ...props }: CodeProps) => {
        const [copied, setCopied] = useState(false);
        const code = React.Children.toArray(children)
            .map((child) => (typeof child === "string" ? child : ""))
            .join("")
            .replace(/\n$/, "");

        // Extract language (null-safe)
        const match = /language-(\w+)/.exec(className || "");
        const language = match?.[1] ?? "text";

        const handleCopy = () => {
            navigator.clipboard.writeText(code);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        };
        if (language === 'text') return <code className={className} {...props}>{children}</code>

        return <div className={`code-block-wrapper ${className}`} >
            <div className="code-block-header"
                style={{
                    backgroundColor: muiTheme.palette.divider
                }}>
                <Typography sx={{
                    color: muiTheme.palette.text.disabled
                }} as='span'>{language}</Typography>
                <Box>
                    <Button onClick={handleCopy} startIcon={copied ? <CheckRoundedIcon /> : <ContentCopyRoundedIcon />} size='small'>{copied ? "Copied!" : "Copy"}</Button>
                    <Button startIcon={<FileDownloadRoundedIcon />} size='small'>Download</Button>
                </Box>
            </div>
            <code className={className} {...props}>{children}</code>
        </div>
    };

    const Conversation = ({ candidate, response }: conversationProps) => {
        return (
            <ListItem sx={{
                display: 'flex', alignItems: 'flex-end', justifyContent: 'flex-end'
                , padding: isMobile ? 0 : "initial"
            }}>
                {!(candidate === 'user') &&
                    <Box sx={{
                        borderRadius, overflowY: 'auto',
                        width: '100%'
                    }}>
                        <CardContent>
                            <GeminiIcon />
                            <Box className="chat-bot-readme">
                                <Markdown
                                    components={{
                                        code: CodeBlock
                                    }}
                                    remarkPlugins={[remarkGfm]}
                                    rehypePlugins={[rehypeRaw, rehypeHighlight]}
                                >{response}</Markdown>
                            </Box>
                        </CardContent>
                    </Box>}
                {(candidate === 'user') &&

                    <CardActionArea sx={{ cursor: 'initial', maxWidth: '320px', width: 'fit-content' }}>
                        <Card elevation={0} sx={{ p: 1.5 }}>
                            <Typography noWrap={false} variant='body2'
                                sx={{
                                    whiteSpace: 'pre-wrap', // This preserves line breaks
                                    wordWrap: 'break-word'
                                }}
                            >{response}</Typography>
                        </Card>
                    </CardActionArea>
                }
            </ListItem>
        )
    }

    const ChatLoader = () => <ListItem>
        <Box sx={{ borderRadius: '10px', overflowY: 'auto', width: '100%' }}>
            <GeminiIcon />
            <Box position='relative' mb={1}>
                <Stack>
                    <Skeleton animation="pulse" sx={{ p: 1 }}>Thinking...
                    </Skeleton>
                    <Skeleton animation="wave" width={'50%'} />
                    <Skeleton animation="wave" width={'70%'} />
                </Stack>
            </Box>
        </Box>
    </ListItem>


    const handleClose = () => setErrorVisible(undefined)

    const handleInput = () => {
        const text = contentRef.current?.textContent || '';
        setValue('t', text, { shouldValidate: true });
    };
    const handleFocus = () => {
        if (contentRef.current?.textContent === 'Ask anything.') {
            contentRef.current.textContent = '';
        }
    };


    return (
        <Scrollbar
            component='form' onSubmit={handleSubmit(onHandleSubmit)} sx={{ height: '100dvh', position: 'relative', overflowY: 'auto', display: 'flex', flexDirection: "column" }} mode={muiTheme.palette.mode}>
            <Header />
            <Container maxWidth="md" sx={{
                flexGrow: 1
            }}>




                {!conversation.length ?
                    <Box height={'100%'} display='flex' margin={'auto'} alignItems='center' flexDirection='column' justifyContent='space-between'>
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
                            <Stack direction='row' justifyContent='center' flexWrap='wrap' gap={2} sx={{ mx: 'auto', maxWidth: '90%', mt: 2 }}>
                                <Chip clickable variant='outlined' color='primary' icon={<CodeRoundedIcon />} label="Code" />
                                <Chip variant='outlined' color='success' icon={<ArrowUp />} label="Summarize" />
                                <Chip variant='outlined' color='secondary' icon={<LocalDiningRoundedIcon />} label="Recipe" />
                                <Chip variant='outlined' color='info' icon={<FlightTakeoffRoundedIcon />} label="Travel" />
                                <Chip variant='outlined' color='error' icon={<MovieRoundedIcon />} label="Movies" />
                            </Stack>
                        </Stack>
                    </Box> :
                    <List sx={{ display: 'flex', gap: 2, flexDirection: 'column', py: 2 }}>
                        {conversation.map((content, _) => {
                            return <Conversation key={_} candidate={content.candidate} response={content.response} timeStamp={content.timeStamp} />
                        })}
                        {isLoading && <ChatLoader />}
                        <Box ref={messagesEndRef} />
                    </List>}

            </Container>
            <Container maxWidth="md" sx={{ position: 'sticky', left: 0, bottom: 0, zIndex: 99 }}>
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
                <Card elevation={0} sx={{borderRadius:5, boxShadow: `0px -16px 16px 0px ${muiTheme.palette.mode === 'dark' ? '#121212' : 'white'}, 0px 0px 0px 0px rgb(0 0 0 / 0%), 0px 0px 0px 0px rgb(0 0 0 / 0%)` }}>
                    <CardContent sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        padding: 1,
                        '&:last-child': { // Targeting the last child
                            paddingBottom: 1 // Remove bottom padding specifically
                        }
                    }}>
                        <Collapse in={Boolean(file)} orientation='vertical'>
                            {file && <Card sx={{ maxWidth: 'fit-content', mb: 2, bgcolor: 'divider', height: 56, borderRadius: 3, display: 'flex', alignItems: 'center', boxSizing: 'border-box', position: 'relative' }}>
                                <Box height={56} minWidth={56} display={'flex'} justifyContent={'center'} alignItems={'center'} borderRadius={2} overflow={'hidden'}>

                                    {file.thumb_url ? <img width={'100%'} height={'100%'} src={file.thumb_url} alt={':('} />
                                        : <DescriptionRoundedIcon />}
                                </Box>
                                <Stack direction={'row'} gap={1} flexGrow={1} padding={1}>
                                    <Box
                                        flexGrow={1} display={'flex'} flexDirection={'column'}>
                                        <Typography sx={{
                                            display: "inline-block",   // or "block"
                                            maxWidth: 100,             // 👈 adjust based on your layout
                                            overflow: "hidden",
                                            textOverflow: "ellipsis",
                                            whiteSpace: "nowrap",
                                        }}>{file.filename}</Typography>
                                        <Typography variant='caption'>{file.size_formatted}</Typography>
                                    </Box>
                                    <Box onClick={() => reset({
                                        file: undefined
                                    })}>
                                        <CancelRoundedIcon fontSize='small' color='error' sx={{ cursor: 'pointer', mt: 1 }} />
                                    </Box>
                                </Stack>

                            </Card>}
                        </Collapse>
                        <Box>
                            <Controller
                                name="t"
                                control={control}
                                rules={{
                                    validate: value => {
                                        const trimmedValue = value?.trim();
                                        return trimmedValue && trimmedValue !== 'Ask anything.' || 'Ask Something!';
                                    }
                                }}
                                render={() => (
                                    <Box
                                        component="div"
                                        ref={contentRef}
                                        contentEditable
                                        onInput={handleInput}
                                        onFocus={handleFocus}
                                        sx={{
                                            padding: '12px',
                                            borderRadius: 1,
                                            minHeight: 48,
                                            maxHeight: 300,
                                            outline: 'none',
                                            overflow: 'auto',
                                            whiteSpace: 'pre-wrap',
                                        }}
                                        suppressContentEditableWarning
                                    >
                                        Ask anything.
                                    </Box>
                                )}
                            />
                            <Stack direction='row' alignItems={'center'} gap={1}>
                                <Box>
                                    <Upload setValue={setValue} />
                                </Box>
                                <Box flexGrow={1}>

                                </Box>
                                <Box>{(t === '' && !isLoading) ? <IconButton color='primary'>
                                    <AudioLines />
                                </IconButton> :
                                    <IconButton
                                        sx={{ borderRadius }}

                                        type='submit'
                                        disabled={isLoading}
                                    >
                                        {isLoading ? (
                                            <StopCircleRoundedIcon color='action' />
                                        ) : (
                                            <ArrowUp />
                                        )}
                                    </IconButton>}</Box>
                            </Stack>
                        </Box>
                    </CardContent>
                </Card>
                <Box sx={{ textAlign: 'center', bgcolor: 'background.paper' }}>
                    <Typography variant='caption' color='text.secondary' >Gemini can make mistakes.read the policies</Typography>
                </Box>
            </Container>
        </Scrollbar>
    )
}

export default React.memo(AppLayout);
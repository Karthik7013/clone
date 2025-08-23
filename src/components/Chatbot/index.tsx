import React, { useEffect, useRef, useState } from 'react';
import { Alert, Box, CardContent, Chip, Collapse, Container, Dialog, InputAdornment, List, ListItem, Skeleton, Stack, useMediaQuery, useTheme } from '@mui/material';

// custom components
import Card from "../ui/Card"
import Typography from "../ui/Typography"
// import Avatar from "../ui/Avatar"
import Button from "../ui/Button"
import IconButton from "../ui/IconButton"
import TextField from "../ui/InputField"

import { useDispatch, useSelector } from 'react-redux';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';


import StopCircleRoundedIcon from '@mui/icons-material/StopCircleRounded';
import FlightTakeoffRoundedIcon from '@mui/icons-material/FlightTakeoffRounded';
import LocalDiningRoundedIcon from '@mui/icons-material/LocalDiningRounded';
import CodeRoundedIcon from '@mui/icons-material/CodeRounded';
import MovieRoundedIcon from '@mui/icons-material/MovieRounded';
import DescriptionRoundedIcon from '@mui/icons-material/DescriptionRounded';
// import AttachFileRoundedIcon from '@mui/icons-material/AttachFileRounded'
import CancelRoundedIcon from '@mui/icons-material/CancelRounded';
// custom icons
import AudioLines from '../../assets/icons/audio-lines';
import GeminiIcon from '../../assets/icons/GeminiIcon';
import ArrowUp from '../../assets/icons/arrow-up';

import { AppDispatch, RootState } from '../../store/store';
import { useSendMessageMutation } from '../../features/chatbot/chatbotApi';
import { pushMessage } from '../../features/chatbot/chatbotSlice';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { SerializedError } from '@reduxjs/toolkit';

import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import rehypeHighlight from 'rehype-highlight';
import Markdown from 'react-markdown';

// import GoogleButton from '../GoogleButton';
import Upload from '../Upload';
import Header from '../Header';
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


const Chatbot = () => {
    const [assistant, setAssistant] = useState(false);
    const muiTheme = useTheme();
    const isMobile = useMediaQuery(muiTheme.breakpoints.down("sm"));
    // const isTablet = useMediaQuery(muiTheme.breakpoints.between("sm", "md"));
    // const isDesktop = useMediaQuery(muiTheme.breakpoints.up("md"));


    const messagesEndRef = useRef<HTMLDivElement>(null);
    const theme = useSelector((state: RootState) => state.themeReducer.mode)
    useEffect(() => {
        if (theme === 'dark') {
            import('highlight.js/styles/github.css');
        } else {
            import('highlight.js/styles/github-dark.css');
        }
    }, [theme]);

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
            reset({
                file: undefined,
                t: ""
            });
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
        scrollToBottom();
    }, [conversation]);
    useEffect(() => {
        setErrorVisible(error);
    }, [error]);

    const Conversation = ({ candidate, response }: conversationProps) => {
        return (
            <ListItem sx={{
                display: 'flex', alignItems: 'flex-end', justifyContent: 'flex-end'
                , padding: isMobile ? 0 : "initial"
            }}>
                {!(candidate === 'user') &&
                    <Box sx={{
                        borderRadius: '10px', overflow: 'auto',
                        width: '100%'
                    }}>
                        <CardContent>
                            <GeminiIcon />
                            <Box className="chat-bot-readme">
                                <Markdown
                                    remarkPlugins={[remarkGfm]}
                                    rehypePlugins={[rehypeRaw, rehypeHighlight]}
                                >{response}</Markdown>
                            </Box>
                        </CardContent>
                    </Box>}
                {(candidate === 'user') &&
                    <Card elevation={0} sx={{ p: 1.5, borderRadius, borderTopRightRadius: 0, maxWidth: '320px' }}>
                        <Typography variant='body2'>{response}</Typography>
                    </Card>
                }
            </ListItem>
        )
    }

    const ChatLoader = () => <ListItem sx={{ padding: isMobile ? 0 : "initial" }}>
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
    </ListItem >

    const handleClose = () => setErrorVisible(undefined)

    const handleAssistant = () => setAssistant((prev) => !prev);

    return (
        <Stack sx={{ height: '100dvh', position: 'relative', overflowY: 'auto' }} component='form' onSubmit={handleSubmit(onHandleSubmit)}>
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
                    <List>
                        {conversation.map((content, _) => {
                            return <Conversation key={_} candidate={content.candidate} response={content.response} timeStamp={content.timeStamp} />
                        })}
                        {isLoading && <ChatLoader />}
                        <Box ref={messagesEndRef} />
                        {/* <WeatherWidget />
                        <VideoWidget /> */}
                    </List>}
            </Container>
            {/* <ChatContainer /> */}
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
                <Card sx={{ borderRadius: borderRadius }}>
                    <CardContent sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        "&:last-child": {
                            pb: 1.5,
                        },
                        paddingX: 1.5
                    }}>
                        <Collapse in={Boolean(file)} orientation='vertical'>
                            {file && <Card sx={{ maxWidth: 'fit-content', mb: 3, bgcolor: 'divider', height: 56, borderRadius: 3, display: 'flex', alignItems: 'center', boxSizing: 'border-box', position: 'relative' }}>
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
                        <Stack direction='row'>
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
                                        maxRows={16}
                                        variant="standard"
                                        value={field.value}
                                        onChange={field.onChange}
                                        onBlur={field.onBlur}
                                        name={field.name}
                                        inputRef={field.ref}
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <Upload setValue={setValue} />
                                                </InputAdornment>
                                            ),
                                            endAdornment: (
                                                <InputAdornment position="end">

                                                    {t === '' ? <IconButton onClick={handleAssistant} color='primary'>
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
                                                        </IconButton>}
                                                </InputAdornment>
                                            )
                                        }}
                                    />
                                )}
                            />
                            <Dialog sx={{ bgcolor: muiTheme.palette.common.black }} open={assistant} onClose={handleAssistant}>
                                <video autoPlay loop src="https://cdn.dribbble.com/userupload/13391587/file/original-c2fc6f1a7cd4b57bbae21a246e09c763.mp4"></video>
                            </Dialog>
                        </Stack>
                    </CardContent>
                </Card>
                <Box sx={{ textAlign: 'center', bgcolor: 'background.paper' }}>
                    <Typography variant='caption' color='text.secondary' >Gemini can make mistakes.read the policies</Typography>
                </Box>
            </Container>
        </Stack>
    )
}

export default React.memo(Chatbot);
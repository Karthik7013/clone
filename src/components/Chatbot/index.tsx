import React, { useEffect, useRef } from 'react';
import chat_bot from "../../assets/images/gemini_ai_.svg";
import { Alert, Avatar, Box, Button, Card, CardContent, Chip, Collapse, Container, Divider, IconButton, InputAdornment, keyframes, List, ListItem, Paper, Skeleton, Stack, TextField, Toolbar, Typography, useMediaQuery, useTheme } from '@mui/material';
import { AppDispatch, RootState } from '../../store/store';
import { useDispatch, useSelector } from 'react-redux';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import AutoAwesomeRoundedIcon from '@mui/icons-material/AutoAwesomeRounded';
import StopCircleRoundedIcon from '@mui/icons-material/StopCircleRounded';
import { useSendMessageMutation } from '../../features/chatbot/chatbotApi';
import { pushMessage } from '../../features/chatbot/chatbotSlice';
import FlightTakeoffRoundedIcon from '@mui/icons-material/FlightTakeoffRounded';
import LocalDiningRoundedIcon from '@mui/icons-material/LocalDiningRounded';
import CodeRoundedIcon from '@mui/icons-material/CodeRounded';
import MovieRoundedIcon from '@mui/icons-material/MovieRounded';
// import AttachFileRoundedIcon from '@mui/icons-material/AttachFileRounded'
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import rehypeHighlight from 'rehype-highlight';
import Markdown from 'react-markdown';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { SerializedError } from '@reduxjs/toolkit';
import AnimatedWrapper from '../AnimatedWrapper/AnimatedWrapper';
import Title from '../Title/Title';
import Helmet from "react-helmet";
import ChatBubbleOutlineRoundedIcon from '@mui/icons-material/ChatBubbleOutlineRounded';
import DescriptionRoundedIcon from '@mui/icons-material/DescriptionRounded';
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';
import Upload from '../Upload';
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
    const conversation = useSelector((state: RootState) => state.chatbotReducer.conversation);
    const [handleSendMessage, { isLoading, error }] = useSendMessageMutation();

    const onHandleSubmit: SubmitHandler<BotSubmitType> = async (data) => {
        dispatch(pushMessage({
            canditate: 'user',
            t: data.t
        }));
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
        <Box sx={{ padding: '10px', borderRadius: '10px', overflowY: 'auto', width: '100%' }}>
            <AnimatedWrapper animation={rotate} duration="2s" timingFunction="ease-in-out" sx={{ mr: 2 }}>
                <Avatar src={chat_bot} sx={{ width: '26px', height: '26px' }} />
            </AnimatedWrapper>
            <Box position='relative' mb={1}>
                <Stack>
                    <Skeleton animation="wave" width={'25%'} />
                    <Skeleton animation="wave" width={'50%'} />
                    <Skeleton animation="wave" width={'70%'} />
                </Stack>
            </Box>
        </Box>
    </ListItem>

    const handleClose = () => setErrorVisible(undefined)


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

    const WeatherWidget = () => {
        return <Card sx={{ width: '100%', maxWidth: 360, borderRadius }}>
            <CardContent sx={{ gap: 2, display: 'flex', flexDirection: 'column' }}>
                <Stack flexDirection={'row'}>
                    <Box flexGrow={1}>
                        <Typography variant='h1'>32
                            <sup>o</sup> C</Typography>

                        <Typography variant='h6'>overcast clouds</Typography>
                    </Box>
                    <Box width={60} height={60}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" className="icon" version="1.1"><path d="M704.80522 372.838812h104.730542c90.024788 0 162.978115 72.985295 162.978115 163.010084 0 44.980425-18.254316 85.708969-47.729762 115.216385-29.475446 29.475446-70.235959 47.729762-115.248353 47.729761H214.783928c-89.992819 0-162.946146-72.985295-162.946146-162.946146 0-45.012394 18.222347-85.772907 47.729762-115.280322 29.475446-29.475446 70.235959-47.729762 115.216384-47.729762h4.923231c0-133.918267 108.630764-242.549031 242.54903-242.54903 133.950236 0 242.549031 108.630764 242.549031 242.54903z" fill="#8B87C1" /><path d="M704.80522 395.217133a22.378321 22.378321 0 0 1-22.378321-22.378321c0-121.402391-98.768318-220.17071-220.17071-220.170709s-220.17071 98.768318-220.170709 220.170709a22.378321 22.378321 0 1 1-44.756642 0c0-146.082483 118.844869-264.927352 264.927351-264.927351s264.927352 118.844869 264.927352 264.927351a22.378321 22.378321 0 0 1-22.378321 22.378321z" fill="#4F46A3" /><path d="M809.535762 721.173363H214.783928c-102.185807 0-185.324467-83.135463-185.324467-185.324467 0-49.539209 19.277325-96.102101 54.283413-131.104992 35.006088-35.006088 81.540208-54.283413 131.037857-54.283413a22.378321 22.378321 0 1 1 0 44.756642c-37.541232 0-72.838238 14.622634-99.391714 41.172914s-41.176111 61.872861-41.176111 99.455652c0 77.508913 63.058912 140.567825 140.567825 140.567825h594.755031c37.56361 0 72.873404-14.622634 99.423684-41.17611 26.550279-26.575855 41.176111-61.879254 41.17611-99.391715 0-77.544079-63.071699-140.631763-140.596597-140.631763a22.378321 22.378321 0 1 1 0-44.756642c102.204989 0 185.353239 83.164235 185.353239 185.388405 0 49.459286-19.274128 95.990209-54.277019 131.031464-35.012482 35.015679-81.559389 54.296201-131.079417 54.2962z" fill="#4F46A3" /><path d="M809.535762 395.217133h-179.154444a22.378321 22.378321 0 1 1 0-44.756642h179.154444a22.378321 22.378321 0 1 1 0 44.756642zM186.922918 915.768849a22.378321 22.378321 0 0 1-13.733895-40.057195l142.326122-110.421029a22.378321 22.378321 0 1 1 27.435821 35.357747l-142.326121 110.42103a22.282414 22.282414 0 0 1-13.701927 4.699447zM394.721613 915.768849a22.378321 22.378321 0 0 1-13.733895-40.057195l142.326122-110.421029a22.378321 22.378321 0 0 1 27.435821 35.357747l-142.326121 110.42103a22.282414 22.282414 0 0 1-13.701927 4.699447zM602.517112 915.768849a22.378321 22.378321 0 0 1-13.733896-40.057195l142.329319-110.421029a22.378321 22.378321 0 0 1 27.435821 35.357747l-142.329318 110.42103a22.282414 22.282414 0 0 1-13.701926 4.699447z" fill="#4F46A3" /></svg>
                    </Box>
                </Stack>
                <Divider></Divider>
                <Stack flexDirection={'row'}>
                    <Box flexGrow={1} display={'flex'} alignItems={'center'}>
                        <LocationOnRoundedIcon sx={{ mr: 1 }} /> <Typography variant='h6'>Visakhapatnam</Typography>
                    </Box>

                    <Box>
                        <Typography variant='h4'>10:53 PM</Typography>
                    </Box>
                </Stack>
            </CardContent>
        </Card >
    }
    // const NewsCardWidget = () => {
    //     return <></>
    // }

    const VideoWidget = () => {
        return <Box component={Card} sx={{ aspectRatio: "16/9", maxWidth: 360, borderRadius }}>
            <iframe
                width="100%"
                height="100%"
                src="https://pixabay.com/static/videos/hero3.mp4"
                style={{ border: 'none' }} // Or any other border style you need
            />
        </Box>
    }



    return (
        <Stack sx={{ height: '100dvh', position: 'relative', overflowY: 'auto' }} component='form' onSubmit={handleSubmit(onHandleSubmit)}>
            <Title
                title='Gemini AI | Chatbot-model'
                description='An intelligent, conversational AI designed to understand user intent, provide accurate responses, and deliver seamless, human-like interactions across a variety of topics and services.'
                metacontent="Google AI Pro &amp; Ultra — get access to Gemini 2.5 Pro &amp; more"
                icon='https://gemini.google/images/spark_4c.png'
            />
            <Helmet>
                <meta name="theme-color" content={muiTheme.palette.primary.main} />
            </Helmet>
            <Box sx={{ position: 'sticky', top: 0, left: 0, zIndex: 99 }}>
                <Toolbar sx={{ gap: 2, bgcolor: 'background.paper' }}>
                    <Avatar src={chat_bot} sx={{ width: 34, height: 34 }} />
                    <Box flexGrow={1}>
                        <Typography variant='h6' fontWeight={500}>Gemini AI</Typography>
                    </Box>
                    <IconButton>
                        <ChatBubbleOutlineRoundedIcon />
                    </IconButton>
                </Toolbar>
                <Divider />
            </Box>

            <Container maxWidth="md" sx={{
                flexGrow: 1,
            }}>
                {!conversation.length ? <Box height={'100%'} display='flex' margin={'auto'} alignItems='center' flexDirection='column' justifyContent='space-between'>
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
                            <Chip icon={<CodeRoundedIcon />} label="Code" />
                            <Chip icon={<AutoAwesomeRoundedIcon />} label="Summarize" />
                            <Chip icon={<LocalDiningRoundedIcon />} label="Recipe" />
                            <Chip icon={<FlightTakeoffRoundedIcon />} label="Travel" />
                            <Chip icon={<MovieRoundedIcon />} label="Movies" />
                        </Stack>
                    </Stack>
                </Box> :
                    <List>
                        {conversation.map((content, _) => {
                            return <Conversation key={_} candidate={content.candidate} response={content.response} timeStamp={content.timeStamp} />
                        })}

                        {isLoading && <ChatLoader />}
                        <Box ref={messagesEndRef} />
                        <WeatherWidget />
                        <VideoWidget />
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
                <Box>
                    <Card sx={{ borderRadius: borderRadius }}>
                        <CardContent sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 2,
                            "&:last-child": {
                                pb: 1.5, // remove last-child padding-bottom
                            },
                            paddingX: 1.5
                        }}>
                            {file && <Box component='a' href={file.url} download>
                                {<Card sx={{ maxWidth: 180, py: 2, px: 1, bgcolor: 'divider', height: 56, borderRadius: 3, display: 'flex', alignItems: 'center', boxSizing: 'border-box', gap: 1, cursor: 'pointer' }}>
                                    <Box width={36} height={36} display={'flex'} justifyContent={'center'} alignItems={'center'} borderRadius={2}>
                                        {<DescriptionRoundedIcon />}
                                    </Box>
                                    <Box flexGrow={1} display={'flex'} flexDirection={'column'}>
                                        <Typography variant='caption'>{file.filename}</Typography>
                                        <Typography variant='caption'>{file.size_formatted}</Typography>
                                    </Box>
                                </Card>}
                            </Box>}
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
                                                        <Upload setValue={setValue} reset={reset} />
                                                    </InputAdornment>
                                                ),
                                                endAdornment: (
                                                    <InputAdornment position="end">
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
                                                    </InputAdornment>
                                                )
                                            }}
                                        />
                                    )}
                                />
                            </Stack>
                        </CardContent>
                    </Card>
                </Box>
                <Box sx={{ textAlign: 'center', bgcolor: 'background.paper' }}>
                    <Typography variant='caption' color='text.secondary' >Gemini can make mistakes.read the policies</Typography></Box>
            </Container >
        </Stack >
    )
}

export default React.memo(Chatbot);
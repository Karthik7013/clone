import React, { useEffect, useRef, useState } from 'react';
import chat_bot from "../../assets/images/gemini_ai_.svg";
import { Alert, Avatar, Box, Button, Card, CardActions, CardContent, Chip, Collapse, Container, Divider, IconButton, InputAdornment, keyframes, List, ListItem, ListItemIcon, ListItemText, Paper, Skeleton, Stack, TextField, Toolbar, Typography, useMediaQuery, useTheme } from '@mui/material';
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
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import AttachFileRoundedIcon from '@mui/icons-material/AttachFileRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import rehypeHighlight from 'rehype-highlight';
import Markdown from 'react-markdown';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { SerializedError } from '@reduxjs/toolkit';
import AnimatedWrapper from '../AnimatedWrapper/AnimatedWrapper';
import Title from '../Title/Title';
import Helmet from "react-helmet";
import MenuOpenRoundedIcon from '@mui/icons-material/MenuOpenRounded';
import BorderColorRoundedIcon from '@mui/icons-material/BorderColorRounded';
import Scrollbar from '../Scrollbar/Scrollbar';
import CategoryRoundedIcon from '@mui/icons-material/CategoryRounded';
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
    const muiTheme = useTheme();
    const isMobile = useMediaQuery(muiTheme.breakpoints.down("sm"));  // sm = 600px
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
        reset({
            model: data.model
        })
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
            <ListItem sx={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'flex-end' }}>
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

    const Sidebar = () => {
        const [minWid, setMinwid] = useState(false)
        const minWidthx = () => setMinwid((prev) => !prev);
        return <Stack height={'100%'} sx={{ transition: 'all .1s linear' }} minWidth={minWid ? 240 : 0}>
            <List dense sx={{ background: muiTheme.palette.background.paper, zIndex: 9999 }}>
                <ListItem sx={{ justifyContent: "space-between" }}>
                    <ListItemIcon onClick={minWidthx}>
                        <Avatar src={chat_bot} sx={{ width: 34, height: 34 }} />
                    </ListItemIcon>
                    {
                        minWid &&
                        (<IconButton size='small' onClick={minWidthx}><MenuOpenRoundedIcon /></IconButton>
                        )
                    }
                </ListItem>
            </List>
            <Box flexGrow={1}>
                <List sx={{ mt: 2, position: 'sticky', top: 0, zIndex: 99 }}>
                    <ListItem>
                        <ListItemIcon>
                            <BorderColorRoundedIcon sx={{ width: 18, height: 18 }} />
                        </ListItemIcon>
                        <Collapse in={minWid} orientation='horizontal'>
                            <ListItemText sx={{ textWrap: 'nowrap' }} primary="New Chat" />
                        </Collapse>
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <SearchRoundedIcon sx={{ width: 18, height: 18 }} />
                        </ListItemIcon>
                        <Collapse in={minWid} orientation='horizontal'>
                            <ListItemText sx={{ textWrap: 'nowrap' }} primary="Search" />
                        </Collapse>
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <CategoryRoundedIcon sx={{ width: 18, height: 18 }} />
                        </ListItemIcon>
                        <Collapse in={minWid} orientation='horizontal'>
                            <ListItemText sx={{ textWrap: 'nowrap' }} primary="Products" />
                        </Collapse>
                    </ListItem>
                </List>
                {minWid && <List sx={{ mt: 2 }} subheader={<Typography variant='caption' sx={{ textIndent: 16 }}>Chats</Typography>}>
                    {
                        [1, 2, 3, 4, 5, 1, 2, 3, 4, 5].map(() => {
                            return (<ListItem>

                                <Collapse in={minWid} orientation='horizontal'>
                                    <ListItemText sx={{ textWrap: 'nowrap' }} primary="New Chat" />
                                </Collapse>
                            </ListItem>)
                        })

                    }
                </List>}
            </Box>
            {minWid && <Divider variant='middle' />}
            <List sx={{ position: 'sticky', bottom: 0, zIndex: 999, bgcolor: 'background.paper' }}>
                <ListItem>
                    <ListItemIcon>
                        <Avatar src={'https://avatar.iran.liara.run/public'} sx={{ width: 34, height: 34 }} />
                    </ListItemIcon>
                    <Collapse in={minWid} orientation='horizontal'>
                        <ListItemText sx={{ textWrap: 'nowrap', textIndent: 13 }} primary="Karthik" />
                    </Collapse>
                </ListItem>
            </List>
        </Stack>
    }

    return (
        <Box
            sx={{ height: '100dvh', padding: 0, transition: 'all .1s linear', display: 'flex' }}>


            {/* <Drawer open>
                <Sidebar />
            </Drawer> */}
            {/* <Box height={'100%'} sx={{ overflowY: 'scroll' }}> */}
            {!isMobile && <Scrollbar>
                <Sidebar />
            </Scrollbar>}

            {/* </Box> */}
            <Stack height={"100%"} flexGrow={1} position={'relative'} bgcolor={'background.paper'} component='form' onSubmit={handleSubmit(onHandleSubmit)}>
                {/* header */}
                <Title
                    title='Gemini AI | Chatbot-model'
                    description='An intelligent, conversational AI designed to understand user intent, provide accurate responses, and deliver seamless, human-like interactions across a variety of topics and services.'
                    metacontent="Google AI Pro &amp; Ultra — get access to Gemini 2.5 Pro &amp; more"
                    icon='https://gemini.google/images/spark_4c.png'
                />
                <Helmet>
                    <meta name="theme-color" content={muiTheme.palette.background.paper} />
                </Helmet>
                <Box position={'sticky'} top={0} left={0}>
                    <Toolbar>

                        <Box flexGrow={1}>
                            <Typography variant='h6' fontWeight={500}>Gemini AI</Typography>
                        </Box>
                        <IconButton>
                            <MenuRoundedIcon />
                        </IconButton>
                    </Toolbar>
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
                    <Container maxWidth="md" sx={{ height: "100%",overflow:'hidden' }}>
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
                                <Stack direction='row' justifyContent='center' flexWrap='wrap' gap={2} sx={{ mx: 'auto', maxWidth: '90%', mt: 2 }}>
                                    <Chip icon={<CodeRoundedIcon />} label="Code" />
                                    <Chip icon={<AutoAwesomeRoundedIcon />} label="Summarize" />
                                    <Chip icon={<LocalDiningRoundedIcon />} label="Recipe" />
                                    <Chip icon={<FlightTakeoffRoundedIcon />} label="Travel" />
                                    <Chip icon={<MovieRoundedIcon />} label="Movies" />
                                </Stack>
                            </Stack>
                        </Box>}
                        <List>
                            {conversation.map((content, _) => {
                                return <Conversation key={_} candidate={content.candidate} response={content.response} timeStamp={content.timeStamp} />
                            })}
                            {isLoading && <ChatLoader />}
                            <Box ref={messagesEndRef} />
                        </List>
                    </Container>
                </Box>
                {/* footer */}
                <Container sx={{ position: 'sticky', bottom: 16, left: 0 }} maxWidth="md" >
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
                    <Card elevation={1} sx={{ borderRadius }}>
                        <CardContent sx={{ borderRadius, px: 0 }}>
                            <CardActions sx={{ position: 'sticky', bottom: 0, zIndex: 9999, paddingBottom: 0 }}>
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
                                            InputProps={{
                                                startAdornment: (
                                                    <InputAdornment position="start">
                                                        <IconButton>

                                                            <AttachFileRoundedIcon />
                                                        </IconButton>
                                                    </InputAdornment>
                                                ),
                                            }}
                                        />
                                    )}
                                />
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

                            </CardActions>



                        </CardContent>
                    </Card>
                </Container>
            </Stack>
        </Box>
    )
}

export default React.memo(Chatbot);
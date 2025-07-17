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

import Markdown from 'react-markdown';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { SerializedError } from '@reduxjs/toolkit';
import AnimatedWrapper from '../AnimatedWrapper/AnimatedWrapper';
import Title from '../Title/Title';
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
        console.log('error', error)
        setErrorVisible(error);
    }, [error]);
    const Conversation = ({ candidate, response }: conversationProps) => {
        return (
            <ListItem sx={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'flex-end' }}>
                {!(candidate === 'user') && <Card sx={{
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
                </Card>}
                {(candidate === 'user') &&
                    <Paper sx={{ p: 1.5, borderRadius, borderTopRightRadius: 0 }}>
                        <Typography component={'pre'}>{response}</Typography>
                    </Paper>
                }
            </ListItem>
        )
    }

    const ChatLoader = () => <ListItem disableGutters>
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

    // const models = [
    //     {
    //         label: 'Gemini 2.5 Flash',
    //         value: 'gemini-2.5-flash'
    //     },
    //     {
    //         label: 'Gemini 2.5 Flash Lite Preview 06-17',
    //         value: 'gemini-2.5-flash-lite-preview-06-17'
    //     },
    //     {
    //         label: 'Gemini 1.5 Pro',
    //         value: 'gemini-1.5-pro'
    //     }
    // ]
    const models = [
        { label: 'Embedding Gecko', value: 'models/embedding-gecko-001' },
        {
            label: 'Gemini 1.0 Pro Vision',
            value: 'models/gemini-1.0-pro-vision-latest'
        },
        { label: 'Gemini 1.0 Pro Vision', value: 'models/gemini-pro-vision' },
        {
            label: 'Gemini 1.5 Pro Latest',
            value: 'models/gemini-1.5-pro-latest'
        },
        { label: 'Gemini 1.5 Pro 002', value: 'models/gemini-1.5-pro-002' },
        { label: 'Gemini 1.5 Pro', value: 'models/gemini-1.5-pro' },
        {
            label: 'Gemini 1.5 Flash Latest',
            value: 'models/gemini-1.5-flash-latest'
        },
        { label: 'Gemini 1.5 Flash', value: 'models/gemini-1.5-flash' },
        {
            label: 'Gemini 1.5 Flash 002',
            value: 'models/gemini-1.5-flash-002'
        },
        { label: 'Gemini 1.5 Flash-8B', value: 'models/gemini-1.5-flash-8b' },
        {
            label: 'Gemini 1.5 Flash-8B 001',
            value: 'models/gemini-1.5-flash-8b-001'
        },
        {
            label: 'Gemini 1.5 Flash-8B Latest',
            value: 'models/gemini-1.5-flash-8b-latest'
        },
        {
            label: 'Gemini 2.5 Pro Preview 03-25',
            value: 'models/gemini-2.5-pro-preview-03-25'
        },
        {
            label: 'Gemini 2.5 Flash Preview 05-20',
            value: 'models/gemini-2.5-flash-preview-05-20'
        },
        { label: 'Gemini 2.5 Flash', value: 'models/gemini-2.5-flash' },
        {
            label: 'Gemini 2.5 Flash-Lite Preview 06-17',
            value: 'models/gemini-2.5-flash-lite-preview-06-17'
        },
        {
            label: 'Gemini 2.5 Pro Preview 05-06',
            value: 'models/gemini-2.5-pro-preview-05-06'
        },
        {
            label: 'Gemini 2.5 Pro Preview',
            value: 'models/gemini-2.5-pro-preview-06-05'
        },
        { label: 'Gemini 2.5 Pro', value: 'models/gemini-2.5-pro' },
        {
            label: 'Gemini 2.0 Flash Experimental',
            value: 'models/gemini-2.0-flash-exp'
        },
        { label: 'Gemini 2.0 Flash', value: 'models/gemini-2.0-flash' },
        {
            label: 'Gemini 2.0 Flash 001',
            value: 'models/gemini-2.0-flash-001'
        },
        {
            label: 'Gemini 2.0 Flash (Image Generation) Experimental',
            value: 'models/gemini-2.0-flash-exp-image-generation'
        },
        {
            label: 'Gemini 2.0 Flash-Lite 001',
            value: 'models/gemini-2.0-flash-lite-001'
        },
        {
            label: 'Gemini 2.0 Flash-Lite',
            value: 'models/gemini-2.0-flash-lite'
        },
        {
            label: 'Gemini 2.0 Flash Preview Image Generation',
            value: 'models/gemini-2.0-flash-preview-image-generation'
        },
        {
            label: 'Gemini 2.0 Flash-Lite Preview 02-05',
            value: 'models/gemini-2.0-flash-lite-preview-02-05'
        },
        {
            label: 'Gemini 2.0 Flash-Lite Preview',
            value: 'models/gemini-2.0-flash-lite-preview'
        },
        {
            label: 'Gemini 2.0 Pro Experimental',
            value: 'models/gemini-2.0-pro-exp'
        },
        {
            label: 'Gemini 2.0 Pro Experimental 02-05',
            value: 'models/gemini-2.0-pro-exp-02-05'
        },
        {
            label: 'Gemini Experimental 1206',
            value: 'models/gemini-exp-1206'
        },
        {
            label: 'Gemini 2.5 Flash Preview 05-20',
            value: 'models/gemini-2.0-flash-thinking-exp-01-21'
        },
        {
            label: 'Gemini 2.5 Flash Preview 05-20',
            value: 'models/gemini-2.0-flash-thinking-exp'
        },
        {
            label: 'Gemini 2.5 Flash Preview 05-20',
            value: 'models/gemini-2.0-flash-thinking-exp-1219'
        },
        {
            label: 'Gemini 2.5 Flash Preview TTS',
            value: 'models/gemini-2.5-flash-preview-tts'
        },
        {
            label: 'Gemini 2.5 Pro Preview TTS',
            value: 'models/gemini-2.5-pro-preview-tts'
        },
        {
            label: 'LearnLM 2.0 Flash Experimental',
            value: 'models/learnlm-2.0-flash-experimental'
        },
        { label: 'Gemma 3 1B', value: 'models/gemma-3-1b-it' },
        { label: 'Gemma 3 4B', value: 'models/gemma-3-4b-it' },
        { label: 'Gemma 3 12B', value: 'models/gemma-3-12b-it' },
        { label: 'Gemma 3 27B', value: 'models/gemma-3-27b-it' },
        { label: 'Gemma 3n E4B', value: 'models/gemma-3n-e4b-it' },
        { label: 'Gemma 3n E2B', value: 'models/gemma-3n-e2b-it' },
        { label: 'Embedding 001', value: 'models/embedding-001' },
        { label: 'Text Embedding 004', value: 'models/text-embedding-004' },
        {
            label: 'Gemini Embedding Experimental 03-07',
            value: 'models/gemini-embedding-exp-03-07'
        },
        {
            label: 'Gemini Embedding Experimental',
            value: 'models/gemini-embedding-exp'
        },
        {
            label: 'Gemini Embedding 001',
            value: 'models/gemini-embedding-001'
        },
        {
            label: 'Model that performs Attributed Question Answering.',
            value: 'models/aqa'
        },
        {
            label: 'Imagen 3.0 002 model',
            value: 'models/imagen-3.0-generate-002'
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
                                                    return <MenuItem key={models.value} value={models.value}>
                                                        {models.label}
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
                <Card elevation={1} sx={{ borderRadius, borderBottomLeftRadius: 0, borderBottomRightRadius: 0 }}>
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
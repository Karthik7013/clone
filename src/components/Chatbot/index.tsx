import React, { useEffect } from 'react';
import chat_bot from "../../assets/images/gemini_ai_.svg";
import { Alert, Avatar, Box, Button, Card, CardActions, CardContent, CircularProgress, Collapse, Divider, IconButton, keyframes, List, ListItem, ListItemIcon, ListItemText, Menu, MenuItem, Paper, Skeleton, Stack, TextField, Typography } from '@mui/material';
import OpenInNewRoundedIcon from '@mui/icons-material/OpenInNewRounded';
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
type conversationProps = {
    candidate: 'user' | 'bot',
    response: string,
    timeStamp: string
}
interface BotSubmitType {
    t: string
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
            t: ''
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
                {(candidate === 'user') && <Typography sx={{ p: 1.5, borderRadius, borderTopRightRadius: 0 }} component={Paper}>{response}</Typography>}
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

    return (
        <Stack height={"100%"} position={'relative'} bgcolor={'background.paper'}>
            {/* header */}
            <Box position={'sticky'} top={0} left={0}>
                <CardContent>
                    <ListItem disableGutters disablePadding
                        secondaryAction={
                            <IconButton edge="end" aria-label="delete">
                                <OpenInNewRoundedIcon />
                            </IconButton>
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
                    <Stack gap={2} justifyContent={'center'} width={'100%'} flexGrow={1} >
                        <Typography variant='h4' fontWeight={600} textAlign='center'>🖐 Hi there<br /> how can i help you today ?</Typography>
                        <Typography variant='caption' fontWeight={600} textAlign='center'>Ready to help.</Typography>
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
            <Box position={'sticky'} bottom={0} left={0} component='form' onSubmit={handleSubmit(onHandleSubmit)}>
                <Collapse in={Boolean(errorVisible)} unmountOnExit orientation='vertical'>

                    {isFetchBaseQueryError(error) &&
                        typeof error.data === 'object' &&
                        error.data !== null &&
                        'message' in error.data && typeof error.data.message === 'string' && (
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
                                {error.data.message}
                            </Alert>
                        )}

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
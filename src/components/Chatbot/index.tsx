import React from 'react';
import chat_bot from "../../assets/images/gemini_ai_.svg";
import { Avatar, Box, Card, CardActions, CardContent, Divider, IconButton, List, ListItem, ListItemIcon, ListItemText, Skeleton, Stack, TextField, Toolbar, Typography } from '@mui/material';
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

import VolumeUpRoundedIcon from '@mui/icons-material/VolumeUpRounded';
type conversationProps = {
    candidate: 'user' | 'bot',
    response: string,
    timeStamp: string
}
interface BotSubmitType {
    t: string
}

function speakText(text) {
    const speech = new SpeechSynthesisUtterance(text);

    // Optional: set voice, pitch, and rate
    speech.pitch = 1;  // Range: 0 to 2
    speech.rate = 1;   // Range: 0.1 to 10
    speech.lang = 'en-US'; // Set language

    window.speechSynthesis.speak(speech);
}

const Chatbot = () => {
    const borderRadius = useSelector((state: RootState) => state.themeReducer.borderRadius)
    const dispatch: AppDispatch = useDispatch()
    const { handleSubmit, control, reset } = useForm<BotSubmitType>({
        defaultValues: {
            t: ''
        }
    })
    const conversation = useSelector((state: RootState) => state.chatbotReducer.conversation);
    const [handleSendMessage, { isLoading }] = useSendMessageMutation();

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



    const Conversation = ({ candidate, response }: conversationProps) => {

        return <ListItem alignItems="flex-start">
            <Stack direction='row' width='100%' gap={1} mb={2}>
                <Box order={candidate === 'bot' ? 1 : 0} flexGrow={1} display='flex' justifyContent={candidate === 'user' ? 'flex-end' : 'flex-start'}>
                    <Box position='relative'>
                        <Card sx={{ padding: '10px', borderRadius: '10px', overflowY: 'auto', textWrap: 'wrap' }}>
                            {!(candidate === 'user') && <Avatar sx={{ width: '26px', height: '26px' }} src={chat_bot} alt="Remy Sharp" />}
                            <Box overflow={"auto"}>
                                <Box component='div' fontSize={'0.8rem'} dangerouslySetInnerHTML={{ __html: response }} />
                            </Box>
                            <Stack direction='row'>
                                <IconButton size='small' onClick={()=> speakText(response)}>
                                    <VolumeUpRoundedIcon fontSize='inherit' />
                                </IconButton>
                            </Stack>
                        </Card>
                    </Box>
                </Box>
            </Stack>
        </ListItem>
    }

    const ChatLoader = () => < ListItem alignItems="flex-start">
        <Stack direction='row' width='100%' gap={1} mb={2}>
            <Box order={0}>
                <Avatar sx={{ width: '26px', height: '26px' }} src={chat_bot} alt="Remy Sharp" />
            </Box>
            <Box order={1} flexGrow={1} display='flex' justifyContent={'flex-start'}>
                <Box position='relative'>
                    <Stack>
                        <Skeleton animation="wave" width={160} />
                        <Skeleton animation="wave" width={180} />
                        <Skeleton animation="wave" width={200} />
                    </Stack>
                </Box>
            </Box>
        </Stack>
    </ListItem>


    return (
        <Stack height={"100%"} position={'relative'}>
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
                            <Avatar src={chat_bot} sx={{ width: '42px', height: '42px', mr: 2 }} />
                        </ListItemIcon>
                        <ListItemText
                            primary={<Typography variant='body2'>Groot AI</Typography>}
                            secondary={<Typography variant='caption'><CircleIcon fontSize='inherit' sx={{ mr: 1 }} color='success' />Online</Typography>}
                        />
                    </ListItem>
                </CardContent>
                <Divider />
            </Box>
            <Box flexGrow={1} overflow={'auto'} >
                {!conversation.length && <Box height={'100%'} display='flex' alignItems='center' flexDirection='column' justifyContent='space-between'>
                    <Stack gap={2} justifyContent={'center'} width={'100%'} flexGrow={1} >
                        <Typography variant='h4' fontWeight={600} textAlign='center'>Hi sara<br /> how can i help you today ?</Typography>
                        <Typography variant='caption' fontWeight={600} textAlign='center'>caption</Typography>
                    </Stack>
                    <Toolbar sx={{ justifyItems: 'flex-start', gap: 2, flexWrap: 'wrap' }}>
                    </Toolbar>
                </Box>}


                <List disablePadding>
                    {conversation.map((content, _) => {
                        return <Conversation key={_} candidate={content.candidate} response={content.response} timeStamp={content.timeStamp} />
                    })}
                    {isLoading && <ChatLoader />}
                </List>
            </Box>
            <Box position={'sticky'} bottom={0} left={0} component='form' onSubmit={handleSubmit(onHandleSubmit)}>
                <Box component={Card} sx={{ borderRadius }}>
                    <CardContent>


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
                            <Box flexGrow={1} />
                            <IconButton><MicRoundedIcon /></IconButton>
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
                </Box>
            </Box>
        </Stack >
    )
}

export default React.memo(Chatbot);
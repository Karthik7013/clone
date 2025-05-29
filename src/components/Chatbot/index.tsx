import React from 'react';
import chat_bot from "../../assets/images/gemini_ai_.svg";
import { Avatar, Box, Card, CardActions, CardContent, Divider, IconButton, InputAdornment, List, ListItem, ListItemIcon, ListItemText, Skeleton, Stack, TextField, Typography } from '@mui/material';
// import SendRoundedIcon from '@mui/icons-material/SendRounded';
import OpenInNewRoundedIcon from '@mui/icons-material/OpenInNewRounded';
import { AppDispatch, RootState } from '../../store/store';
import { useDispatch, useSelector } from 'react-redux';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
// import { makeQuery, pushMessage } from '../../redux/slice/botSlice';
import AutoAwesomeRoundedIcon from '@mui/icons-material/AutoAwesomeRounded';
import StopCircleRoundedIcon from '@mui/icons-material/StopCircleRounded';
// import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
// import ThumbDownOffAltOutlinedIcon from '@mui/icons-material/ThumbDownOffAltOutlined';
import CircleIcon from '@mui/icons-material/Circle';
import { useSendMessageMutation } from '../../features/chatbot/chatbotApi';
import { pushMessage } from '../../features/chatbot/chatbotSlice';

type conversationProps = {
    candidate: 'user' | 'bot',
    response: string,
    timeStamp: string
}
interface BotSubmitType {
    t: string
}

const Chatbot = () => {
    const dispatch: AppDispatch = useDispatch()
    const { handleSubmit, control, formState: { errors }, reset } = useForm<BotSubmitType>({
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
        try {
            const result = await handleSendMessage(data).unwrap();
            dispatch(pushMessage({
                canditate: 'bot',
                t: result.data.response,
                timeStamp: result.data.timeStamp
            }));
        } finally {
            reset(); // ensure it's always called
        }
    };



    const Conversation = ({ candidate, response, timeStamp }: conversationProps) => {
        return <ListItem alignItems="flex-start">
            <Stack direction='row' width='100%' gap={1} mb={2}>
                <Box order={candidate === 'bot' ? 0 : 1}>
                    <Avatar sx={{ width: '26px', height: '26px' }} src={candidate === 'user' ? 'https://avatar.iran.liara.run/public' : chat_bot} alt="Remy Sharp" />
                </Box>
                <Box order={candidate === 'bot' ? 1 : 0} flexGrow={1} display='flex' justifyContent={candidate === 'user' ? 'flex-end' : 'flex-start'}>
                    <Box position='relative'>
                        <Card sx={{ padding: '10px ', borderRadius: '10px', overflow: 'auto' }}>
                            <Typography dangerouslySetInnerHTML={{ __html: response }} variant='caption' />
                        </Card>
                        <Typography position='absolute' left={2} fontSize='0.6em' bottom={'-20px'} component='div' variant='caption' color='text.secondary'>{timeStamp.split('T')[0]}</Typography>
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
        <>
            <Box>
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
                            primary={<Typography variant='body2'>AI Support</Typography>}
                            secondary={<Typography variant='caption'><CircleIcon fontSize='inherit' sx={{ mr: 1 }} color='success' />Online</Typography>}
                        />
                    </ListItem>
                </CardContent>
                <Divider />
            </Box>
            <Box flexGrow={1} overflow={'auto'}>
                <List>
                    {conversation.map((content, _) => {
                        return <Conversation key={_} candidate={content.candidate} response={content.response} timeStamp={content.timeStamp} />
                    })}
                    {isLoading && <ChatLoader />}
                </List>
            </Box>
            <Box component='form' onSubmit={handleSubmit(onHandleSubmit)}>
                <Divider />
                <CardActions sx={{ position: 'sticky', bottom: 0, zIndex: 9999 }}>
                    <Avatar src='https://avatar.iran.liara.run/public' sx={{ width: '32px', height: '32px' }} />
                    <Controller
                        name="t"
                        control={control}
                        rules={{ required: 'Ask Something !' }}
                        render={({ field }) => (
                            <TextField
                                sx={{ flex: 1 }}
                                placeholder='Ask anything'
                                multiline
                                size='small'
                                maxRows={4}
                                variant="outlined"
                                error={!!errors.t}
                                helperText={errors.t?.message}
                                value={field.value}
                                onChange={field.onChange}
                                onBlur={field.onBlur}
                                name={field.name}
                                inputRef={field.ref}
                                InputProps={{
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
                                    ),
                                }}
                            />

                        )}
                    />
                </CardActions>
            </Box>
        </>
    )
}

export default React.memo(Chatbot);
import React, { useEffect, useState } from 'react';
import chat_bot from "../../assets/gemini_ai_.svg";
import { alpha, Avatar, Box, Card, CardActions, CardContent, Chip, CircularProgress, Divider, Fab, IconButton, InputAdornment, List, ListItem, ListItemAvatar, ListItemIcon, ListItemText, Menu, Skeleton, Stack, styled, TextField, Toolbar, Typography, useTheme } from '@mui/material';
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import OpenInNewRoundedIcon from '@mui/icons-material/OpenInNewRounded';
import { AppDispatch, RootState } from '../../redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { makeQuery, pushMessage } from '../../redux/slice/botSlice';
import AutoAwesomeRoundedIcon from '@mui/icons-material/AutoAwesomeRounded';
import StopCircleRoundedIcon from '@mui/icons-material/StopCircleRounded';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownOffAltOutlinedIcon from '@mui/icons-material/ThumbDownOffAltOutlined';
import CircleIcon from '@mui/icons-material/Circle';
export const ChatMiniWrapper = () => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose2 = () => {
        setAnchorEl(null);
    };
    return <Box sx={{ right: '16px', position: 'fixed', bottom: '16px' }}>
        <Fab
            onClick={handleClick}
            size="small"
            sx={{ ml: 2, borderRadius: '16px' }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            aria-label="add">
            <Avatar src={chat_bot} sx={{ width: '100%', height: '100%' }} />
        </Fab>

        <Menu
            anchorEl={anchorEl}
            id="account-menu"
            open={open}
            onClose={handleClose2}
            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        >
            <Box sx={{ width: 320, height: 560, overflow: 'auto' }} component={Stack}
            >
                <ChatBot />
            </Box>
        </Menu >
    </Box >
}

export const ChatBot = () => {
    const dispatch: AppDispatch = useDispatch()
    const { handleSubmit, control, reset } = useForm<BotSubmitType>()
    const conversation = useSelector((state: RootState) => state.bot.conversation);
    const loading = useSelector((state: RootState) => state.bot.loading)


    interface BotSubmitType {
        t: string
    }

    const onHandleSubmit: SubmitHandler<BotSubmitType> = (data) => {
        dispatch(pushMessage(data))
        dispatch(makeQuery(data));
        reset()
    }
    type conversationProps = {
        candidate: 'user' | 'bot',
        response: String,
        timeStamp: String
    }

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
                    {loading && < ListItem alignItems="flex-start">
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
                    </ListItem>}
                </List>

            </Box >
            <Box>
                <Divider />
                <form onSubmit={handleSubmit(onHandleSubmit)}>
                    <CardActions sx={{ position: 'sticky', bottom: 0, zIndex: 9999 }}>
                        <Avatar src='https://avatar.iran.liara.run/public' sx={{ width: '32px', height: '32px' }} />
                        <Controller
                            defaultValue=''
                            name="t"
                            control={control}
                            rules={{ required: 'Ask Something !' }}
                            render={({ field }) => (
                                <TextField
                                    sx={{ flex: 1 }} size='small'
                                    placeholder='Enter your message'
                                    {...field}
                                    multiline
                                    maxRows={4}
                                    variant="outlined"
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <IconButton disableRipple disableTouchRipple disableFocusRipple type='submit' disabled={loading} color='default'>
                                                    {loading ? <StopCircleRoundedIcon color='action' /> : <AutoAwesomeRoundedIcon color='warning' />}
                                                </IconButton>
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                            )}
                        />

                    </CardActions>
                </form>
            </Box>
        </>
    )
}

export default React.memo(ChatMiniWrapper)
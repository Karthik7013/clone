import React, { useEffect, useState } from 'react';
import chat_bot from "../../assets/gemini_ai_.svg";
import { alpha, Avatar, Box, CardActions, CardContent, Chip, CircularProgress, Divider, Fab, IconButton, InputAdornment, List, ListItem, ListItemAvatar, ListItemIcon, ListItemText, Menu, Skeleton, Stack, styled, TextField, Toolbar, Typography, useTheme } from '@mui/material';
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { AppDispatch, RootState } from '../../redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { Controller, useForm } from 'react-hook-form';
import { makeQuery, pushMessage } from '../../redux/slice/botSlice';
import AutoAwesomeRoundedIcon from '@mui/icons-material/AutoAwesomeRounded';
import StopCircleRoundedIcon from '@mui/icons-material/StopCircleRounded';
const ChatBot = () => {
    const dispatch: AppDispatch = useDispatch()
    const { handleSubmit, control, reset } = useForm()
    const conversation = useSelector((state: RootState) => state.bot.conversation);
    const loading = useSelector((state: RootState) => state.bot.loading)
    const theme = useTheme()
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose2 = () => {
        setAnchorEl(null);
    };

    const onHandleSubmit = (data) => {
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
                        <Box sx={{ bgcolor: alpha(theme.palette.divider, 0.07), padding: '0.7px 10px ', borderRadius: '10px', maxWidth: '220px' }}>
                            <Typography variant='caption'>
                                {response}
                            </Typography>
                        </Box>
                        <Typography position='absolute' left={2} fontSize='0.6em' bottom={'-20px'} component='caption' variant='caption' color='text.secondary'>{timeStamp.split('T')[0]}</Typography>
                    </Box>
                </Box>
            </Stack>
        </ListItem>
    }


    return (
        <Box sx={{ right: '16px', position: 'fixed', bottom: '16px' }}>
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
                    <Box>
                        <CardContent>
                            <ListItem disableGutters disablePadding
                                secondaryAction={
                                    <IconButton onClick={handleClose2} edge="end" aria-label="delete">
                                        <CloseRoundedIcon />
                                    </IconButton>
                                }
                            >
                                <ListItemIcon>
                                    <Avatar src={chat_bot} sx={{ width: '42px', height: '42px', mr: 2 }} />
                                </ListItemIcon>
                                <ListItemText
                                    primary="AI Support"
                                    secondary={"online"}
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

                        </List>



                    </Box>
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
                                            variant="outlined"
                                            InputProps={{
                                                endAdornment: (
                                                    <InputAdornment position="end">
                                                        <IconButton disableFocusRipple type='submit' disabled={loading} color='default'>
                                                            {loading ? <StopCircleRoundedIcon color='action' /> : <AutoAwesomeRoundedIcon />}
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
                </Box>
            </Menu >
        </Box >
    )
}

export default React.memo(ChatBot)
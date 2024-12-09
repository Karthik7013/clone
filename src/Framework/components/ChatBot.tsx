import React, { useState } from 'react';
import chat_bot from "../../assets/chat_bot.png";
import { Avatar, Box, CardActions, CardContent, Chip, CircularProgress, Divider, Fab, IconButton, List, ListItem, ListItemAvatar, ListItemIcon, ListItemText, Menu, Skeleton, Stack, styled, TextField, Typography, useTheme } from '@mui/material';
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { AppDispatch, RootState } from '../../redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { Controller, useForm } from 'react-hook-form';
import { makeQuery } from '../../redux/slice/botSlice';
const ChatBot = () => {
    const dispatch: AppDispatch = useDispatch()
    const { handleSubmit, control } = useForm()
    const conversation = useSelector((state: RootState) => state.bot.conversation)
    const loading = useSelector((state: RootState) => state.bot.loading)
    const theme = useTheme()
    console.log(conversation,'chatbot rendered')
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose2 = () => {
        setAnchorEl(null);
    };

    const onHandleSubmit = (data) => {
        console.log(data);
        dispatch(makeQuery(data))
    }


    return (
        <Box sx={{ right: '16px', position: 'fixed', bottom: '16px' }}>
            <Fab
                onClick={handleClick}
                size="small"
                sx={{ ml: 2 }}
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

                <Box sx={{ width: 300, height: 560, overflow: 'auto', position: 'relative' }}>
                    <CardContent>
                        <ListItem disablePadding
                            secondaryAction={
                                <IconButton onClick={handleClose2} edge="end" aria-label="delete">
                                    <CloseRoundedIcon />
                                </IconButton>
                            }
                        >
                            <ListItemIcon>

                                <Avatar src={chat_bot} sx={{ width: '52px', height: '52px', mr: 2 }} />

                            </ListItemIcon>
                            <ListItemText
                                primary="Chat bot"
                                secondary={"online"}
                            />
                        </ListItem>

                    </CardContent>
                    <Divider />
                    <CardContent sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                        <List disablePadding>
                            <ListItem alignItems="flex-start" disableGutters disablePadding>
                                <ListItemAvatar>
                                    <Avatar src={chat_bot} alt="Remy Sharp" />
                                </ListItemAvatar>
                                <ListItemText
                                    primary={<Typography variant='subtitle2'>How can i help you !</Typography>}
                                    secondary={
                                        <Typography variant='caption' color='text.secondary'>
                                            {" 26 Nov 1999"}
                                        </Typography>
                                    }
                                />
                            </ListItem>
                            <ListItem alignItems="flex-start" disableGutters disablePadding>

                                <ListItemText
                                    primary={<Typography variant='subtitle2'>How can i help you !</Typography>}
                                    secondary={
                                        <Typography variant='caption' color='text.secondary'>
                                            {" 26 Nov 1999"}
                                        </Typography>
                                    }
                                />
                                <ListItemAvatar>
                                    <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                                </ListItemAvatar>
                            </ListItem>
                        </List>

                    </CardContent>
                    <Divider />
                    <form onSubmit={handleSubmit(onHandleSubmit)}>
                        <CardActions sx={{ position: 'sticky', bottom: 0, zIndex: 9999, bgcolor: theme.palette.background.paper }}>
                            <Avatar sx={{ width: '32px', height: '32px' }} />
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
                                    />
                                )}
                            />
                            <IconButton type='submit' disabled={loading} color='primary'>
                                {loading ? <CircularProgress size="20px" /> : <SendRoundedIcon />}
                            </IconButton>
                        </CardActions>
                    </form>
                </Box>
            </Menu >
        </Box >
    )
}

export default React.memo(ChatBot)
import React, { useState } from 'react';
import chat_bot from "../../assets/chat_bot.png";
import { Avatar, Box, CardActions, CardContent, Chip, Divider, Fab, IconButton, ListItem, ListItemIcon, ListItemText, Menu, Skeleton, Stack, TextField } from '@mui/material';
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
const ChatBot = () => {
    console.log('chatbot rendered')
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose2 = () => {
        setAnchorEl(null);
    };
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

                <Box sx={{ width: 300 }}>
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
                        {[1, 2, 3, 4, 5].map((e: number) => {
                            return <Stack key={e} direction={'row'} gap={1} alignItems={'center'}>
                                <Avatar src={chat_bot} sx={{ width: '32px', height: '32px' }} /><Chip size='small' label='Hi👋🏻 How can i Help you ?'></Chip>
                            </Stack>
                        })}
                        <Stack direction={'row'} gap={1} alignItems={'center'}>
                            <Skeleton variant='circular' width={'40px'} height={'32px'} />
                            <Box width={'100%'}>
                                <Skeleton width={'70%'} height={'1rem'} />
                                <Skeleton width={'50%'} height={'1rem'} />
                            </Box>
                        </Stack>
                        <Stack direction={'row'} gap={1} alignItems={'flex-end'}>
                            <Box width={'100%'}>
                                <Skeleton width={'70%'} height={'1rem'} />
                                <Skeleton width={'50%'} height={'1rem'} />
                            </Box>
                            <Skeleton variant='circular' width={'40px'} height={'32px'} />
                        </Stack>
                    </CardContent>
                    <Divider />
                    <CardActions>
                        <Avatar sx={{ width: '32px', height: '32px' }} />
                        <TextField placeholder='Enter your message' sx={{ flex: 1 }} size='small' />
                        <IconButton color='primary'>
                            <SendRoundedIcon />
                        </IconButton>
                    </CardActions>
                </Box>
            </Menu >
        </Box >
    )
}

export default React.memo(ChatBot)
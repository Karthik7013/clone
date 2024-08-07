import React from 'react';
import chat_bot from "../../assets/chat_bot.png";
import { Avatar, Box, Button, Card, CardActions, CardContent, CardMedia, Chip, Fab, IconButton, Stack, TextField, Toolbar, Typography } from '@mui/material';
import SendRoundedIcon from '@mui/icons-material/SendRounded';
const ChatBot = () => {
    return (
        <Box sx={{ zIndex: 999999, right: '16px', position: 'fixed', bottom: '16px' }}>
            <Fab aria-label="add">
                <Avatar src={chat_bot} sx={{ width: '100%', height: '100%' }} />
            </Fab>
            <Card sx={{ width: 380 }}>
                <CardMedia
                    sx={{ height: 140 }}
                    image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
                />
                <CardContent sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>

                    {[1, 2, 3, 4, 5].map((e: number) => {
                        return <Stack key={e} direction={'row'} gap={1} alignItems={'center'}>
                            <Avatar src={chat_bot} sx={{ width: '32px', height: '32px' }} /><Chip size='small' label='Hi👋🏻 How can i Help you ?'></Chip>
                        </Stack>
                    })}


                </CardContent>
                <CardActions>
                    <TextField placeholder='Enter your message' sx={{ flex: 1 }} size='small' />
                    <IconButton color='primary'>
                        <SendRoundedIcon />
                    </IconButton>
                </CardActions>
            </Card>
        </Box>
    )
}

export default ChatBot
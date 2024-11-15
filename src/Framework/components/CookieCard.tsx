import { Box, Button, Card, CardContent, Divider, ListItem, ListItemText, Stack, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import CookieRoundedIcon from '@mui/icons-material/CookieRounded';
import { AppDispatch } from '../../redux/store';
import { useDispatch } from 'react-redux';
import { handleCookieConsent } from '../../redux/slice/uiSlice';
const CookieCard = () => {
    const dispatch: AppDispatch = useDispatch();
    const cookieAcceptHandle = (cookieAccept:boolean) => {
        if (cookieAccept) {
            document.cookie = `cookie-accept=${true}; path=/; max-age=${60 * 60 * 24 * 365}`
        } else {
            document.cookie = `cookie-accept=${false}; path=/; max-age=${60 * 60 * 24 * 365}`
        }
        dispatch(handleCookieConsent(false))
    }
    return (
        <Card
            sx={{
                width: 500,
                maxWidth: 650,
                position: 'fixed',
                right: 80,
                bottom: 10,
                zIndex:99999,
            }}
        >
                <ListItem >
                    <CookieRoundedIcon fontSize='large' color='warning' sx={{ mr: 1 }} />
                    <ListItemText>
                        <Typography variant="body1" >Privacy Preference Center</Typography>
                    </ListItemText>
                </ListItem>
        

            <CardContent sx={{ py: 0 }}>
                <Typography variant="caption" color="text.secondary">
                    We use Cookies for login,checkout and stats.
                </Typography>
                <Typography variant="caption" color="text.secondary">
                    Learn more in our <Link to='#'>privacy settings</Link>
                </Typography>
                <Stack
                    direction={'row'}
                    justifyContent={"space-between"}
                >
                    <Box flex={1}/>
                    <Box>
                        <Button variant='outlined' color='error' sx={{ mr: 1 }} onClick={() => cookieAcceptHandle(false)}>Reject
                        </Button>
                        <Button variant="outlined" onClick={() => cookieAcceptHandle(true)}>Accept
                        </Button>
                    </Box>
                </Stack>
            </CardContent>

        </Card >


    )
}

export default CookieCard
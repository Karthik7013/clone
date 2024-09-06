import { Box, Button, Card, CardContent, Divider, ListItem, ListItemText, Stack, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import CookieRoundedIcon from '@mui/icons-material/CookieRounded';
import { AppDispatch } from '../../redux/store';
import { useDispatch } from 'react-redux';
import { handleCookieConsent } from '../../redux/slice/uiSlice';
const CookieCard = () => {
    const dispatch: AppDispatch = useDispatch();


    const cookieAcceptHandle = (cookieAccept) => {
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
                bottom: 10
            }}
        >
            <CardContent component={Stack}>
                <ListItem disablePadding>
                    <CookieRoundedIcon sx={{ mr: 1 }} />
                    <ListItemText>
                        <Typography variant="h6" >Privacy Preference Center</Typography>
                    </ListItemText>
                </ListItem>
            </CardContent>

            <CardContent sx={{ py: 0 }}>




                <Typography variant="body2">
                    We use Cookies for login,checkout and stats.
                </Typography>
                <Typography variant="body2">
                    Learn more in our <Link to='#'>privacy settings</Link>
                </Typography>
                <Stack
                    mt={1}
                    direction={'row'}
                    justifyContent={"space-between"}
                >
                    <Box flex={1}></Box>
                    <Box>
                        <Button sx={{ mr: 1 }} onClick={() => cookieAcceptHandle(false)}>Reject
                        </Button>
                        <Button variant="contained" onClick={() => cookieAcceptHandle(true)}>Accept
                        </Button>
                    </Box>
                </Stack>
            </CardContent>

        </Card >


    )
}

export default CookieCard
import { Box, Button, Card, CardContent, Divider, ListItem, ListItemText, Stack, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import CookieRoundedIcon from '@mui/icons-material/CookieRounded';
const CookieCard = () => {
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
            <Divider sx={{ mb: 1 }} />
            <CardContent sx={{py:0}}>




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
                        <Button sx={{ mr: 1 }}>Reject
                        </Button>
                        <Button variant="contained">Accept
                        </Button>
                    </Box>
                </Stack>
            </CardContent>

        </Card >


    )
}

export default CookieCard
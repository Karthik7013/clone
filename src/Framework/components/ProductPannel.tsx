import { Box, Card, CardContent, Divider, Grid, Link, List, ListItem, ListItemButton, ListItemIcon, ListItemText, ListSubheader, Typography } from '@mui/material'
import React from 'react'
import CircleRoundedIcon from '@mui/icons-material/CircleRounded';
const ProductPannel = () => {

    const product = {


        "dropdown": [
            {
                "category": "Health Insurance",
                "products": [
                    { "name": "Individual Health Plans", "url": "/health/individual" },
                    { "name": "Family Health Plans", "url": "/health/family" },
                    { "name": "Group Health Insurance", "url": "/health/group" },
                    { "name": "Dental Insurance", "url": "/health/dental" },
                    { "name": "Vision Insurance", "url": "/health/vision" }
                ]
            },
            {
                "category": "Life Insurance",
                "products": [
                    { "name": "Term Life Insurance", "url": "/life/term" },
                    { "name": "Whole Life Insurance", "url": "/life/whole" },
                    { "name": "Universal Life Insurance", "url": "/life/universal" },
                    { "name": "Final Expense Insurance", "url": "/life/final-expense" }
                ]
            },
            {
                "category": "Auto Insurance",
                "products": [
                    { "name": "Car Insurance", "url": "/auto/car" },
                    { "name": "Motorcycle Insurance", "url": "/auto/motorcycle" },
                    { "name": "Commercial Auto Insurance", "url": "/auto/commercial" },
                    { "name": "Classic Car Insurance", "url": "/auto/classic" }
                ]
            },
            {
                "category": "Home Insurance",
                "products": [
                    { "name": "Homeowners Insurance", "url": "/home/homeowners" },
                    { "name": "Renters Insurance", "url": "/home/renters" },
                    { "name": "Condo Insurance", "url": "/home/condo" },
                    { "name": "Flood Insurance", "url": "/home/flood" },
                    { "name": "Earthquake Insurance", "url": "/home/earthquake" }
                ]
            },
            {
                "category": "Business Insurance",
                "products": [
                    { "name": "General Liability Insurance", "url": "/business/general-liability" },
                    { "name": "Workers' Compensation Insurance", "url": "/business/workers-comp" },
                    { "name": "Commercial Property Insurance", "url": "/business/commercial-property" },
                    { "name": "Business Interruption Insurance", "url": "/business/interruption" },
                    { "name": "Professional Liability Insurance", "url": "/business/professional-liability" }
                ]
            },
            {
                "category": "Travel Insurance",
                "products": [
                    { "name": "Trip Cancellation Insurance", "url": "/travel/cancellation" },
                    { "name": "Medical Travel Insurance", "url": "/travel/medical" },
                    { "name": "Lost Luggage Insurance", "url": "/travel/lost-luggage" },
                    { "name": "Emergency Evacuation Insurance", "url": "/travel/emergency-evacuation" }
                ]
            },
            {
                "category": "Pet Insurance",
                "products": [
                    { "name": "Dog Insurance", "url": "/pet/dog" },
                    { "name": "Cat Insurance", "url": "/pet/cat" },
                    { "name": "Exotic Pet Insurance", "url": "/pet/exotic" }
                ]
            },
            {
                "category": "Specialty Insurance",
                "products": [
                    { "name": "Cyber Insurance", "url": "/specialty/cyber" },
                    { "name": "Flood Insurance", "url": "/specialty/flood" },
                    { "name": "Identity Theft Protection", "url": "/specialty/identity-theft" },
                    { "name": "Umbrella Insurance", "url": "/specialty/umbrella" }
                ]
            }
        ]
    }

    const Category = ({ group }) => {
        return <List
            dense
            sx={{ width: '100dvw' }}
            subheader={
                <Typography variant='caption'>
                    {group?.category}
                </Typography>
            }
        >
            {group?.products.map((each) => <ListItem>
                <ListItemIcon><CircleRoundedIcon sx={{ fontSize: '0.5em' }} /></ListItemIcon>
                <ListItemText primary={<Link variant='caption' component="a" href='#'>{each.name}</Link>} />
            </ListItem>)}
        </List>
    }
    return (

        <CardContent>
            <Typography variant='h6' gutterBottom>Insurance Products</Typography>
            <Divider />
            <Grid container mt={1}>
                {product.dropdown.map((group) => {
                    return <Grid item xs={12} md={4}><Category group={group} /></Grid>
                })}

            </Grid>
        </CardContent>
    )
}

export default ProductPannel
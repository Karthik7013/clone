import { Button, CardContent, Divider, Grid, Link, List, ListItem, ListItemIcon, ListItemText, Popover, Typography } from '@mui/material'
import React, { useState } from 'react'
import CircleRoundedIcon from '@mui/icons-material/CircleRounded';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
const ProductPannel = () => {
    const [anchorElProducts, setAnchorElProducts] = useState<HTMLElement | null>(null);
    // functions for product-menu-dropdown open/close
    const handleOpenProductMenu = (event: any) => setAnchorElProducts(event.currentTarget)

    const handleCloseProductMenu = () => setAnchorElProducts(null)

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
            }
        ]
    }

    const Category = ({ group }: { group: { category: string, products: { name: string, url: string }[] } }) => {
        return <List
            dense
            sx={{ width: '100dvw' }}
            subheader={
                <Typography variant='subtitle2'>
                    {group?.category}
                </Typography>
            }
        >
            {group?.products.map((each: { name: string }, _: number) => <ListItem key={_}>
                <ListItemIcon><CircleRoundedIcon sx={{ fontSize: '0.5em' }} /></ListItemIcon>
                <ListItemText primary={<Link variant='caption' component="a" href='#'>{each.name}</Link>} />
            </ListItem>)}
        </List>
    }
    return (
        <>
            <Button
                onMouseEnter={handleOpenProductMenu}
                onMouseLeave={handleOpenProductMenu}
                sx={{
                    color: 'white',
                    cursor: 'pointer',
                }}
                endIcon={<ArrowDropDownIcon sx={{ rotate: anchorElProducts ? '180deg' : '' }} />}
            >
                Insurance Products
            </Button>
            <Popover
                sx={{ marginTop: 8 }}
                open={Boolean(anchorElProducts)}
                anchorEl={anchorElProducts}

            >

                <CardContent onMouseLeave={handleCloseProductMenu}>
                    <Typography variant='h6' gutterBottom>Insurance Products</Typography>
                    <Divider />
                    <Grid container mt={1}>
                        {product.dropdown.map((group, _) => {
                            return <Grid key={_} item xs={12} md={4}><Category group={group} /></Grid>
                        })}
                    </Grid>
                </CardContent>
            </Popover>
        </>
    )
}

export default React.memo(ProductPannel)
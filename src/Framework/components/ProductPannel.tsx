import { Box, Card, CardContent, Divider, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, ListSubheader, Typography } from '@mui/material'
import React from 'react'

const ProductPannel = () => {

    const Category = () => <List
        dense
        sx={{ width: '100dvw' }}

        subheader={
            <Typography variant='caption'>
                Nested List Items
            </Typography>
        }
    >
        <ListItem>
            <ListItemText primary="Sent mail" />
        </ListItem>
        <ListItem>
            <ListItemText primary="Drafts" />
        </ListItem>
    </List>
    return (

        <CardContent>
            <Typography variant='h6' gutterBottom>Insurance Products</Typography>
            <Divider />
            <Grid container mt={1}>
                <Grid item xs={12} md={4}><Category /></Grid>
                <Grid item xs={12} md={4}><Category /></Grid>
                <Grid item xs={12} md={4}><Category /></Grid>
                <Grid item xs={12} md={4}><Category /></Grid>
                <Grid item xs={12} md={4}><Category /></Grid>
                <Grid item xs={12} md={4}><Category /></Grid>
                <Grid item xs={12} md={4}><Category /></Grid>
                <Grid item xs={12} md={4}><Category /></Grid>
                <Grid item xs={12} md={4}><Category /></Grid>
                <Grid item xs={12} md={4}><Category /></Grid>

            </Grid>
            <Typography>My Products</Typography>
        </CardContent>

    )
}

export default ProductPannel
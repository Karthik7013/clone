import React from "react";
import { Alert, Badge, Box, Button, ButtonGroup, Card, CardContent, CardMedia, Checkbox, Chip, Container, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Divider, Drawer, FormControlLabel, FormGroup, Grid, LinearProgress, List, ListItem, Paper, Skeleton, Slide, Slider, Stack, TextField, Toolbar, Typography } from "@mui/material"
import { Link } from "react-router-dom"
import TuneRoundedIcon from '@mui/icons-material/TuneRounded';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import CompareArrowsRoundedIcon from '@mui/icons-material/CompareArrowsRounded';
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded"
import { useState } from "react";
import InfoRoundedIcon from '@mui/icons-material/InfoRounded';
import MessageBox from "../../Framework/components/MessageBox";
import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch, RootState } from '../../redux/store'
import { handleAddtoCompare, handleEmptyCompare } from "../../redux/slice/uiSlice";
import CancelRoundedIcon from '@mui/icons-material/CancelRounded';
import Quotes from "../../Framework/components/Quote";
const LoanQuotesPage = () => {
    const dispatch: AppDispatch = useDispatch();
    const [viewDetails, setViewDetails] = useState(false)
    const [isMobile, setIsMobile] = useState<boolean>(false);
    const compareProducts = useSelector((state: RootState) => state.ui.productsCompare);
    const scrollBarStyles = {
        overflow: 'auto', // Enable scrollbars
        '&::-webkit-scrollbar': {
            width: '0.7em', // Width of the scrollbar
        },
        '&::-webkit-scrollbar-track': {
            backgroundColor: '#F5F7F8', // Color of the track
        },
        '&::-webkit-scrollbar-thumb': {
            backgroundColor: '#87cbf5', // Color of the thumb
        },
        '&::-webkit-scrollbar-thumb:hover': {
            backgroundColor: '#5AB2FF', // Color of the thumb on hover
        },
    }
    const scrollBarHidden = {
        '&::-webkit-scrollbar': {
            display: 'none'
        }
    }
    const NavItems = (
        <Box sx={{ width: '240px' }}>
            <Toolbar>
                <Box width={'100%'} component={Stack} justifyContent={'space-between'} direction='row' alignItems='center'>
                    <Box component={Stack} direction='row' alignItems={'center'} gap={1}>
                        <TuneRoundedIcon fontSize="small" />
                        <Typography variant='subtitle1'>Sort</Typography>
                    </Box>
                    <Box>
                        <Chip clickable label="clear" size="small" color="default" />
                    </Box>



                </Box>
            </Toolbar>

            <Divider />
            <List>
                <ListItem>
                    <TextField size="small" label='Sum Insure' />
                </ListItem>
                <ListItem>
                    <Slider aria-label="sum-insure-ratio" step={10} marks />
                </ListItem>
                <ListItem>
                    <TextField size="small" />
                </ListItem>
            </List>
            <Toolbar>
                <Box component={Stack} gap={2} flexDirection='row' alignItems='center'>
                    <TuneRoundedIcon />
                    <Typography variant='subtitle1'>Filter by</Typography>
                </Box>
            </Toolbar>
            <Divider />
            <List>
                <ListItem>
                    <TextField />
                </ListItem>
                <ListItem>
                    <Button variant="contained" sx={{ width: '100%' }}>Apply</Button>
                </ListItem>

            </List>



        </Box>
    );

    const openViewDetails = () => {
        setViewDetails(true)
    }

    const closeViewDetails = () => {
        setViewDetails(false);
    }

    const handleCompare = (id: number) => {
        if (compareProducts.length <= 3) {
            dispatch(handleAddtoCompare(id))
        }
    }

    const cancel = () => dispatch(handleEmptyCompare());


    return (
        <Quotes />
    )
}

export default LoanQuotesPage
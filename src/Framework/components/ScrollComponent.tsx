import React from 'react';
import { Box } from '@mui/material';
import { styled } from '@mui/system';

const CustomScrollbarBox = styled(Box)(({ theme }) => ({
    overflowY: 'scroll', // Enables vertical scrollbar
    // Scrollbar customization
    '&::-webkit-scrollbar': {
        width: 12, // Use a fixed width for the scrollbar
    },
    '&::-webkit-scrollbar-thumb': {
        backgroundColor: theme.palette.primary.light, // Thumb color from theme
        borderRadius: 4,
        border: `1px solid ${theme.palette.primary.light}`, // Border around the thumb
    },
    '&::-webkit-scrollbar-thumb:hover': {
        backgroundColor: theme.palette.primary.main, // Darken thumb on hover using theme
        border: `2px solid ${theme.palette.primary.main}`
    },
    '&::-webkit-scrollbar-track': {
        borderRadius: 4,
        backgroundColor: theme.palette.action.hover, // Track color from theme
    }
}));

export default CustomScrollbarBox;

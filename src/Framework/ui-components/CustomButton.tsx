import React from 'react'
import { styled } from "@mui/material/styles"
import { Button } from '@mui/material'
const CustomButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main, // Main background color
  color: '#fff', // Text color
  padding: '5px 10px', // Padding for the button
  borderRadius: '8px', // Rounded corners
  fontSize: '0.8em', // Font size
  textTransform: 'none', // Uppercase text
  boxShadow: theme.shadows[2], // Slight shadow
  transition: 'background-color 0.3s, box-shadow 0.3s', // Smooth transitions
  '&:hover': {
    backgroundColor: theme.palette.primary.dark, // Darker color on hover
    boxShadow: theme.shadows[4], // Stronger shadow on hover
  },
  '&:active': {
    backgroundColor: theme.palette.primary.light, // Lighter color on click
    boxShadow: theme.shadows[1], // Less shadow on click
  },
}))




export default CustomButton
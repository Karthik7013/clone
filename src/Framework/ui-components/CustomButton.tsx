import React from 'react'
import { styled } from "@mui/material/styles"
import { Button } from '@mui/material'
const CustomButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#23adfa',
  color: '#fff',
  padding: '5px 9px',
  borderRadius: '0.45rem',
  fontSize: '1rem',
  textTransform: 'none',
  boxShadow: 'none',
  transition: 'background-color 0.3s, box-shadow 0.3s',
  '&:hover': {
    backgroundColor: '#2a92cc',
  }
}))




export default CustomButton
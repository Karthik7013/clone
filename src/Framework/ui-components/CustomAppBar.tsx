import { AppBar, styled } from '@mui/material'
import React from 'react'

const CustomAppBar = styled(AppBar)(({ theme }) => ({
    background: theme.palette.primary.main
}))

export default CustomAppBar
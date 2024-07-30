import { Box, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const LoanLandingPage = () => {
    return (
        <Box>
            <Typography>Loan Home</Typography>
            <Link to="/loan/quotes">Get Quotes</Link>
        </Box>
    )
}

export default LoanLandingPage
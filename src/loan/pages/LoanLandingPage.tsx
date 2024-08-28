import { Box, Button, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import OtpModal from '../../Framework/components/OtpModal'

const LoanLandingPage = () => {
    const [open, setOpen] = useState(false);
    return (
        <Box>
            <Typography>Loan Home</Typography>
            <Link to="/loan/quotes">Get Quotes</Link>
            <Button variant="outlined" onClick={() => setOpen(true)}>
                OTP
            </Button>
            <OtpModal open={open} setOpen={setOpen} />

        </Box>
    )
}

export default LoanLandingPage
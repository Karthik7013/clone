import { Box, Typography } from "@mui/material"
import React from "react"
import { Link } from "react-router-dom"
const RegisterClaims = () => {
  return (
    <Box mt={3}>
      <Typography gutterBottom variant='h4'>Register Claim</Typography>
      <Typography color='text.secondary' gutterBottom variant='subtitle1'>Quick answers to questions to you may have. Can't find what you're looking for? Check out our <Link to="#">full documentation</Link></Typography>


    </Box>
  )
}

export default RegisterClaims
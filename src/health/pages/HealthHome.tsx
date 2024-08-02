import { Box } from "@mui/material"
import { Link } from "react-router-dom"
import React from "react"

const HealthHome = () => {
  return (
    <Box>
      HealthHome
      <Link to="/health/quotes">quotes</Link>
    </Box>
  )
}

export default HealthHome
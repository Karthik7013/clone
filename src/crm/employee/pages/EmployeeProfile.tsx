import { Avatar, Box, Card, Stack, Toolbar, Typography } from '@mui/material'
import React from 'react'

const EmployeeProfile = () => {
  return (
    <Box>
      <Toolbar>
        <Stack direction={'row'} alignItems={'center'} gap={2} >
          <Avatar src='https://img.freepik.com/free-photo/3d-illustration-young-business-man-with-funny-expression-his-face_1142-55156.jpg' sx={{ width: 46, height: 46 }} />
          <Box>
            <Typography variant='body1'>Karthik Tumala</Typography>
            <Typography variant='caption' color='text.secondary'>karthiktumala143@gmail.com</Typography>
          </Box>
        </Stack>
      </Toolbar>

    </Box>
  )
}

export default EmployeeProfile
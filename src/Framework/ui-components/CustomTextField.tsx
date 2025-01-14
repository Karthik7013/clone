import { TextField } from '@mui/material';
import React from 'react'
import styled from 'styled-components';

const CustomTextField = styled(TextField)(({ theme }) => ({
    'backgroundRepeat': "no-repeat"
}))

export default CustomTextField;



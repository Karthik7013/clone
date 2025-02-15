import { alpha, styled } from "@mui/material/styles"
import { Button } from '@mui/material'
const CustomButton = styled(Button)(({ theme }) => ({
    backgroundColor: `${theme.palette.primary.main}`
}))




export default CustomButton
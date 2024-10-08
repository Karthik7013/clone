import { alpha, styled } from "@mui/material/styles"
import { Button } from '@mui/material'
const CustomButton = styled(Button)(({ theme }) => ({
  // backgroundColor: '#23adfa',
  color: '#fff',
  padding: '3px 6px',
  borderRadius: '0.45rem',
  // fontSize: '1rem',
  textTransform: 'none',
  // boxShadow: 'none',
  transition: 'background-color 0.3s, box-shadow 0.3s',
  '&:hover': {
    backgroundColor: theme.palette.mode ===  'dark' && alpha(theme.palette.primary.main,0.2),
  }
}))




export default CustomButton
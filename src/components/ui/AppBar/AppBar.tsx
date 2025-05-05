import { AppBar, styled } from "@mui/material";

const CustomAppBar = styled(AppBar)(({ theme }) => ({
    boxShadow: 'none',
    background: 'none',
    backgroundColor: theme.palette.background.default
}))
export default CustomAppBar;
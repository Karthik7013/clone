import { Drawer as MuiDrawer, styled } from "@mui/material";

const Drawer = styled(MuiDrawer)(({ theme }) => ({
    borderRadius: theme.shape.borderRadius
}))
export default Drawer;
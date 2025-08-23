import { IconButton, styled } from "@mui/material";

const StyledIconButton = styled(IconButton)(({ theme }) => ({
    borderRadius: theme.shape.borderRadius + 'rem',
}))
export default StyledIconButton;
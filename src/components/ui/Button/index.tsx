import { Button } from "@mui/material";
import { styled } from '@mui/material/styles';

const StyledButton = styled(Button)(({ theme }) => ({
    borderRadius: theme.shape.borderRadius
}));
export default StyledButton;

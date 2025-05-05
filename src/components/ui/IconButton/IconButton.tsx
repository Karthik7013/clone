import { IconButton, styled } from "@mui/material";
import { bluePalette } from "../../../themes/colors";

const StyledIconButton = styled(IconButton)(({ theme }) => ({
    backgroundColor: bluePalette[500],
    ":hover": {
        backgroundColor: bluePalette[900]
    },
    borderRadius: theme.shape.borderRadius,
    transition: "all .1s linear",
    ":active": {
        scale: '1.02'
    }
}))
export default StyledIconButton;
import { Select, styled } from "@mui/material";

const StyledSelect = styled(Select)(({
    theme
}) => ({
    borderRadius: theme.shape.borderRadius
}))

export default StyledSelect;
import { styled } from "@mui/material"
import { Card } from "@mui/material"

const StyledCard = styled(Card)(({theme}) => ({
    border: `1px solid ${theme.palette.mode==='dark' ? '#ffffff21' : theme.palette.divider}`,
    boxShadow: 'none',
    borderRadius:theme.shape.borderRadius,
    overflow: 'hidden',
}))
export default StyledCard;
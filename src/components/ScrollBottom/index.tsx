import { ArrowDownward } from "@mui/icons-material"
import { Box, IconButton, styled, Zoom } from "@mui/material"
import { forwardRef } from "react"
const StyledButton = styled(IconButton)(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    backgroundColor: theme.palette.background.paper,
}))


const ScrollBottom = forwardRef<HTMLDivElement>((props, ref) => {
    console.log(props)
    const scrollToBottom = () => {
        if (ref && typeof ref !== "function" && ref.current?.scrollIntoView) {
            ref.current.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return <Box component={Zoom} in={true} position={'sticky'} left={'50%'} bottom={10}>
        <StyledButton size="small" onClick={scrollToBottom}>
            <ArrowDownward fontSize="small" />
        </StyledButton>
    </Box>
})
export default ScrollBottom;
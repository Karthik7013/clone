import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";


const ScrollContainer = styled(Box)(({ theme }) => {
    const mode = theme.palette.mode;
    return {
        overflowY: "auto",
        scrollbarColor:
            mode === "dark"
                ? `${theme.palette.grey[700]} ${theme.palette.background.default}`
                : `${theme.palette.grey[400]} ${theme.palette.background.default}`,

        "&::-webkit-scrollbar": {
            width: "8px",
            height: "8px",
        },
        "&::-webkit-scrollbar-track": {
            backgroundColor: theme.palette.background.default,
            borderRadius: "8px",
        },
        "&::-webkit-scrollbar-thumb": {
            backgroundColor: mode === "dark" ? theme.palette.grey[700] : theme.palette.grey[400],
            borderRadius: "8px",
            "&:hover": {
                backgroundColor: mode === "dark" ? theme.palette.grey[600] : theme.palette.grey[500]
            },
        },
    }
});



export default ScrollContainer;

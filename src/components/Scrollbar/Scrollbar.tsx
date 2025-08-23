// components/Scrollbar.tsx
import { Box, useTheme } from "@mui/material";
import { styled, SxProps } from "@mui/material/styles";
import React from "react";

interface ScrollbarProps {
    children: React.ReactNode;
    sx: SxProps
}

const ScrollContainer = styled(Box)<{ mode: "light" | "dark" }>(({ theme, mode }) => ({
    overflowY: "auto",
    scrollbarWidth: "thin", // Firefox
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
            backgroundColor: mode === "dark" ? theme.palette.grey[600] : theme.palette.grey[500],
        },
    },
}));

const Scrollbar: React.FC<ScrollbarProps> = ({ children, sx }) => {
    const theme = useTheme();
    return (
        <ScrollContainer mode={theme.palette.mode} sx={{ ...sx }}>
            {children}
        </ScrollContainer>
    );
};

export default Scrollbar;

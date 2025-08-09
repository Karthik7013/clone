import React from 'react';
import { Box, SxProps, Theme, useTheme } from '@mui/material';
import darkScrollbar from '@mui/material/darkScrollbar';
type scrollBarProps = {
    children: React.ReactNode,
    sx?: SxProps<Theme>;

}

const Scrollbar = (props: scrollBarProps) => {
    const theme = useTheme();
    const isDark = theme.palette.mode === 'dark';

    return (
        <Box
            sx={{
                // Apply darkScrollbar helper for dark theme
                ...(isDark
                    ? darkScrollbar()
                    : {
                        // Light mode custom scrollbar styles
                        '&::-webkit-scrollbar': {
                            width: '8px',
                            height: '8px',
                        },
                        '&::-webkit-scrollbar-track': {
                            backgroundColor: theme.palette.grey[200],
                        },
                        '&::-webkit-scrollbar-thumb': {
                            backgroundColor: theme.palette.grey[400],
                            borderRadius: 4,
                        },
                        '&::-webkit-scrollbar-thumb:hover': {
                            backgroundColor: theme.palette.grey[600],
                        },
                        scrollbarWidth: 'thin', // Firefox
                        scrollbarColor: `${theme.palette.grey[400]} ${theme.palette.grey[200]}`, // Firefox
                    }),
                ...props.sx
            }}
        >
            {props.children}
        </Box>
    );
};

export default Scrollbar;

// AnimatedWrapper.tsx
import React from 'react';
import { Box, keyframes, SxProps, Theme } from '@mui/material';

interface AnimatedWrapperProps {
    animation: ReturnType<typeof keyframes>;
    duration?: string;
    timingFunction?: string;
    iterationCount?: string;
    sx?: SxProps<Theme>;
    children: React.ReactNode;
}

const AnimatedWrapper: React.FC<AnimatedWrapperProps> = ({
    animation,
    duration = '2s',
    timingFunction = 'linear',
    iterationCount = 'infinite',
    sx = {},
    children,
}) => {
    return (
        <Box
            sx={{
                display: 'inline-block',
                animation: `${animation} ${duration} ${timingFunction} ${iterationCount}`,
                ...sx,
            }}
        >
            {children}
        </Box>
    );
};

export default AnimatedWrapper;

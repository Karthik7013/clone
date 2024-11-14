
import { Card, CardMedia, useTheme } from '@mui/material'
import React from 'react';
import productsImg from "../../assets/all-partner-logo.avif";
type ProviderNames = "Reliance" | "Bajaj" | ""
type ProviderLogoProps = {
    grayScale?: boolean,
    name: ProviderNames,
    width?: 60,
    heigh?: 80
}

const ProviderLogo = (props: ProviderLogoProps) => {
    const theme = useTheme()
    return (
        <Card sx={{
            overflow: 'hidden',
            border: `0.5px solid ${theme.palette.divider}`,
            position: 'relative',
            width: '120px',
            height: '70px'
        }}>
            <CardMedia
                component="img"
                sx={{
                    position: 'absolute',
                    top: 38,
                    transform: "scale(9)",
                    left: 54,
                    filter: props.grayScale && "grayscale(100%)",
                    '&:hover': {
                        filter: 'grayscale(0%)',
                    },
                }}
                image={productsImg}
            />
        </Card>
    )
}

export default ProviderLogo
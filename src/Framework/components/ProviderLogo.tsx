
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
            position: 'relative',
            width: '120px',
            height: '70px'
        }}>
            <CardMedia
                component="img"
                // sx={{
                //     position: 'absolute',
                //     top: 42,
                //     transform: "scale(10)",
                //     left: 60,
                //     filter: props.grayScale && "grayscale(100%)",
                //     '&:hover': {
                //         filter: 'grayscale(0%)',
                //     },
                // }}
                alt={props.name}
                image={productsImg}
            />
        </Card>
    )
}

export default ProviderLogo
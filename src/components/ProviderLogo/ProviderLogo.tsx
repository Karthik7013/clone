
import { Card, CardMedia } from '@mui/material'
import productsImg from "../../assets/images/all-partner-logo.avif";
type ProviderNames = "Reliance" | "Bajaj" | ""
type ProviderLogoProps = {
    grayScale?: boolean,
    name: ProviderNames,
    width?: 60,
    heigh?: 80
}

const ProviderLogo = (props: ProviderLogoProps) => {
    return (
        <Card sx={{
            overflow: 'hidden',
            position: 'relative',
            width: '120px',
            height: '70px'
        }}>
            <CardMedia
                sx={{
                    position: 'absolute',
                    top: 42,
                    transform: "scale(10)",
                    left: 60,
                    filter: props.grayScale ? 'grayscale(100%)' : undefined,
                    '&:hover': {
                        filter: 'grayscale(0%)',
                    },
                }}
                component="img"
                image={productsImg}
            />
        </Card>
    )
}

export default ProviderLogo

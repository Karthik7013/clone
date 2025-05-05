import { Box, Card, CardMedia, Link } from "@mui/material";

type sliderItemProps = {
    src: string,
    link?: string
}

const CarouselItem: React.FC<sliderItemProps> = (props: sliderItemProps): React.JSX.Element => {
    return <Box component={Link} href={props.link} sx={{ position: 'relative' }}>
        <Card elevation={0} sx={{ maxWidth: { md: 300 } }}>
            <CardMedia component={'img'} image={props.src} />
        </Card>
    </Box>
}
export default CarouselItem;
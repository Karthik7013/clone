import { Box, Card } from "@mui/material"

const VideoWidget = () => {
    return <Box component={Card} sx={{ aspectRatio: "16/9", maxWidth: 360 }}>
        <iframe
            width="100%"
            height="100%"
            src="https://pixabay.com/static/videos/hero3.mp4"
            style={{ border: 'none' }} // Or any other border style you need
        />
    </Box>
}
export default VideoWidget;
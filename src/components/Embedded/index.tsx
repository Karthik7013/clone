import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

type embedProps = {
    src: string
}
function EmbeddedContent(props: embedProps) {

    return (
        <Box sx={{ width: '100%', maxWidth: 800, mx: 'auto', mt: 4 }}>
            <Paper
                elevation={4}
                sx={{
                    borderRadius: 2,
                    overflow: 'hidden', // Optional: clip iframe corners
                    boxShadow: 3,
                }}
            >
                <iframe
                    width="100%"
                    height="450"
                    src={props.src}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    style={{ border: 'none' }}
                />
            </Paper>
        </Box>
    );
}

export default EmbeddedContent;
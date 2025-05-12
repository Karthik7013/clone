import { Container, Grid, Stack, Typography } from "@mui/material"
import ProviderLogo from "../ProviderLogo/ProviderLogo"

const Providers = () => {
    return <Container>
        <Grid container>
            <Grid item xs={12}>
                <Typography component='h1' textAlign='center' variant="h4">More than 25+ Insurance Providers</Typography>
                <Typography textAlign='center' gutterBottom variant="subtitle1" color='text.secondary'>Providing You with the Best Insurance Solutions from a Diverse Network of Trusted Providers.</Typography>
                <Stack flexWrap='wrap' direction='row' gap={4} justifyContent='space-evenly' mt={4}>
                    <ProviderLogo name="Reliance" grayScale={true} />
                </Stack>
            </Grid>
        </Grid>
    </Container>

}
export default Providers;
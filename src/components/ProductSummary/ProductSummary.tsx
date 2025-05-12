import { Box, CardMedia, Container, Grid, Stack, Typography } from "@mui/material";
import React from "react";

const ProductSummary = () => {
    const arr = [
        {
            title: "Protect Your Loan with Life Insurance",
            desc: "When life is unpredictable, Loan Insurance can provide the peace of mind you need. Whether you’re taking out a personal loan, mortgage, or car loan, loan insurance ensures that your payments are covered in the event of an unexpected situation, like illness, injury, or job loss.",
            imgUrl: "https://img.freepik.com/free-vector/family-benefit-abstract-concept-vector-illustration-family-tax-benefit-payment-per-child-help-with-raising-children-economic-support-insurance-agent-piggy-bank-money-abstract-metaphor_335657-3984.jpg"
        },
        {
            title: "Protect Your Vehicle with Comprehensive Insurance",
            desc: "Your vehicle is more than just a mode of transportation—it's an important asset. Vehicle Insurance ensures that you’re financially covered in case of accidents, theft, or damage. Whether you have a car, motorcycle, or truck, comprehensive vehicle insurance gives you the peace of mind to drive without worry.",
            imgUrl: "https://img.freepik.com/premium-vector/car-insurance-vector-concept-with-umbrella-protection_108061-1612.jpg"
        },
        {
            title: "Secure Your Family's Future with Life Insurance",
            desc: "Life is full of uncertainties, but Life Insurance offers a way to ensure that your loved ones are protected financially, no matter what happens. Whether you're looking to safeguard your family’s financial security or plan for the future, life insurance provides peace of mind that your obligations and family’s needs are taken care of.",
            imgUrl: "https://img.freepik.com/free-vector/character-family-holding-insurance-illustration_53876-40419.jpg"
        },
        {
            title: "Protect Your Health with Comprehensive Health Insurance",
            desc: "Your health is your most valuable asset, and Health Insurance ensures you’re covered when you need it the most. From routine check-ups to emergency treatments, health insurance provides the financial support you need for medical expenses, giving you access to quality care without the worry of high costs.",
            imgUrl: "https://img.freepik.com/premium-vector/health-life-insurance-concept-doctor-patients-hospital-filling-health-life-insurance-policy-contract-flat-vector-modern-illustration_566886-10356.jpg"
        },

    ]
    return <Container>
        <Grid container>
            {
                arr.map((product, _) => {
                    return <Grid key={_} item xs={12} my={5}>
                        <Stack sx={{ flexDirection: { md: 'row' }, width: '100%', gap: 5 }}>
                            <Box order={_ % 2} flexGrow={1} display={'flex'} flexDirection={'column'} justifyContent={'center'} maxWidth={600}>
                                <Typography variant="h4" gutterBottom>
                                    {product.title}
                                </Typography>
                                <Typography component='abbr'>{product.desc}</Typography>
                            </Box>
                            <Box flexGrow={1}>
                                <CardMedia
                                    component="img"
                                    height='450'
                                    width='450'
                                    image={product.imgUrl}
                                    alt="green iguana"
                                />
                            </Box>
                        </Stack>
                    </Grid>
                })
            }
        </Grid>
    </Container>
}
export default React.memo(ProductSummary);
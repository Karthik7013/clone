import { Box, Button, Card, CardMedia, Checkbox, Chip, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, FormControlLabel, FormGroup, Grid, Stack, Typography } from "@mui/material";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import CheckCircleOutlineRoundedIcon from '@mui/icons-material/CheckCircleOutlineRounded';
const sampleRes = {
    "quote_details": {
        "quote_id": "INS-QUO-12345",
        "quote_amount": 1500,
        "premium_frequency": "Annual",
        "insurance_term": "5 years",
        "coverage_period": {
            "coverage_start_date": "2025-03-01",
            "coverage_end_date": "2030-03-01"
        },
        "coverage_details": {
            "total_coverage": 25000,
            "coverage_type": "Full Coverage",
            "deductible": 500,
            "included_coverages": {
                "life_coverage": true,
                "accident_coverage": true,
                "critical_illness_coverage": true
            }
        }
    },
    "loan_details": {
        "loan_id": "LOAN-56789",
        "loan_amount": 25000,
        "loan_type": "Personal Loan",
        "loan_term": "5 years",
        "interest_rate": 7.5,
        "monthly_installment": 500,
        "loan_period": {
            "loan_start_date": "2025-03-01",
            "loan_end_date": "2030-03-01"
        }
    },
    "insurance_provider": {
        "provider_id": "INS-PROV-789",
        "provider_name": "Best Insurance Co.",
        "contact_details": {
            "phone_number": "+1-555-123-4567",
            "email": "support@bestinsurance.com",
            "website": "www.bestinsurance.com",
            "logo": ""
        }
    }
}



const QuoteCard = () => {
    return <Grid item xs={12}>
        <Card sx={{ padding: '6px' }}>
            <Box display={'flex'}>
                <Box flex={1} sx={{ display: "flex", flexDirection: { xs: 'column', lg: 'row' }, rowGap: 2 }}>
                    <CardMedia
                        component="img"
                        sx={{ height: { xs: 60, md: 60 }, width: { xs: 100, md: 100 } }}
                        image={'https://upload.wikimedia.org/wikipedia/commons/9/90/Care_health_insurance_logo.png'}
                    />
                    <Box flex={1} display={'flex'} sx={{ gap: 5, justifyContent: { lg: 'center' } }}>
                        <Box sx={{ display: { xs: 'flex', lg: 'block' }, gap: 1 }}>
                            <Typography gutterBottom variant='caption' color={'text.secondary'}>Insurance Term</Typography>
                            <Typography component={'div'} variant='caption' color={'text.primary'}>
                                <b style={{ fontSize: '18px' }}>{sampleRes.quote_details.insurance_term}</b>
                            </Typography>
                        </Box>
                        <Box sx={{ display: { xs: 'flex', lg: 'block' }, gap: 1 }}>
                            <Typography gutterBottom variant='caption' color={'text.secondary'}>Deductable</Typography>
                            <Typography component={'div'} variant='caption' color={'text.primary'}>
                                ₹{" "}<b style={{ fontSize: '18px' }}>{sampleRes.quote_details.coverage_details.deductible}</b>
                            </Typography>
                        </Box>
                        <Box sx={{ display: { xs: 'flex', lg: 'block' }, gap: 1 }}>
                            <Typography gutterBottom variant='caption' color={'text.secondary'}>Total Coverage</Typography>
                            <Typography component={'div'} variant='caption' color={'text.primary'}>
                                ₹{" "}<b style={{ fontSize: '18px' }}>{sampleRes.quote_details.coverage_details.total_coverage}</b>
                            </Typography>
                        </Box>
                    </Box>
                </Box>
                <Box >
                    <Button variant='contained' endIcon={<ArrowForwardRoundedIcon />}>
                        <Typography variant='body1'>
                            <Typography> ₹ {sampleRes.quote_details.quote_amount}</Typography>
                        </Typography>
                    </Button>
                </Box>
            </Box>
            <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
                <FormGroup>
                    <FormControlLabel control={<Checkbox size='small' />} label={<Typography variant="caption">Compare</Typography>} />
                </FormGroup>
                <Box component={Stack} direction={'row'} gap={3} >
                    <Chip color="success" variant="outlined" icon={<CheckCircleOutlineRoundedIcon />} size="small" label={<Typography variant="caption">Life Coverage</Typography>} />
                    <Chip color="success" variant="outlined" icon={<CheckCircleOutlineRoundedIcon />} size="small" label={<Typography variant="caption">Life Coverage</Typography>} />
                    <Chip color="success" variant="outlined" icon={<CheckCircleOutlineRoundedIcon />} size="small" label={<Typography variant="caption">Life Coverage</Typography>} />

                </Box>
                <Button size="small"
                // onClick={openViewDetails}
                >
                    <Typography variant='caption' color={'text.secondary'}>View Details</Typography>
                </Button>
            </Box>
        </Card>
        <Dialog
            open={false}
            // open={viewDetails}
            keepMounted
            // onClose={closeViewDetails}
            aria-describedby="alert-dialog-slide-description"
        >
            <DialogTitle>{"Use Google's location service?"}</DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-slide-description">
                    Let Google help apps determine location. This means sending anonymous
                    location data to Google, even when no apps are running.
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button
                // onClick={closeViewDetails}
                >Disagree</Button>
                <Button
                // onClick={closeViewDetails}
                >Agree</Button>
            </DialogActions>
        </Dialog>
    </Grid>
}
export default QuoteCard;
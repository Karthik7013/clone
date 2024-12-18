import React from 'react'
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Checkbox, CircularProgress, Divider, List, ListItem, ListItemAvatar, ListItemIcon, ListItemText, Radio, Stack } from '@mui/material';
import AccessTimeRoundedIcon from '@mui/icons-material/AccessTimeRounded';
import QuestionAnswerRoundedIcon from '@mui/icons-material/QuestionAnswerRounded';
import CheckCircleOutlineRoundedIcon from '@mui/icons-material/CheckCircleOutlineRounded';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import CheckBoxRoundedIcon from '@mui/icons-material/CheckBoxRounded';
import CheckBoxOutlineBlankRoundedIcon from '@mui/icons-material/CheckBoxOutlineBlankRounded';
const steps = ['Instructions', 'Questions', 'Result'];
const Examination = () => {
    const [activeStep, setActiveStep] = React.useState(1);




    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };



    const handleReset = () => {
        setActiveStep(0);
    };



    const Instruction = () => {
        return <Box>
            <Box>
                <Typography textAlign={'center'} variant='h6'>Your Test Ready!</Typography>
                <Typography textAlign={'center'} variant='subtitle2' color={'text.secondary'}>
                    Your test has been successfully generated
                </Typography>
            </Box>
            <Box>
                <List
                    sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
                    component="nav"
                    aria-labelledby="nested-list-subheader"
                    subheader={
                        <Typography variant='h6'>Instructions</Typography>
                    }
                >
                    <ListItem>
                        <ListItemIcon>
                            <AccessTimeRoundedIcon />
                        </ListItemIcon>
                        <ListItemText primary="Time Allowed" secondary="30 Sec" />
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <QuestionAnswerRoundedIcon />
                        </ListItemIcon>
                        <ListItemText primary="No of Questions" secondary="10" />
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <CheckCircleOutlineRoundedIcon />
                        </ListItemIcon>
                        <ListItemText primary="Total Marks" secondary="120" />
                    </ListItem>
                </List>
            </Box>
        </Box>

    }

    const Result = () => {
        return <>Result</>
    }


    const Questions = () => {
        return <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
            <ListItem>
                <Stack width={'100%'}>
                    <ListItem sx={{ pl: 0 }} secondaryAction={<>3:30 sec</>}>Questions (1/20)</ListItem>
                    <Divider sx={{ mb: 2 }} />
                    {[1, 2, 3, 4, 5].map((e: number) => <>
                        <ListItemText primary={`${e}Q. Which of the following HTML elements is commonly used to embed a PDF file within a web page?`} />
                        <List>
                            {[1, 2, 3, 4].map((e: number) => (
                                <ListItem key={e} secondaryAction={<Radio icon={<CheckBoxOutlineBlankRoundedIcon />} checkedIcon={<CheckBoxRoundedIcon />} name="radio-buttons" />}>
                                    <ListItemText>{e}. div</ListItemText>
                                </ListItem>
                            ))}
                        </List>

                    </>)}
                    <Button>Submit</Button>
                </Stack>
            </ListItem>

        </List >
    }
    return (
        <div>
            <Box mt={3}>
                <ListItem disableGutters>
                    <ListItemText
                        primary={<Typography gutterBottom variant='h4'>Examination</Typography>}
                    />
                </ListItem>
                <Box sx={{ width: '100%' }}>
                    <Stepper activeStep={activeStep}>
                        {steps.map((label, index) => {


                            return (
                                <Step key={label}>
                                    <StepLabel>{label}</StepLabel>
                                </Step>
                            );
                        })}
                    </Stepper>

                    <React.Fragment>
                        <Box sx={{ pt: 2 }}>
                            {activeStep === 0 && < Instruction />}
                            {activeStep === 1 && <Questions />}
                            {activeStep === 2 && <Result />}
                            <CircularProgress />
                            <Box>
                                {
                                    !(activeStep === 0) && <Button
                                        color="inherit"
                                        onClick={handleBack}
                                        sx={{ mr: 1 }}
                                    >
                                        Back
                                    </Button>
                                }
                                <Button endIcon={<ArrowForwardRoundedIcon />} variant='contained' onClick={handleNext}>
                                    Start Exam
                                </Button>
                            </Box>
                        </Box>
                    </React.Fragment>

                </Box>
            </Box>

        </div >
    )
}

export default Examination
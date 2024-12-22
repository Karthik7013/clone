import React from 'react'
// import smp from "../../../assets/smp.pdf";
import { Box, ListItemText, ListItem, Typography, Accordion, AccordionSummary, AccordionDetails, List, IconButton, ListItemButton, Divider, alpha, ListItemIcon, Button, ButtonGroup } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import GetAppRoundedIcon from '@mui/icons-material/GetAppRounded';
import { useTheme } from '@mui/material';
import RemoveRedEyeRoundedIcon from '@mui/icons-material/RemoveRedEyeRounded';
import CommitRoundedIcon from '@mui/icons-material/CommitRounded';

const StudyMaterial = () => {
    const theme = useTheme()
    return <Box mt={3}>
        <ListItem disableGutters>
            <ListItemText
                primary={<Typography gutterBottom variant='h4'>Study Material</Typography>}
            />
        </ListItem>
        <Box>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                >
                    <ListItem disableGutters disablePadding>
                        <ListItemIcon><CommitRoundedIcon /></ListItemIcon>
                        <ListItemText>Chapter 1</ListItemText>
                    </ListItem>
                </AccordionSummary>
                <AccordionDetails>
                    <Divider />
                    <List>
                        {[1, 2, 3, 4].map((_) => (<ListItem key={_} secondaryAction={<ButtonGroup size='small'>
                            <Button title='view' color="primary" variant='outlined' >
                                <RemoveRedEyeRoundedIcon fontSize='small' />
                            </Button>
                            <Button
                                component="a"
                                download="Applications+of+Life+Insurance.pdf"
                                href="https://clone-api.onrender.com/public/study-material/Applications+of+Life+Insurance.pdf"
                                title="download"
                                color="success"
                                variant="contained"
                                target='_blank'
                            >
                                Download
                                <GetAppRoundedIcon fontSize="small" />
                            </Button>
                        </ButtonGroup>}>
                            <ListItemText
                                primary="Single-line item"
                            />
                        </ListItem>))}


                    </List>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                >
                    <ListItem disableGutters disablePadding>
                        <ListItemIcon><CommitRoundedIcon /></ListItemIcon>
                        <ListItemText>Chapter 2</ListItemText>
                    </ListItem>
                </AccordionSummary>
                <AccordionDetails>
                    <Divider />
                    <List>

                        {[1, 2, 3, 4].map((_) => (<ListItem key={_} secondaryAction={<ButtonGroup size='small'>
                            <Button title='view' color="primary" variant='outlined' >
                                <RemoveRedEyeRoundedIcon fontSize='small' />
                            </Button>
                            <Button title='download' color="success" variant='contained' >
                                <GetAppRoundedIcon fontSize='small' />
                            </Button>
                        </ButtonGroup>}>
                            <ListItemText
                                primary="Single-line item"
                            />
                        </ListItem>))}
                    </List>

                </AccordionDetails>
            </Accordion>
        </Box >
    </Box>
}

export default StudyMaterial
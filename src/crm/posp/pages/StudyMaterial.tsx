import React from 'react'
// import smp from "../../../assets/smp.pdf";
import { Box, ListItemText, ListItem, Typography, Accordion, AccordionSummary, AccordionDetails, List, IconButton, ListItemButton } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import GetAppRoundedIcon from '@mui/icons-material/GetAppRounded';
const StudyMaterial = () => {

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
                    Accordion 1
                </AccordionSummary>
                <AccordionDetails>
                    <List dense>
                        <ListItemButton>
                            <ListItem secondaryAction={<IconButton color='inherit'><GetAppRoundedIcon /></IconButton>}>
                                <ListItemText
                                    primary="Single-line item"
                                />
                            </ListItem>
                        </ListItemButton>
                        <ListItemButton>
                            <ListItem secondaryAction={<IconButton color='inherit'><GetAppRoundedIcon /></IconButton>}>
                                <ListItemText
                                    primary="Single-line item"
                                />
                            </ListItem>
                        </ListItemButton>
                        <ListItemButton>
                            <ListItem secondaryAction={<IconButton color='inherit'><GetAppRoundedIcon /></IconButton>}>
                                <ListItemText
                                    primary="Single-line item"
                                />
                            </ListItem>
                        </ListItemButton>
                        <ListItemButton>
                            <ListItem secondaryAction={<IconButton color='inherit'><GetAppRoundedIcon /></IconButton>}>
                                <ListItemText
                                    primary="Single-line item"
                                />
                            </ListItem>
                        </ListItemButton>
                    </List>

                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                >
                    Accordion 1
                </AccordionSummary>
                <AccordionDetails>
                    <List dense>
                        <ListItemButton>
                            <ListItem secondaryAction={<IconButton color='inherit'><GetAppRoundedIcon /></IconButton>}>
                                <ListItemText
                                    primary="Single-line item"
                                />
                            </ListItem>
                        </ListItemButton>
                        <ListItemButton>
                            <ListItem secondaryAction={<IconButton color='inherit'><GetAppRoundedIcon /></IconButton>}>
                                <ListItemText
                                    primary="Single-line item"
                                />
                            </ListItem>
                        </ListItemButton>
                        <ListItemButton>
                            <ListItem secondaryAction={<IconButton color='inherit'><GetAppRoundedIcon /></IconButton>}>
                                <ListItemText
                                    primary="Single-line item"
                                />
                            </ListItem>
                        </ListItemButton>
                        <ListItemButton>
                            <ListItem secondaryAction={<IconButton color='inherit'><GetAppRoundedIcon /></IconButton>}>
                                <ListItemText
                                    primary="Single-line item"
                                />
                            </ListItem>
                        </ListItemButton>
                    </List>

                </AccordionDetails>
            </Accordion>
        </Box >
    </Box >
}

export default StudyMaterial
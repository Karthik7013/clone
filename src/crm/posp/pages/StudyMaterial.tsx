import React from 'react'
// import smp from "../../../assets/smp.pdf";
import { Box, ListItemText, ListItem, Typography, Accordion, AccordionSummary, AccordionDetails, List, IconButton, ListItemButton, Divider, alpha, ListItemIcon, Button, ButtonGroup, Card, CardActionArea } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import GetAppRoundedIcon from '@mui/icons-material/GetAppRounded';
import { useTheme } from '@mui/material';
import RemoveRedEyeRoundedIcon from '@mui/icons-material/RemoveRedEyeRounded';
import CommitRoundedIcon from '@mui/icons-material/CommitRounded';

const StudyMaterial = () => {



    const studyMaterial = [
        {
            chapter: "Chapter 1: Introduction to Insurance",
            subtopics: [
                {
                    id: "1.1",
                    title: "Customer Service",
                    pdfLink: "/pdfs/what-is-programming.pdf"
                },
                {
                    id: "1.2",
                    title: "Grievance redressal mechanism",
                    pdfLink: "/pdfs/history-of-programming-languages.pdf"
                },
                {
                    id: "1.3",
                    title: "Regulatory aspects of insurance agents",
                    pdfLink: "/pdfs/basic-syntax.pdf"
                },
                {
                    id: "1.4",
                    title: "Legal principle of an insurance contract",
                    pdfLink: "/pdfs/introduction-to-algorithms.pdf"
                }
            ]
        },
        {
            chapter: "Chapter 2: Life Insurance",
            subtopics: [
                {
                    id: "2.1",
                    title: "What life insurance involves",
                    pdfLink: "/pdfs/arrays.pdf"
                },
                {
                    id: "2.2",
                    title: "Financial planning",
                    pdfLink: "/pdfs/linked-lists.pdf"
                },
                {
                    id: "2.3",
                    title: "Life insurance products - 1",
                    pdfLink: "/pdfs/stacks.pdf"
                },
                {
                    id: "2.4",
                    title: "Life insurance products - 2",
                    pdfLink: "/pdfs/queues.pdf"
                },
                {
                    id: "2.5",
                    title: "Applications of Life Insurance",
                    pdfLink: "/pdfs/hash-tables.pdf"
                },
                {
                    id: "2.6",
                    title: "Pricing and valuation in Life Insurance",
                    pdfLink: "/pdfs/trees.pdf"
                },
                {
                    id: "2.7",
                    title: "Documentation - proposal stage",
                    pdfLink: "/pdfs/graphs.pdf"
                },
                {
                    id: "2.8",
                    title: "Documentation - policy condition -1",
                    pdfLink: "/pdfs/graphs.pdf"
                },
                {
                    id: "2.9",
                    title: "Documentation - policy condition -2",
                    pdfLink: "/pdfs/graphs.pdf"
                },
                {
                    id: "2.10",
                    title: "Underwriting",
                    pdfLink: "/pdfs/graphs.pdf"
                },
                {
                    id: "2.11",
                    title: "Payments under a Life Insurance Policy",
                    pdfLink: "/pdfs/graphs.pdf"
                }
            ]
        },
        {
            chapter: "Chapter 3: Health Insurance",
            subtopics: [
                {
                    id: "3.1",
                    title: "Introduction to Health Insurance",
                    pdfLink: "/pdfs/what-is-oop.pdf"
                },
                {
                    id: "3.2",
                    title: "Insurance Documentation",
                    pdfLink: "/pdfs/classes-and-objects.pdf"
                },
                {
                    id: "3.3",
                    title: "Health Insurance Products",
                    pdfLink: "/pdfs/inheritance.pdf"
                },
                {
                    id: "3.4",
                    title: "Health Insurance Underwriting",
                    pdfLink: "/pdfs/polymorphism.pdf"
                },
                {
                    id: "3.5",
                    title: "Health Insurance Claims",
                    pdfLink: "/pdfs/encapsulation.pdf"
                }
            ]
        }
    ];







    const theme = useTheme()
    return <Box mt={3}>
        <ListItem disableGutters>
            <ListItemText
                primary={<Typography gutterBottom variant='h4'>Study Material</Typography>}
            />
        </ListItem>
        <Box>
            {studyMaterial.map((material, _) => {
                return <Card key={_} sx={{ mb: 1 }}>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1-content"
                            id="panel1-header"
                        >
                            <ListItem disableGutters disablePadding>
                                <ListItemIcon><CommitRoundedIcon /></ListItemIcon>
                                <ListItemText
                                    sx={{ color: 'primary.main', fontStyle: 'italic' }}
                                >{material.chapter}</ListItemText>
                            </ListItem>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Divider />
                            <List>
                                {material.subtopics.map((_) => (
                                    <CardActionArea disableTouchRipple>
                                        <ListItem key={_.id} secondaryAction={<ButtonGroup size='small'>
                                            <Button title='view' color="primary" variant='outlined' >
                                                <RemoveRedEyeRoundedIcon fontSize='small' />
                                            </Button>
                                            <Button
                                                component="a"
                                                download="Applications+of+Life+Insurance.pdf"
                                                href={`https://clone-api.onrender.com/public/study-material/Applications+of+Life+Insurance.pdf`}
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
                                                sx={{ color: 'text.secondary' }}
                                                primary={`${_.id} ${" "}${_.title}`}
                                            />
                                        </ListItem>
                                    </CardActionArea>
                                ))}
                            </List>
                        </AccordionDetails>
                    </Accordion>
                </Card>
            })}


        </Box >
    </Box>
}

export default StudyMaterial
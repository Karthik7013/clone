import { Box, Container, List, ListItem, ListItemText, Stack, useTheme, useMediaQuery, Collapse, IconButton, Card } from "@mui/material";

import FileDownloadRoundedIcon from '@mui/icons-material/FileDownloadRounded';
// import ContentCopyRoundedIcon from '@mui/icons-material/ContentCopyRounded';
// import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
// import DescriptionRoundedIcon from '@mui/icons-material/DescriptionRounded';
import FolderIcon from '@mui/icons-material/Folder';
// import DeleteIcon from '@mui/icons-material/Delete';
import ScrollContainer from "../components/Scrollbar/Scrollbar";
import { useState } from "react";

const Sidebar = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // <600px
    const [collapse, setCollapse] = useState<boolean>(false);
    // const isMobile = useMediaQuery();
    return <Stack height={'100%'} sx={{ borderRight: `1px solid ${theme.palette.divider}` }}>
        <Box>
            <IconButton onClick={() => setCollapse((prev) => !prev)}><FileDownloadRoundedIcon /></IconButton>
        </Box>
        <List >
            {[1, 2, 3, 4].map(() => {
                return <ListItem>
                    <FolderIcon />
                    <Collapse orientation="horizontal" unmountOnExit in={!isMobile && collapse}>
                        <ListItemText sx={{ textWrap: 'nowrap' }}
                            primary="Single-line item"
                        />
                    </Collapse>
                </ListItem>
            })}
        </List>
        <List dense component={ScrollContainer} sx={{ flexGrow: 1, overflowY: 'scroll' }}>
            <ListItem>
                <FolderIcon />
                <Collapse orientation="horizontal" unmountOnExit in={!isMobile && collapse}>
                    <ListItemText sx={{ textWrap: 'nowrap' }}
                        primary="Single-line item"
                    />
                </Collapse>
            </ListItem>
        </List>
        <Box>

        </Box>
    </Stack >
}


const DashboardLayout = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // <600px
    // const mode = theme.palette.mode;
    return <Stack direction="row" height={'100dvh'}>
        <Box component={Collapse} orientation="horizontal" unmountOnExit in={!isMobile} maxWidth={240}>
            <Sidebar />
        </Box>
        {/* main container */}
        <Stack flexGrow={1} justifyContent={'center'}>
            {/* <Toolbar></Toolbar> */}
            <ScrollContainer sx={{ flexGrow: 1, overflowY: 'scroll', alignItems: 'center', display: 'flex', justifyContent: 'center' }}>
                <Container maxWidth="md">


                    <Card elevation={0} sx={{ padding: 1 }}>

                        <Stack direction={'row'}>
                            <IconButton>
                                <FileDownloadRoundedIcon />
                            </IconButton>
                            <Box sx={{
                                p: 1,
                                flexGrow: 1,
                                outline: 'none'
                            }} component={'div'} contentEditable>Ask anything...</Box>
                            <IconButton>
                                <FileDownloadRoundedIcon />
                            </IconButton>
                        </Stack>
                    </Card>

                </Container>
            </ScrollContainer>
        </Stack>
        {/* preview container */}
        <ScrollContainer maxWidth={300} sx={{ overflowY: 'scroll' }}>

        </ScrollContainer>
    </Stack>
}
export default DashboardLayout;
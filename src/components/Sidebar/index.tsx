import { Avatar, Box, Button, CardContent, Divider, Drawer, Stack, Toolbar } from "@mui/material";
import DarkMode from "../Darkmode";
import ScrollContainer from "../Scrollbar/Scrollbar";
import { GeminiText } from "../../assets/icons/GeminiText";
type sidebarProps = {
    open: boolean,
    onClose: () => void
}

const Sidebar = (props: sidebarProps) => {
    return <Drawer anchor='left' onClose={props.onClose} open={props.open} >
        <Stack sx={{ height: "100dvh", bgcolor: 'background.paper', width: '320px' }}>
            <Toolbar sx={{ justifyContent: 'space-between' }}>
                <Stack gap={1} direction={'row'}>
                    <GeminiText sx={{ width: '100%' }} />
                </Stack>
                <DarkMode />
            </Toolbar>
            <ScrollContainer flexGrow={1} overflow={'auto'}>

                <CardContent>


                </CardContent>
            </ScrollContainer>
            <Divider />
            <Toolbar sx={{ justifyContent: 'space-between' }}>
                <Box>
                    <Avatar src="https://avatar.iran.liara.run/public">K</Avatar>
                </Box>
                <Button color="error" variant="contained">Logout</Button>
            </Toolbar>


        </Stack>
    </Drawer>
}

export default Sidebar;
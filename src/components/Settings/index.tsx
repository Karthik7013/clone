// import { SettingsApplicationsRounded, ColorLensRounded } from "@mui/icons-material"
import { Box, Dialog, Divider, List, ListItem, Stack, Tab, Tabs, Toolbar } from "@mui/material"

const Settings = () => {
    return <Dialog open fullWidth>

        <Stack direction="row">




            <Tabs value={'settings'} variant="fullWidth" orientation="vertical">
                <Tab value={'settings'} label="Settings"></Tab>
                <Tab label="Memory Data"></Tab>
                <Tab label="Account"></Tab>
                <Tab label="Account"></Tab>
                <Tab label="Account"></Tab>
                <Tab label="Account"></Tab>
                <Tab label="Account"></Tab>
            </Tabs>

            <Divider orientation="vertical"></Divider>
            <Box flexGrow={1} bgcolor={'background.paper'}>
                <Toolbar>

                </Toolbar>
                <Divider></Divider>
                <List>
                    <ListItem>
API KEY
                    </ListItem>
                </List>
            </Box>
        </Stack>
    </Dialog>
}
export default Settings
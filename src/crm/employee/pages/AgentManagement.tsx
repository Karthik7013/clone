import { Box, ListItem, ListItemText, Typography, useTheme } from '@mui/material';
import AgentTable from '../components/AgentTable';

const AgentManagement = () => {
    const theme = useTheme()
    return (
        <>
            <Box mt={3}>
                <ListItem disableGutters>
                    <ListItemText
                        primary={<Typography gutterBottom variant='h4'>Agent Management</Typography>}
                    />
                </ListItem>
                <Box>

                    <AgentTable />
                </Box >
            </Box>
        </>
    )
}
export default AgentManagement;


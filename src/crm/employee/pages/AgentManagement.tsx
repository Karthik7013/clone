import { Box, ListItem, ListItemText, Typography } from '@mui/material';
import AgentTable from '../components/AgentTable';
import CustomerTable from '../components/CustomerTable';

const AgentManagement = () => {
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


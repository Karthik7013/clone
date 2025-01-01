import { Box, ListItem, ListItemText,  Typography } from '@mui/material';
import AgentTable from '../components/AgentTable';

const AgentManagement = () => {
    return (
        <>
            <Box mt={3}>
                <ListItem disableGutters>
                    <ListItemText
                        primary={<Typography gutterBottom variant='h4'>Employee Management</Typography>}
                    />
                </ListItem>
                <Box>
                    <AgentTable  />
                </Box >
            </Box>
        </>
    )
}
export default AgentManagement;


import { Box, ListItem, ListItemText, Typography } from '@mui/material'
import ErrorTable from '../components/ErrorTable'
import { MessageBox } from '../../../Framework/components'

const ErrorManagement = () => {
    return (
        <Box>
            <Box mt={3}>
                <ListItem disableGutters>
                    <ListItemText
                        primary={<Typography gutterBottom variant='h4'>Error Management</Typography>}
                    />
                </ListItem>
                <Box>
                    <MessageBox type='error' message='hellow' variant='filled' action={() => { }} />
                    <ErrorTable />
                </Box>
            </Box>
        </Box>
    )
}

export default ErrorManagement
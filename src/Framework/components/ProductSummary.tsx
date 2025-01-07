import { Box, Button, Card, CardActionArea, CardActions, CardContent, Checkbox, Container, Divider, List, ListItem, ListItemIcon, ListItemText, Stack, Typography } from "@mui/material";
import React from "react";
import CurrencyExchangeRoundedIcon from '@mui/icons-material/CurrencyExchangeRounded';
import SaveRoundedIcon from '@mui/icons-material/SaveRounded';
import EditNoteRoundedIcon from '@mui/icons-material/EditNoteRounded';
const ProductSummary = () => {
    return <Box sx={{ pt: 2 }}>
        <Card>
            <ListItem>
                <ListItemText primary={<Typography variant="subtitle2">Employee Details</Typography>} secondary={<Typography variant="caption" color='text.secondary'>Add or Manage your Employee Members</Typography>} />
            </ListItem>
            <Divider />
            <ListItem>
                <ListItemIcon><EditNoteRoundedIcon /></ListItemIcon>
                <ListItemText primary={<Typography variant="body2">Premissions</Typography>} />
            </ListItem>
            <Divider />

            <ListItem secondaryAction={<Checkbox />}>
                <ListItemIcon><CurrencyExchangeRoundedIcon fontSize="small" /></ListItemIcon>
                <ListItemText primary={<Typography variant="body2">Employee Management</Typography>} />
            </ListItem>
            <Divider />
            <List>
                <ListItem secondaryAction={<Checkbox title="read" />}>
                    <ListItemText primary={<Typography variant="body2" color="text.secondary">Add employee data</Typography>} />
                </ListItem>
                <ListItem secondaryAction={<Checkbox title="read" />}>
                    <ListItemText primary={<Typography variant="body2" color="text.secondary">Edit employee data</Typography>} />
                </ListItem>
                <ListItem secondaryAction={<Checkbox title="read" />}>
                    <ListItemText primary={<Typography variant="body2" color="text.secondary">Delete Employee data</Typography>} />
                </ListItem>
                <ListItem secondaryAction={<Checkbox title="read" />}>
                    <ListItemText primary={<Typography variant="body2" color="text.secondary">View employee data</Typography>} />
                </ListItem>
            </List>
            <Divider />
            <ListItem secondaryAction={<Checkbox />}>
                <ListItemIcon><CurrencyExchangeRoundedIcon fontSize="small" /></ListItemIcon>
                <ListItemText primary={<Typography variant="body2">Revenue Management</Typography>} />
            </ListItem>
            <Divider />
            <List>
                <ListItem secondaryAction={<Checkbox title="read" />}>
                    <ListItemText primary={<Typography variant="body2" color="text.secondary">Add employee data</Typography>} />
                </ListItem>
                <ListItem secondaryAction={<Checkbox title="read" />}>
                    <ListItemText primary={<Typography variant="body2" color="text.secondary">Edit employee data</Typography>} />
                </ListItem>
                <ListItem secondaryAction={<Checkbox title="read" />}>
                    <ListItemText primary={<Typography variant="body2" color="text.secondary">Delete Employee data</Typography>} />
                </ListItem>
                <ListItem secondaryAction={<Checkbox title="read" />}>
                    <ListItemText primary={<Typography variant="body2" color="text.secondary">View employee data</Typography>} />
                </ListItem>
            </List>
        </Card>



    </Box>
}
export default ProductSummary
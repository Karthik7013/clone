import { Dialog, DialogContent, DialogTitle, InputAdornment, List, ListItem, ListItemText, TextField, Toolbar, useMediaQuery, useTheme } from "@mui/material";
import { Search } from "@mui/icons-material";
const SearchConversation = () => {
    const open = true;
    const muiTheme = useTheme();
    const isMobile = useMediaQuery(muiTheme.breakpoints.down("lg"));
    const handleClose = () => { }
    return <Dialog fullScreen={isMobile} onClose={handleClose} fullWidth maxWidth="md" open={open}>
        <DialogTitle justifyContent={'space-between'} component={Toolbar}>
            <TextField

                placeholder="Search Chat"
                InputProps={{
                    startAdornment: <InputAdornment position="start">
                        <Search />
                    </InputAdornment>
                }}
                fullWidth></TextField>
        </DialogTitle>
        <DialogContent>
            <List disablePadding>
                {Array(16).fill(null).map(() => <ListItem>
                    <ListItemText
                        primary="Hia tehr"
                    />
                </ListItem>)}
            </List>
        </DialogContent>
    </Dialog>
}
export default SearchConversation;
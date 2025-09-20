import { CardContent, Dialog, DialogTitle, IconButton, InputAdornment, List, ListItem, ListItemText, Stack, TextField, Toolbar, useMediaQuery, useTheme } from "@mui/material";
import { MoreHoriz, Search } from "@mui/icons-material";
import ScrollContainer from "../Scrollbar/Scrollbar";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import { toggleSearch } from "../../features/ui/uiSlice";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
const SearchConversation = () => {

    const dispatch: AppDispatch = useDispatch();
    const closeSearch = () => dispatch(toggleSearch(false))
    const open = useSelector((state: RootState) => state.ui.search);
    const muiTheme = useTheme();
    const isMobile = useMediaQuery(muiTheme.breakpoints.down("lg"));
    return <Dialog
        fullScreen={isMobile} onClose={closeSearch} fullWidth maxWidth="md" open={open}>
        {isMobile && <Stack alignItems={'center'}>
            <IconButton size="small" onClick={closeSearch}><KeyboardArrowDownIcon /></IconButton>
        </Stack>}
        <DialogTitle justifyContent={'space-between'} component={Toolbar}>




            <TextField
                size="small"
                placeholder="Search Chat"
                InputProps={{
                    startAdornment: <InputAdornment position="start">
                        <Search />
                    </InputAdornment>
                }}
                fullWidth>
            </TextField>
        </DialogTitle>
        <ScrollContainer component={CardContent}>
            <List disablePadding>
                {Array(16).fill(null).map(() => <ListItem secondaryAction={<MoreHoriz />} divider>
                    <ListItemText
                        primary="Hia tehr"
                    />
                </ListItem>)}
            </List>
        </ScrollContainer>

    </Dialog>
}
export default SearchConversation;
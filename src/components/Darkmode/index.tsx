import { MenuItem, SelectChangeEvent } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../../store/store'
import { toggleMode } from '../../features/theme/themeSlice'
import Select from "../ui/Select";

const DarkMode: React.FC = () => {
    const dispatch: AppDispatch = useDispatch();
    const mode = useSelector((state: RootState) => state.themeReducer.mode);
    const handleChange = (event: SelectChangeEvent<"light" | "dark" | "system" | unknown>) => dispatch(toggleMode(event.target.value as "light" | "dark" | "system"));
    return (
        <Select fullWidth size='small' value={mode} onChange={handleChange}>
            <MenuItem value="light">Light</MenuItem>
            <MenuItem value="dark">Dark</MenuItem>
            <MenuItem value="system">System</MenuItem>
        </Select>
    )
}

export default DarkMode
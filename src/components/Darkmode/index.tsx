import { MenuItem, Select, SelectChangeEvent } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../../store/store'
import { toggleMode } from '../../features/theme/themeSlice'


const DarkMode = () => {
    const dispatch: AppDispatch = useDispatch();
    const mode = useSelector((state: RootState) => state.themeReducer.mode);
    return (
        <Select size='small' value={mode} onChange={(e: SelectChangeEvent<"light" | "dark" | "system">) => dispatch(toggleMode(e.target.value as "light" | "dark" | "system"))}>
            <MenuItem value="light">Light</MenuItem>
            <MenuItem value="dark">Dark</MenuItem>
            <MenuItem value="system">System</MenuItem>
        </Select>
    )
}

export default DarkMode
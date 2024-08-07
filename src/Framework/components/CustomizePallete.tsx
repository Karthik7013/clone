import React from 'react'
import ColorLensRoundedIcon from '@mui/icons-material/ColorLensRounded';
import { Box, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Slider, Toolbar, Typography } from '@mui/material';
import { alpha, styled } from '@mui/material/styles';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import { keyframes } from '@emotion/react';
import { useSelector, useDispatch } from 'react-redux';
import { RootProps } from '../../types/RootProps';
import { changeBorderRadius } from '../../redux/slice/uiSlice';
const CustomizePallete = () => {
    const dispatch = useDispatch();
    const borderRadius = useSelector((state: RootProps) => state.ui.borderRadius);
    const fontFamily = useSelector((state: RootProps) => state.ui.fontFamily);

    const [open, setOpen] = React.useState(false);

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };
    const rotate = keyframes`
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  `;

    const StyledIconButton = styled(IconButton)(({ theme }) => ({
        color: theme.palette.primary.main,
        padding: theme.spacing(1.5),
        border: `0.15rem solid ${theme.palette.primary.main}`,
        animation: `${rotate} 1s linear infinite`,
        zIndex: 99999,
        position: 'fixed',
        right: 0,
        top: '50%',
    }));
    const handleDrawer = () => {

    }

    function valuetext(value) {
        return `${value}px`;
    }
    const handleBorderRadius = (event: any) => {
        const value = event.target.value;
        dispatch(changeBorderRadius(value))
    }



    const DrawerList = (
        <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
            <Toolbar>
                <Typography>Customization</Typography>
            </Toolbar>
            <Divider />
            <List>
                <ListItem>
                    <ListItemText>
                        <Typography variant='body2'>Border Radius : {borderRadius}px</Typography>
                    </ListItemText>
                </ListItem>
                <ListItem>
                    <Slider
                        onChange={handleBorderRadius}
                        value={borderRadius}
                        aria-label="Default"
                        marks
                        valueLabelFormat={valuetext} valueLabelDisplay="auto" step={4} min={0} max={16} />
                </ListItem>

                <ListItem>
                    <ListItemText>
                        <Typography variant='body2'>Font Family : {fontFamily}</Typography>
                    </ListItemText>
                </ListItem>
                <ListItem>

                </ListItem>
            </List>

        </Box>
    );
    return (
        <Box>
            <StyledIconButton onClick={toggleDrawer(!open)} disableTouchRipple disableFocusRipple size='small'>
                <SettingsRoundedIcon fontSize='small' />
            </StyledIconButton>
            <Drawer anchor={'right'} open={open} variant='temporary' onClose={toggleDrawer(true)}>
                {DrawerList}
            </Drawer>
        </Box>
    )
}

export default CustomizePallete
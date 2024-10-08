import React from 'react'
import ColorLensRoundedIcon from '@mui/icons-material/ColorLensRounded';
import { Box, Divider, Drawer, FormControlLabel, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Radio, RadioGroup, Slider, Toolbar, Typography } from '@mui/material';
import { alpha, styled } from '@mui/material/styles';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import { keyframes } from '@emotion/react';
import { useSelector, useDispatch } from 'react-redux';
import { RootProps } from '../../types/RootProps';
import { changeBorderRadius, changeFontFamily, handlePallete } from '../../redux/slice/uiSlice';
import { AppDispatch } from '../../redux/store';

const CustomizePallete = ({ customize, isOpen }) => {
    console.log('customizePallete render')
    const dispatch: AppDispatch = useDispatch();
    const { borderRadius, fontFamily } = customize;
    
    const toggleDrawer = () => {
        dispatch(handlePallete())
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
        top: '10%',
    }));


    function valuetext(value) {
        return `${value}px`;
    }
    const handleBorderRadius = (event: any) => {
        const value = event.target.value;
        dispatch(changeBorderRadius(value))
    }
    const handleChangeFamily = (event: any) => {
        const value = event.target.value;
        dispatch(changeFontFamily(value))
    }



    const DrawerList = (
        <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer}>
            <Toolbar>
                <Typography>Customization</Typography>
            </Toolbar>
            <Divider />
            <List dense>
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
                <Divider />
                <ListItem>
                    <ListItemText>
                        <Typography variant='body2'>Font Family : {fontFamily}</Typography>
                    </ListItemText>
                </ListItem>
                <ListItem>
                    <RadioGroup
                        value={fontFamily}
                        onChange={handleChangeFamily}
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                    >
                        <FormControlLabel value="Poppins" control={<Radio />} label="Poppins" />
                        <FormControlLabel value="Montserrat" control={<Radio />} label="Montserrat" />
                    </RadioGroup>
                </ListItem>
                <Divider />
            </List>
        </Box>
    );
    return (
        <Box>
            <StyledIconButton onClick={toggleDrawer} disableTouchRipple disableFocusRipple size='small'>
                <SettingsRoundedIcon fontSize='small' />
            </StyledIconButton>
            <Drawer anchor={'left'} open={isOpen} variant='temporary' onClose={toggleDrawer}>
                {DrawerList}
            </Drawer>
        </Box>
    )
}

export default React.memo(CustomizePallete);
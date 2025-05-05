import { Button } from "@mui/material";
import { styled } from '@mui/material/styles';
import { bluePalette } from "../../../themes/colors";

const CustomButton = styled(Button)(({ theme }) => ({
    borderRadius: theme.shape.borderRadius,
    backgroundColor:bluePalette[500],
    color: 'white',
    "&:hover":{
        backgroundColor:bluePalette[900],
    },
    transition:"all .1s linear",
    ":active":{
        scale:'1.02'
    }
}));
export default CustomButton;

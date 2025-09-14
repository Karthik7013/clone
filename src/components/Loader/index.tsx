import { Backdrop, keyframes, Typography } from "@mui/material";
import GeminiIcon from "../../assets/icons/GeminiIcon";
import AnimatedWrapper from "../AnimatedWrapper";
const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  40% {
    transform: rotate(180deg);
  }
  60% {
    transform: rotate(200deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const Loader = () => {
  return <Backdrop
    sx={(theme) => ({
      color: theme.palette.background.paper,
      zIndex: theme.zIndex.drawer + 1,
      display: 'flex',
      flexDirection: 'column',
      gap: 1
    })}
    open={true}
  >
    <AnimatedWrapper sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} animation={rotate} duration="2s" timingFunction="ease-in-out">
      <GeminiIcon fontSize="large" />
    </AnimatedWrapper>
    <Typography color='text.secondary'>
      Starting things...
    </Typography>
  </Backdrop>

}
export default Loader;
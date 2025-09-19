import { Box, Stack, Typography } from '@mui/material';
import { styled, keyframes } from '@mui/system';
import GeminiIcon from '../../assets/icons/GeminiIcon';

// Define the keyframes animation
const spinAnimation = keyframes`
  10% {
    transform: translateY(-102%);
  }
  25% {
    transform: translateY(-100%);
  }
  35% {
    transform: translateY(-202%);
  }
  50% {
    transform: translateY(-200%);
  }
  60% {
    transform: translateY(-302%);
  }
  75% {
    transform: translateY(-300%);
  }
  85% {
    transform: translateY(-402%);
  }
  100% {
    transform: translateY(-400%);
  }
`;



const Loader = styled(Box)(() => ({
  width: 'fit-content',
  margin: 'auto',
  color: 'rgb(124, 124, 124)',
  fontWeight: 500,
  fontSize: '25px',
  height: '60px',
  padding: '10px',
  display: 'flex',
  borderRadius: '8px',
}));

const WordsWrapper = styled(Box)(({ theme }) => ({
  overflow: 'hidden',
  position: 'relative',
  '&::after': {
    content: '""',
    position: 'absolute',
    inset: 0,
    background: `linear-gradient(${theme.palette.background.paper} 10%, transparent 30%, transparent 70%, ${theme.palette.background.paper} 90%)`,
    zIndex: 20,
  },
}));

const Word = styled(Box)({
  textAlign: 'center',
  display: 'block',
  height: '100%',
  paddingLeft: '6px',
  background: 'linear-gradient(0deg, #4285F4, #9B72CB, #FF5CAA)', // Gemini-like gradient
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  animation: `${spinAnimation} 10s infinite`,
});

// Main component
const ScrollText = () => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>

      <Typography
        component={Stack}
        flexDirection={'row'}
        alignItems={'center'}
        gap={1}
        variant="h5"
        fontWeight={600}
        textAlign="center"
      >
        <GeminiIcon /> How can I help you?
      </Typography>

      <Loader>
        <WordsWrapper>
          <Word component="span" className="word">
            Turn thoughts into action
          </Word>
          <Word component="span" className="word">
            Summarize text quickly
          </Word>
          <Word component="span" className="word">
            Ask me anything
          </Word>
          <Word component="span" className="word">
            Learn something new today
          </Word>
          <Word component="span" className="word">
            Write or debug code.
          </Word>
        </WordsWrapper>
      </Loader>
    </Box>
  );
};

export default ScrollText;
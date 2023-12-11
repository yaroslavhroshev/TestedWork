import { Box, Typography, Container } from '@mui/material';
import ButtonGroupComponent from './components/ButtonGroupComponent/ButtonGroupComponent';
import LogComponent from './components/LogComponent/LogComponent';

const App = () => {
  return (
    <Container
      sx={{
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '2rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Box
        sx={{
          textAlign: 'center',
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontWeight: 'bold',
            mb: '15px',
            fontSize: {
              mobile: '2rem',
              desktop: '3rem',
            },
          }}
        >
          Testing Work
        </Typography>
        <ButtonGroupComponent />
        <LogComponent />
      </Box>
    </Container>
  );
};

export default App;

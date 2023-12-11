import { Box, Typography } from '@mui/material';
import './App.css';
import ButtonGroupComponent from './components/ButtonGroupComponent/ButtonGroupComponent';
import LogComponent from './components/LogComponent/LogComponent';

const App = () => {
  return (
    <Box>
      <Typography
        variant="h3"
        sx={{
          fontWeight: 'bold',
          mb: '15px',
        }}
      >
        Testing Work
      </Typography>
      <ButtonGroupComponent />
      <LogComponent />
    </Box>
  );
};

export default App;

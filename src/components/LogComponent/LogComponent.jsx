import { Box, Typography } from '@mui/material';
import { useSelector } from 'react-redux';

const LogComponent = () => {
  const log = useSelector((state) => state.log.log);
  return (
    <Box>
      {log?.map((logValue) => (
        <Typography key={logValue}>{logValue}</Typography>
      ))}
    </Box>
  );
};

export default LogComponent;

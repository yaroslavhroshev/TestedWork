import { ColorRing } from 'react-loader-spinner';
import { Box, Typography } from '@mui/material';
import { useSelector } from 'react-redux';

const LogComponent = () => {
  const log = useSelector((state) => state.log.log);
  const mark = useSelector((state) => state.log.buttonIsWork);
  return (
    <Box>
      {mark ? (
        <ColorRing
          visible
          height="80"
          width="80"
          ariaLabel="blocks-loading"
          wrapperStyle={{}}
          wrapperClass="blocks-wrapper"
          colors={['#b8c480', '#B2A3B5', '#F4442E', '#51E5FF', '#429EA6']}
        />
      ) : (
        log?.map((logValue) => (
          <Typography
            sx={{
              fontSize: {
                mobile: '0.8rem',
                desktop: '1.4rem',
              },
            }}
            key={logValue}
          >
            {logValue}
          </Typography>
        ))
      )}
    </Box>
  );
};

export default LogComponent;

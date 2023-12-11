import { ButtonGroup, Box } from '@mui/material';
import ButtonComponent from '../ButtonComponent/ButtonComponent';

const ButtonGroupComponent = () => {
  return (
    <Box
      sx={{
        mb: '15px',
      }}
    >
      <ButtonGroup
        variant="contained"
        aria-label="outlined primary button group"
        sx={{
          display: {
            mobile: 'grid',
            desktop: 'flex',
          },
          flexDirection: {
            desktop: 'row',
          },
          gridTemplateColumns: {
            mobile: '1fr 1fr',
          },
        }}
      >
        <ButtonComponent time={1} id="ekrmgk23415515" clear={false} />
        <ButtonComponent time={2} id="jsndjqoko2=003" clear={false} />
        <ButtonComponent time={3} id="skdn5468wef448" clear={false} />
        <ButtonComponent time={3} clear />
      </ButtonGroup>
    </Box>
  );
};

export default ButtonGroupComponent;

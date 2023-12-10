import { ButtonGroup } from '@mui/material';
import ButtonComponent from '../ButtonComponent/ButtonComponent';

const ButtonGroupComponent = () => {
  return (
    <div>
      <ButtonGroup
        variant="contained"
        aria-label="outlined primary button group"
      >
        <ButtonComponent time={1} id="ekrmgk23415515" />
        <ButtonComponent time={2} id="jsndjqoko2=003" />
        <ButtonComponent time={3} id="skdn5468wef448" />
      </ButtonGroup>
    </div>
  );
};

export default ButtonGroupComponent;

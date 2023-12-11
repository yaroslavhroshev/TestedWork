import { Box, Button } from '@mui/material';
import { PropTypes } from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useCallback, useState } from 'react';
import {
  changeLog,
  changeButtonIsWork,
  addToQueue,
  deleteFromQueue,
  clearLog,
} from '../../redux/slices/logSlices';

const ButtonComponent = ({ time, id, clear }) => {
  const [savedTime, setSavedTime] = useState(null);
  const dispatch = useDispatch();
  const workMark = useSelector((state) => state.log.buttonIsWork);
  const queue = useSelector((state) => state?.log?.queue);

  const timerFunction = useCallback(
    (clickTime = new Date(), mark = false) => {
      dispatch(changeButtonIsWork(true));
      if (mark) {
        dispatch(addToQueue(id));
      }
      setTimeout(() => {
        const end = new Date();
        const logObj = {
          number: time,
          timeForEnd: `${end.getHours()}:${end.getMinutes()}:${end.getSeconds()}`,
          timeForStart: `${clickTime.getHours()}:${clickTime.getMinutes()}:${clickTime.getSeconds()}`,
          passed: `${Math.trunc((end.getTime() - clickTime.getTime()) / 1000)}`,
        };
        dispatch(deleteFromQueue());
        dispatch(changeButtonIsWork(false));
        dispatch(changeLog(logObj));
      }, time * 1000);
    },
    [dispatch, id, time],
  );

  const handleClickTimer = () => {
    setSavedTime(new Date());
    if (!workMark) {
      timerFunction(undefined, true);
    } else {
      dispatch(addToQueue(id));
    }
  };

  const handleClickClear = () => {
    dispatch(clearLog());
  };

  useEffect(() => {
    if (queue[0] === id && !workMark) {
      timerFunction(savedTime);
    }
  }, [id, queue, savedTime, timerFunction, workMark]);

  return (
    <Box
      sx={{
        margin: '5px',
      }}
    >
      {clear ? (
        <Button
          size="large"
          sx={{
            borderRadius: '4px!important',
            color: '#000',
            fontWeight: 'bold',
          }}
          onClick={handleClickClear}
        >
          Clear
        </Button>
      ) : (
        <Button
          size="large"
          onClick={handleClickTimer}
          sx={{ borderRadius: '4px!important' }}
        >{`${time} sec`}</Button>
      )}
    </Box>
  );
};

ButtonComponent.propTypes = {
  time: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
  clear: PropTypes.bool,
};

ButtonComponent.defaultProps = {
  clear: false,
};

export default ButtonComponent;

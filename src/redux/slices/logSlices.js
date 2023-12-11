import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  buttonIsWork: false,
  queue: [],
  log: [],
};

const logSlice = createSlice({
  name: 'log',
  initialState,
  reducers: {
    changeLog(state, action) {
      const { number, timeForEnd, timeForStart, passed } = action.payload;
      state.log.push(
        `Button №${number}: ${timeForEnd} - ${timeForStart} (${passed} sec)`,
      );
    },
    clearLog(state) {
      state.log = [];
    },
    changeButtonIsWork(state, action) {
      state.buttonIsWork = action.payload;
    },
    addToQueue(state, action) {
      state.queue.push(action.payload);
    },
    deleteFromQueue(state) {
      state.queue.shift();
    },
  },
});

export const {
  changeLog,
  changeButtonIsWork,
  addToQueue,
  deleteFromQueue,
  clearLog,
} = logSlice.actions;

export default logSlice.reducer;
import { createSlice } from '@reduxjs/toolkit';

interface IState {
  windowSize: number;
  windowFit: number;
  height: number;
}

const initialState: IState = {
  windowSize: 0,
  windowFit: 0,
  height: 0,
};

export const screenSlice = createSlice({
  name: 'screenSize',
  initialState,
  reducers: {
    setWindowSize: (state, { payload }) => {
      state.windowSize = payload;
      state.windowFit = payload - 48;
    },
    setWindowHeight: (state, { payload }) => {
      state.height = payload;
    },
  },
});

export const { setWindowSize, setWindowHeight } = screenSlice.actions;

export default screenSlice.reducer;

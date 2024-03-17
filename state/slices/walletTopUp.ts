import { createSlice } from '@reduxjs/toolkit';

interface IState {
  topUpStart: boolean;
  topUpSelected: boolean;
  topUpPurchased: boolean;
  topUpDetails: { amount: '' };
}

const initialState: IState = {
  topUpStart: false,
  topUpSelected: false,
  topUpPurchased: false,
  topUpDetails: { amount: '' },
};

export const topUpSlice = createSlice({
  name: 'topUp',
  initialState,
  reducers: {
    setTopUpLoading: (state) => {
      state.topUpStart = true;
      state.topUpSelected = false;
    },
    setTopUp: (state, { payload }) => {
      state.topUpStart = false;
      state.topUpSelected = true;
      state.topUpDetails = payload;
    },
    setTopUpPurchased: (state) => {
      state.topUpPurchased = !state.topUpPurchased;
    },
  },
});

export const { setTopUpLoading, setTopUp, setTopUpPurchased } =
  topUpSlice.actions;

export default topUpSlice.reducer;

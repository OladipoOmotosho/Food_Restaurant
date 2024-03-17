import { createSlice } from '@reduxjs/toolkit';

interface IState {
  deliverySet: boolean;
  details: {
    firstName: string;
    lastName: string;
    address: string;
    info?: string;
  };
  orderComplete: boolean;
}

const initialState: IState = {
  deliverySet: false,
  details: { firstName: '', lastName: '', address: '', info: '' },
  orderComplete: false,
};

export const checkoutSlice = createSlice({
  name: 'checkout',
  initialState,
  reducers: {
    setDelivery: (state, { payload }) => {
      state.deliverySet = true;
      state.details = payload;
    },
    setOrderComplete: (state) => {
      state.orderComplete = !state.orderComplete;
    },
    unsetDelivery: (state) => {
      state.deliverySet = false;
      state.details = { firstName: '', lastName: '', address: '', info: '' };
    },
  },
});

export const { setDelivery, setOrderComplete, unsetDelivery } =
  checkoutSlice.actions;

export default checkoutSlice.reducer;

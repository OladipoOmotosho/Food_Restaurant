import { createSlice } from '@reduxjs/toolkit';

interface IState {
  giftCardStart: boolean;
  giftCardSelected: boolean;
  giftCardPurchased: boolean;
  giftCardDetails: { amount: '' };
}

const initialState: IState = {
  giftCardStart: false,
  giftCardSelected: false,
  giftCardPurchased: false,
  giftCardDetails: { amount: '' },
};

export const giftCardSlice = createSlice({
  name: 'giftCard',
  initialState,
  reducers: {
    setGiftCardLoading: (state) => {
      state.giftCardStart = true;
    },
    setGiftCard: (state, { payload }) => {
      state.giftCardStart = false;
      state.giftCardSelected = true;
      state.giftCardDetails = payload;
    },
    setGiftCardPurchased: (state) => {
      state.giftCardPurchased = !state.giftCardPurchased;
    },
  },
});

export const { setGiftCardLoading, setGiftCard, setGiftCardPurchased } =
  giftCardSlice.actions;

export default giftCardSlice.reducer;

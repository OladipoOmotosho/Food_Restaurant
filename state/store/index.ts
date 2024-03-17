import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import checkout from '../slices/checkout';
import screensize from '../slices/screensize';
import giftCard from '../slices/giftCard';
import cart from '../slices/cart';
import walletTopUp from '../slices/walletTopUp';

export function makeStore() {
  return configureStore({
    reducer: {
      checkout,
      giftCard,
      screensize,
      cart,
      walletTopUp,
    },
  });
}

const store = makeStore();

export type AppState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action<string>
>;

export default store;

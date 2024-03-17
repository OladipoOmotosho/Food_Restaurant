import { createSlice } from '@reduxjs/toolkit';

interface ICartItem {
  id: string;
  image: string;
  name: string;
  quantity: number;
  price: number;
}

let cartItems = [];
let total = 0;
if (typeof window !== 'undefined' && window.localStorage) {
  try {
    cartItems = JSON.parse(localStorage.getItem('cart') || '[]');
    total = JSON.parse(localStorage.getItem('total') || '0');
  } catch (e) {
    cartItems = [];
  }
}
const initialState: { items: ICartItem[]; total: number } = {
  items: cartItems,
  total,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, { payload }) => {
      const existingItem = state.items.find((item) => item.id === payload.id);
      if (existingItem) {
        existingItem.quantity += payload.quantity;
        state.total += existingItem.price * payload.quantity;
        localStorage.setItem('cart', JSON.stringify(state.items));
        localStorage.setItem('total', JSON.stringify(state.total));
      } else {
        state.items.push(payload);
        state.total += payload.price * payload.quantity;
        localStorage.setItem('cart', JSON.stringify(state.items));
        localStorage.setItem('total', JSON.stringify(state.total));
      }
    },
    removeFromCart: (state, { payload }) => {
      const index = state.items.findIndex((item) => item.id === payload);
      state.total -= state.items[index].price * state.items[index].quantity;
      state.items.splice(index, 1);
      localStorage.setItem('cart', JSON.stringify(state.items));
      localStorage.setItem('total', JSON.stringify(state.total));
    },
    clearCart: (state) => {
      state.items.splice(0, state.items.length);
      state.total = 0;
      localStorage.removeItem('cart');
      localStorage.removeItem('total');
    },
    incrementItemQuantity: (state, { payload }) => {
      const item = state.items.find((i) => i.id === payload);
      if (item) {
        item.quantity += 1;
        state.total += item.price;
        localStorage.setItem('cart', JSON.stringify(state.items));
        localStorage.setItem('total', JSON.stringify(state.total));
      }
    },
    decrementItemQuantity: (state, action) => {
      const item = state.items.find((i) => i.id === action.payload);
      if (item) {
        item.quantity -= 1;
        state.total -= item.price;
        localStorage.setItem('cart', JSON.stringify(state.items));
        localStorage.setItem('total', JSON.stringify(state.total));
        if (item.quantity < 1) {
          state.items.splice(state.items.indexOf(item), 1);
          localStorage.setItem('cart', JSON.stringify(state.items));
          localStorage.setItem('total', JSON.stringify(state.total));
        }
      }
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  clearCart,
  incrementItemQuantity,
  decrementItemQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;

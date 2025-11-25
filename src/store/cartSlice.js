import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: JSON.parse(localStorage.getItem('neon-cart')) || [],
  isOpen: false,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    toggleCart: (state) => {
      state.isOpen = !state.isOpen;
    },
    addToCart: (state, action) => {
      const existingIndex = state.items.findIndex(item => item.id === action.payload.id);
      if (existingIndex >= 0) {
        state.items[existingIndex].quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1, cartId: Date.now() });
      }
      state.isOpen = true;
      localStorage.setItem('neon-cart', JSON.stringify(state.items));
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter(item => item.cartId !== action.payload);
      localStorage.setItem('neon-cart', JSON.stringify(state.items));
    },
    updateQuantity: (state, action) => {
      const { cartId, quantity } = action.payload;
      const item = state.items.find(item => item.cartId === cartId);
      if (item) {
        item.quantity = Math.max(1, quantity);
      }
      localStorage.setItem('neon-cart', JSON.stringify(state.items));
    },
    clearCart: (state) => {
      state.items = [];
      localStorage.setItem('neon-cart', JSON.stringify([]));
    }
  },
});

export const { toggleCart, addToCart, removeFromCart, updateQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
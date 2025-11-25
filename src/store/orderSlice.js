import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  // Load existing orders from local storage or start empty
  orders: JSON.parse(localStorage.getItem('neon-orders')) || [],
};

const orderSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    addOrder: (state, action) => {
      // Add new order to the beginning of the array (newest first)
      state.orders.unshift(action.payload);
      
      // Persist to local storage
      localStorage.setItem('neon-orders', JSON.stringify(state.orders));
    },
    clearOrders: (state) => {
      state.orders = [];
      localStorage.setItem('neon-orders', JSON.stringify([]));
    }
  },
});

export const { addOrder, clearOrders } = orderSlice.actions;
export default orderSlice.reducer;
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
import themeReducer from './themeSlice';
import authReducer from './authSlice'; 
import wishlistReducer from './wishlistSlice';
import orderReducer from './orderSlice'; // 1. Import Order reducer

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    theme: themeReducer,
    auth: authReducer,
    wishlist: wishlistReducer,
    orders: orderReducer, // 2. Add it to the store
  },
});
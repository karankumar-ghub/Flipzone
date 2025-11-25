import { createSlice } from '@reduxjs/toolkit';

// Check localStorage for existing session
const savedUser = localStorage.getItem('neon-user');
const initialState = {
  isLoggedIn: !!savedUser,
  user: savedUser ? JSON.parse(savedUser) : null,
  isLoginModalOpen: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    openLoginModal: (state) => {
      state.isLoginModalOpen = true;
    },
    closeLoginModal: (state) => {
      state.isLoginModalOpen = false;
    },
    login: (state, action) => {
      // In a real app, payload would come from backend API
      const mockUser = {
        name: action.payload.email.split('@')[0], // Use email prefix as name
        email: action.payload.email,
        avatar: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=100&q=80',
      };
      
      state.isLoggedIn = true;
      state.user = mockUser;
      state.isLoginModalOpen = false;
      
      // Persist to local storage
      localStorage.setItem('neon-user', JSON.stringify(mockUser));
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.user = null;
      localStorage.removeItem('neon-user');
    },
  },
});

export const { openLoginModal, closeLoginModal, login, logout } = authSlice.actions;
export default authSlice.reducer;
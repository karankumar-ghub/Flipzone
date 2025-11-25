import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  mode: localStorage.getItem('neon-theme') || 'dark', // 'dark' or 'light'
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.mode = state.mode === 'dark' ? 'light' : 'dark';
      localStorage.setItem('neon-theme', state.mode);
      
      // We apply the class directly to HTML for Tailwind/CSS variables
      if (state.mode === 'dark') {
        document.documentElement.classList.add('dark');
        document.documentElement.classList.remove('light');
      } else {
        document.documentElement.classList.add('light');
        document.documentElement.classList.remove('dark');
      }
    },
    initializeTheme: (state) => {
      if (state.mode === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.add('light');
      }
    }
  },
});

export const { toggleTheme, initializeTheme } = themeSlice.actions;
export default themeSlice.reducer;
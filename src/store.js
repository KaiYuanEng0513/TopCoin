import { configureStore, createSlice } from '@reduxjs/toolkit';

const darkModeSlice = createSlice({
  name: 'darkMode',
  initialState: {
    enabled: window.localStorage.getItem('theme') === 'dark' 
  },
  reducers: {
    toggleDarkMode: state => {
      state.enabled = !state.enabled;
      window.localStorage.setItem('theme', state.enabled ? 'dark' : 'light'); 
      document.documentElement.classList.toggle('dark', state.enabled); 
    }
  }
});

export const { toggleDarkMode } = darkModeSlice.actions;

const store = configureStore({
  reducer: {
    darkMode: darkModeSlice.reducer
  }
});

export default store;

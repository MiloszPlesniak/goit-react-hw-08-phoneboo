import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { Navigate } from 'react-router-dom';
import { registerUser, loginUser, logOut, refreshUser } from './thunk';

export const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};
export const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

const initialState = {
  token: '',
  isLoading: false,
  error: null,
  user: { name: null, email: null },
  isRefreshing: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [registerUser.fulfilled](state, { payload }) {
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggedIn = true;
      <Navigate to="/contacts" />;
    },
    [loginUser.fulfilled](state, { payload }) {
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggedIn = true;
      <Navigate to="/contacts" />;
    },
    [logOut.fulfilled](state) {
      state.isLoggedIn = false;
      state.token = null;
      state.user = { name: null, email: null };
    },
    [refreshUser.pending](state) {
      state.isRefreshing = true;
    },
    [refreshUser.fulfilled](state, { payload }) {
      state.user = payload;
      state.isLoggedIn = true;
      state.isRefreshing = false;
    },
    [refreshUser.rejected](state) {
      state.isRefreshing = false;
    },
  },
});

export default authSlice.reducer;

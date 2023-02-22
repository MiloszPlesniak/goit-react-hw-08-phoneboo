import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { setAuthHeader, clearAuthHeader } from './slice';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const registerUser = createAsyncThunk(
  'auth/register',
  async userData => {
    const res = await axios.post('/users/signup', userData);
    setAuthHeader(res.data.token);
    console.log(res);
    return res.data;
  }
);
export const loginUser = createAsyncThunk('auth/login', async userData => {
  const res = await axios.post('/users/login', userData);
  setAuthHeader(res.data.token);

  return res.data;
});
export const logOut = createAsyncThunk('auth/logOut', async token => {
  const res = await axios.post('/users/logout', token);
  clearAuthHeader();
  return res.data;
});
export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;
    if (persistedToken === null) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }
    try {
      setAuthHeader(persistedToken);
      const res = await axios.get('/users/current');
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

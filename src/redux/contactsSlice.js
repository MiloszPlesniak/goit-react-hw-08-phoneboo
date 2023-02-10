import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://63e2c57f619fce55d40e8019.mockapi.io';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async () => {
    const response = await axios.get('/contacts');
    return response.data;
  }
);
export const addContact = createAsyncThunk(
  'contact/addContact',
  async contact => {
    const response = await axios.post('/contacts', contact);
    return response.data;
  }
);
export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async id => {
    const response = await axios.delete(`/contacts/${id}`);
    return response.data;
  }
);

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,

  extraReducers: {
    [fetchContacts.pending](state) {
      state.isLoading = true;
    },
    [fetchContacts.fulfilled](state, { payload }) {
      state.isLoading = false;
      state.items = payload;
    },
    [fetchContacts.rejected](state, { payload }) {
      state.isLoading = false;
      state.error = payload;
    },
    [addContact.pending](state) {
      state.isLoading = true;
    },
    [addContact.fulfilled](state, { payload }) {
      state.items.push(payload);
      state.isLoading = false;
    },
    [addContact.rejected](state, { payload }) {
      state.isLoading = false;
      state.error = payload;
    },
    [deleteContact.pending](state) {
      state.isLoading = true;
    },
    [deleteContact.fulfilled](state, { payload }) {
      state.isLoading = false;
      state.items = state.items.filter(item => item.id !== payload.id);
    },
  },
});

export default contactsSlice.reducer;

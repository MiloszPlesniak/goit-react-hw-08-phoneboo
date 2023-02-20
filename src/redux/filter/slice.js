import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: { filter: '' },
  reducers: {
    changefilter: (state, { payload }) => {
      state.filter = payload;
    },
  },
});

export const { changefilter } = filterSlice.actions;

export default filterSlice.reducer;

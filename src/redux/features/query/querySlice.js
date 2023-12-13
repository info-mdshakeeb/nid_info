// slices/openSlice.js

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  open: { name: '', id: '', open: false },
  openUnion: { name: '', id: '', open: false },
  openGram: { name: '', id: '', open: false },
};

const querySlice = createSlice({
  name: 'query',
  initialState,
  reducers: {
    setOpen: (state, action) => {
      state.open = action.payload;
    },
    setOpenUnion: (state, action) => {
      state.openUnion = action.payload;
    },
    setOpenGram: (state, action) => {
      state.openGram = action.payload;
    },
  },
});

export const { setOpen, setOpenUnion, setOpenGram } = querySlice.actions;
export default querySlice.reducer;

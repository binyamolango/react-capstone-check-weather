import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  location: '',
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setLocation: (state, action) => {
      state.location = action.payload;
    },
  },
});

export default formSlice.reducer;
export const { setLocation } = formSlice.actions;

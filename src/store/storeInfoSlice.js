import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  storeInfo: {},
};

export const storeInfo = createSlice({
  name: "counter",
  initialState,
  reducers: {
    getStoreInfo: (state, action) => {
      state.storeInfo = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { getStoreInfo } = storeInfo.actions;

export default storeInfo.reducer;

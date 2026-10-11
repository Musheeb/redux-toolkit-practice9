import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increaseByOne: (state) => {
      state.count += 1;
    },
    decreasedByOne: (state) => {
      state.count -= 1;
    },
    increaseByValue: (state, action) => {
      state.count += action.payload;
    },
    resetAll: (state) => {
      state.count = 0;
    },
  },
});

export const { increaseByOne, decreasedByOne, increaseByValue, resetAll } =
  counterSlice.actions;

export default counterSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface SelectionState {
  country: string;
  state: string;
  city: string;
}

const initialState: SelectionState = {
  country: "",
  state: "",
  city: "",
};

export const selectionSlice = createSlice({
  name: "selection",
  initialState,
  reducers: {
    selectCountry: (state, action: PayloadAction<string>) => {
      state.country = action.payload;
    },
    selectState: (state, action: PayloadAction<string>) => {
      state.state = action.payload;
    },
    selectCity: (state, action: PayloadAction<string>) => {
      state.city = action.payload;
    },
  },
});

export const { selectCountry, selectState, selectCity } =
  selectionSlice.actions;

export default selectionSlice.reducer;

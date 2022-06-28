import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IContacts } from "../types/users";

const initialState: IContacts = {
  name: "",
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    // removeItem: (state, action: PayloadAction<{ id: number }>) => {
    //   return state.filter((p) => p.id !== action.payload.id);
    // },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;

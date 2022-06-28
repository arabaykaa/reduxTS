import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IContacts } from "../reducers/types/users";

const initialState: IContacts[] = [];

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<IContacts>) => {
      state.push(action.payload);
    },
    removeItem: (state, action: PayloadAction<{ id: number }>) => {
      return state.filter((p) => p.id !== action.payload.id);
    },
  },
});

export const cartReducer = cartSlice.reducer;
export const cartActions = cartSlice.actions;

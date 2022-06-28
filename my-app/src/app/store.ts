import { combineReducers, configureStore } from "@reduxjs/toolkit";
import contactsReducer from "./cart/cart.slice";
// import { cartSlice } from "./cart/cart.slice";

// const rootReducer = combineReducers({
//   toolkit: cartSlice.reducer,
// });

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./cart/cart.slice";

const rootReducer = combineReducers({
  toolkit: cartReducer,
});

export const store = configureStore({
  reducer: {
    contacts: rootReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

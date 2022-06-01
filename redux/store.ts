import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

type RootState = ReturnType<typeof store.getState>
export const cartSelect = (state: RootState) => state.cart
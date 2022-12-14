import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import userReducer from "./userSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    user: userReducer,
  },
  //Getting an error "A non-serializable value was detected in the state" when using redux toolkit - but NOT with normal redux
  //With the getDefaultMiddleware getting depreciated, this can be resolved by use following code
  middleware: getDefaultMiddleware =>
  getDefaultMiddleware({
    serializableCheck: false,
  }),
});

type RootState = ReturnType<typeof store.getState>
export const cartSelect = (state: RootState) => state.cart
export const UserSelect = (state: RootState) => state.user;
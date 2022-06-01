import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Cart } from "../types/cart";
import { cartData } from "../fakeData/cartData";
import Cookies from 'js-cookie'


interface InitStat {
  cart: Cart[];
  quantity: number;
  total: number;
}

// const initialState: InitStat = {
//   cart: cartData,
//   quantity: 2,
//   total: 1000000,
// };
const initialState: InitStat = Cookies.get("cart")
  ? JSON.parse(Cookies.get("cart")!)
  : {
      cart: [],
      quantity: 0,
      total: 0,
    };

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Cart>) => {
      const exist = state.cart.findIndex((i) => i.id === action.payload.id);
      if (exist === -1) {
        state.cart.push(action.payload);
        state.quantity += 1;
        state.total += action.payload.price;
        Cookies.set("cart", JSON.stringify(state));
      }
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      const index = state.cart.findIndex((i) => i.id === action.payload);
      state.total -= state.cart[index].price;
      state.quantity -= 1;
      state.cart.splice(index, 1);
      Cookies.set("cart", JSON.stringify(state));
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../types/user";


type InitialState = {
  user: User | null;
  userIsReady: boolean;
};

const initialState: InitialState = {
  user: null,
  userIsReady: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
    logoutUser: (state) => {
      state.user = null;
    },
    authIsReady: (state, action: PayloadAction<User | null>) => {
      state.userIsReady = true;
      state.user = action.payload;
    },
  },
});

export const { loginUser, logoutUser, authIsReady } = userSlice.actions;
export default userSlice.reducer;

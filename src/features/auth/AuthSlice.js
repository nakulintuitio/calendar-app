import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: { isLoggedIn: false },
  reducers: {
    isLoggedIn(state, action) {
      state.isLoggedIn = action.payload;
    },
  },
});

export const { isLoggedIn } = authSlice.actions;
export default authSlice.reducer;

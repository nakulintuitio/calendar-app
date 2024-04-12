import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../components/api";

export const login = createAsyncThunk("auth/login", async (data) => {
  const response = await axiosInstance.post("/auth/login", data);
  return response.data;
});
const authSlice = createSlice({
  name: "auth",
  initialState: { isLoggedIn: false, user: {} },
  reducers: {
    isLoggedIn(state, action) {
      state.isLoggedIn = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.status = "loading";
      })
      .addCase(login.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.user = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { isLoggedIn, user } = authSlice.actions;
export default authSlice.reducer;

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../components/api";


export const getEvents = createAsyncThunk("events/getEvents", async () => {
  const response = await axiosInstance.get("/event");
  return response.data;
});
const eventSlice = createSlice({
  name: "events",
  initialState: { status: '', events: [] },
  extraReducers: (builder) => {
    builder
      .addCase(getEvents.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getEvents.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.events = action.payload;
      })
      .addCase(getEvents.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const selectEvents = (state) => state.events;
export default eventSlice.reducer;

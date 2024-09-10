import { createSlice } from "@reduxjs/toolkit";
import { getBookingsThunk } from "./BookingThunk";

export const BookingSlice = createSlice({
  name: "bookings",
  initialState: {
    status: "idle",
    data: [],
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getBookingsThunk.pending, (state, action) => {
        state.status = "pending";
      })
      .addCase(getBookingsThunk.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.data = action.payload;
      })
      .addCase(getBookingsThunk.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.error;
      });
  },
});

export const getBookingsListStatus = (state) => state.bookings.status;
export const getBookingsListData = (state) => state.bookings.data;
export const getBookingsListError = (state) => state.bookings.error;

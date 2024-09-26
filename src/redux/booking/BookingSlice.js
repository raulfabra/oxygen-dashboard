import { createSlice } from "@reduxjs/toolkit";
import { getBookingIdThunk, getBookingsThunk } from "./BookingThunk";

export const BookingsListSlice = createSlice({
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

export const getBookingsListData = (state) => state.bookings.data;
export const getBookingsListStatus = (state) => state.bookings.status;
export const getBookingsListError = (state) => state.bookings.error;

export const BookingIdSlice = createSlice({
  name: "bookingId",
  initialState: {
    status: "idle",
    data: null,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getBookingIdThunk.pending, (state, action) => {
        state.status = "pending";
      })
      .addCase(getBookingIdThunk.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.data = action.payload;
      })
      .addCase(getBookingIdThunk.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.error;
      });
  },
});

export const getBookingId_Data = (state) => state.bookingId.data;

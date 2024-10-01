import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getBookingIdThunk, getBookingsThunk } from "./BookingThunk";
import { Booking } from "../../types/global";
import { RootState } from "../../app/store";

interface Slice {
  status: "idle" | "pending" | "fulfilled" | "rejected";
  data: Booking[] | null;
  error: undefined | string;
}

const initialState: Slice = {
  status: "idle",
  data: null,
  error: undefined,
};
export const BookingSlice = createSlice({
  name: "booking",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getBookingsThunk.pending, (state, action) => {
        state.status = "pending";
      })
      .addCase(getBookingsThunk.fulfilled, (state, action: PayloadAction<Booking[]>) => {
        state.status = "fulfilled";
        state.data = action.payload;
      })
      .addCase(getBookingsThunk.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.error.message;
      });
  },
});

export const getBookingsListData = (state: RootState) => state.booking.data;
export const getBookingsListStatus = (state: RootState) => state.booking.status;
export const getBookingsListError = (state: RootState) => state.booking.error;

export const BookingIdSlice = createSlice({
  name: "bookingId",
  initialState,
  reducers: {},
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
        state.error = action.error.message;
      });
  },
});

export const getBookingId_Data = (state: RootState) => state.bookingId.data;

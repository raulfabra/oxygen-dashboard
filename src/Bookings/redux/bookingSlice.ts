import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Booking } from "../types/type";
import { getBooking_ID_Thunk, getBookingsThunk } from "./bookingThunk";

interface State {
  status: "idle" | "pending" | "fulfilled" | "rejected";
  dataList: Booking[];
  data: Booking | null;
  error: string | null | undefined;
}
const initialState: State = {
  dataList: [],
  data: null,
  status: "idle",
  error: null,
};

export const bookingSlice = createSlice({
  name: "booking",
  initialState,
  reducers: {
    deleteBookingById: (state, action) => {
      const id = action.payload;
      state.dataList = state.dataList.filter((user) => user.id !== id);
    },
    orderBookings: (state, action) => {
      switch (action.payload.option) {
        case "guest":
          action.payload.status
            ? (state.dataList = state.dataList.sort((a, b) => a.fullName.toLowerCase().localeCompare(b.fullName.toLowerCase())))
            : (state.dataList = state.dataList.sort((a, b) => b.fullName.toLowerCase().localeCompare(a.fullName.toLowerCase())));
          break;
        case "orderdate":
          action.payload.status
            ? (state.dataList = state.dataList.sort((a, b) => a.orderDate.toString().localeCompare(b.orderDate.toString())))
            : (state.dataList = state.dataList.sort((a, b) => b.orderDate.toString().localeCompare(a.orderDate.toString())));
          break;
        case "checkin":
          action.payload.status
            ? (state.dataList = state.dataList.sort((a, b) => a.checkin.toString().localeCompare(b.checkin.toString())))
            : (state.dataList = state.dataList.sort((a, b) => b.checkin.toString().localeCompare(a.checkin.toString())));
          break;
        case "checkout":
          action.payload.status
            ? (state.dataList = state.dataList.sort((a, b) => a.checkout.toString().localeCompare(b.checkout.toString())))
            : (state.dataList = state.dataList.sort((a, b) => b.checkout.toString().localeCompare(a.checkout.toString())));
          break;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getBookingsThunk.pending, (state, action) => {
        state.status = "pending";
      })
      .addCase(getBookingsThunk.fulfilled, (state, action: PayloadAction<Booking[]>) => {
        state.status = "fulfilled";
        state.dataList = action.payload;
      })
      .addCase(getBookingsThunk.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.error.message;
      })
      .addCase(getBooking_ID_Thunk.pending, (state, action) => {
        console.log("antes seteamos a pending?");
        state.status = "pending";
      })
      .addCase(getBooking_ID_Thunk.fulfilled, (state, action: PayloadAction<Booking>) => {
        state.status = "fulfilled";
        console.log("estamos dentro");
        state.data = action.payload;
      })
      .addCase(getBooking_ID_Thunk.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.error.message;
      });
  },
});

export const { deleteBookingById, orderBookings } = bookingSlice.actions;

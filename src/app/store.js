import { configureStore } from "@reduxjs/toolkit";
import { BookingSlice } from "../redux/booking/BookingSlice";

export const reduxStore = configureStore({
  reducer: {
    bookings: BookingSlice.reducer,
  },
});

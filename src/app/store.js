import { configureStore } from "@reduxjs/toolkit";
import { BookingSlice } from "../redux/booking/BookingSlice";

export const store = configureStore({
  reducer: {
    bookings: BookingSlice.reducer,
  },
});

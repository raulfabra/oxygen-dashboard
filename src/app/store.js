import { configureStore } from "@reduxjs/toolkit";
import { BookingIdSlice, BookingsListSlice } from "../redux/booking/BookingSlice";

export const store = configureStore({
  reducer: {
    bookings: BookingsListSlice.reducer,
    bookingId: BookingIdSlice.reducer,
  },
});

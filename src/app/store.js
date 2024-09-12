import { configureStore } from "@reduxjs/toolkit";
import { BookingIdSlice, BookingsListSlice } from "../redux/booking/BookingSlice";
import { RoomIdSlice, RoomsListSlice } from "../redux/rooms/RoomsSlice";

export const store = configureStore({
  reducer: {
    bookings: BookingsListSlice.reducer,
    bookingId: BookingIdSlice.reducer,
    rooms: RoomsListSlice.reducer,
    roomId: RoomIdSlice.reducer,
  },
});

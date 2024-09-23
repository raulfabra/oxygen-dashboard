import { configureStore } from "@reduxjs/toolkit";
import { BookingIdSlice, BookingsListSlice } from "../redux/booking/BookingSlice";
import { RoomIdSlice, RoomsListSlice } from "../redux/rooms/RoomsSlice";
import { UserIdSlice, UsersListSlice } from "../redux/users/UsersSlice";
import { CustomersSlice } from "../redux/customers/CustomersSlice";

export const store = configureStore({
  reducer: {
    bookings: BookingsListSlice.reducer,
    bookingId: BookingIdSlice.reducer,
    rooms: RoomsListSlice.reducer,
    roomId: RoomIdSlice.reducer,
    users: UsersListSlice.reducer,
    userId: UserIdSlice.reducer,
    customers: CustomersSlice.reducer,
  },
});

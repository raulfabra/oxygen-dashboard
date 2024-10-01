import { configureStore } from "@reduxjs/toolkit";
import { BookingIdSlice, BookingSlice } from "../redux/booking/BookingSlice";
import { RoomIDSlice, RoomSlice } from "../redux/rooms/RoomSlice";
import { UserIdSlice, UserSlice } from "../redux/users/UsersSlice";
import { CustomerSlice } from "../redux/customers/CustomerSlice";

export const store = configureStore({
  reducer: {
    booking: BookingSlice.reducer,
    bookingId: BookingIdSlice.reducer,
    room: RoomSlice.reducer,
    roomId: RoomIDSlice.reducer,
    user: UserSlice.reducer,
    userId: UserIdSlice.reducer,
    customer: CustomerSlice.reducer,
  },
});

export type AppStore = typeof store;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];

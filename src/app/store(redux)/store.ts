import { configureStore } from "@reduxjs/toolkit";
import { bookingSlice } from "../../Bookings/redux/bookingSlice";
import { roomSlice } from "../../Rooms/redux/roomSlice";
import { customerSlice } from "../../Customers/redux/customerSlice";
import { userSlice } from "../../Users/redux/userSlice";

export const store = configureStore({
  reducer: {
    bookings: bookingSlice.reducer,
    rooms: roomSlice.reducer,
    users: userSlice.reducer,
    customers: customerSlice.reducer,
  },
});

export type RootState = ReturnType<(typeof store)["getState"]>;
export type AppDispatch = (typeof store)["dispatch"];

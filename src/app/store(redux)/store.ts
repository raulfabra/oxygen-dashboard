import { configureStore } from "@reduxjs/toolkit";
import { bookingSlice } from "../../Bookings/redux/bookingSlice";
import { roomSlice } from "../../Rooms/redux/roomSlice";

export const store = configureStore({
  reducer: {
    bookings: bookingSlice.reducer,
    rooms: roomSlice.reducer,
  },
});

export type RootState = ReturnType<(typeof store)["getState"]>;
export type AppDispatch = (typeof store)["dispatch"];

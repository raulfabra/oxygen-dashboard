import { createAsyncThunk } from "@reduxjs/toolkit";

export const getBookingsThunk = createAsyncThunk("booking/getAllBookings", async () => {
  try {
    const request = await fetch("http://localhost:3001/booking");
    const response = await request.json();
    return response;
  } catch (error) {
    return error;
  }
});

export const getBooking_ID_Thunk = createAsyncThunk("booking/getBookingID", async (id: number) => {
  try {
    const request = await fetch(`http://localhost:3001/booking/${id}`);
    const response = await request.json();
    console.log(response);
    return response;
  } catch (error) {
    return error;
  }
});

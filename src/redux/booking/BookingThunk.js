import { createAsyncThunk } from "@reduxjs/toolkit";
import { delay } from "../../utils/utils";
import db_json from "../../json/dataBookings.json";

export const getBookingsThunk = createAsyncThunk("booking/getBookingList", async () => {
  try {
    await delay(500);
    if (db_json.length > 0) return db_json;
  } catch (error) {
    return error;
  }
});

export const getBookingIdThunk = createAsyncThunk("booking/getBookingId", (id) => {
  try {
    if (db_json.length > 0) return db_json.find((booking) => booking.id_booking === id);
  } catch (error) {
    return error;
  }
});

export const deleteBookingIdThunk = createAsyncThunk("booking/deleteBookingId", (id) => {
  try {
    if (db_json.length > 0) {
      const deleteBooked = db_json.find((booking) => booking.id === id);
      console.log(deleteBooked);
    }
  } catch (error) {
    return error;
  }
});

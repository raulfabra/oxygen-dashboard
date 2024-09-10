import { createAsyncThunk } from "@reduxjs/toolkit";
import db_json from "../../json/dataBookings.json";

export const getBookingsThunk = createAsyncThunk("booking/getBookingList", () => {
  try {
    if (db_json.length > 0) return db_json;
  } catch (error) {
    console.log(error);
    return error;
  }
});

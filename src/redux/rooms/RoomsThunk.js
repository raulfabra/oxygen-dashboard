import { createAsyncThunk } from "@reduxjs/toolkit";
import { delay } from "../../utils/utils";
import db_json from "../../json/dataRooms.json";

export const getRoomsThunk = createAsyncThunk("rooms/getRoomsList", async () => {
  try {
    await delay(1000);
    if (db_json.length > 0) return db_json;
  } catch (error) {
    return error;
  }
});

export const getRoomIdThunk = createAsyncThunk("rooms/getRoomId", (id) => {
  try {
    if (db_json.length > 0) return db_json.find((room) => room.id_room === id);
  } catch (error) {
    return error;
  }
});

export const deleteRoomIdThunk = createAsyncThunk("rooms/deleteRoomId", (id) => {
  try {
    if (db_json.length > 0) {
      const deleteBooked = db_json.find((room) => room.id === id);
      console.log(deleteBooked);
    }
  } catch (error) {
    return error;
  }
});

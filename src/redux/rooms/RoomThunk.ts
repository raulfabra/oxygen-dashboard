import { createAsyncThunk } from "@reduxjs/toolkit";
import { delay } from "../../utils/utils";
import { Room } from "../../types/global";
import db_json from "../../json/dataRooms.json";

export const getRoomsThunk = createAsyncThunk("room/getRoomsList", async () => {
  try {
    await delay(500);
    if (db_json.length > 0) return db_json;
  } catch (error) {
    return error;
  }
});

export const getRoomIdThunk = createAsyncThunk("room/getRoomId", (id: number) => {
  try {
    if (db_json.length > 0) return db_json.find((room) => room.id_room === id);
  } catch (error) {
    return error;
  }
});

export const deleteRoomIdThunk = createAsyncThunk("room/deleteRoomId", (id: number) => {
  try {
    if (db_json.length > 0) {
      const deleteBooked = db_json.find((room) => room.id_room === id);
      console.log(deleteBooked);
    }
  } catch (error) {
    return error;
  }
});

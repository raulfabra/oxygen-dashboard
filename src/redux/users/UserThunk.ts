import { createAsyncThunk } from "@reduxjs/toolkit";
import { delay } from "../../utils/utils";
import db_json from "../../json/dataUsers.json";

export const getUsersThunk = createAsyncThunk("users/getUsersList", async () => {
  try {
    await delay(500);
    if (db_json.length > 0) return db_json;
  } catch (error) {
    return error;
  }
});

export const getUserIdThunk = createAsyncThunk("users/getUserId", (id: number) => {
  try {
    if (db_json.length > 0) return db_json.find((user) => user.id_user === id);
  } catch (error) {
    return error;
  }
});

export const deleteUserIdThunk = createAsyncThunk("users/deleteUserId", (id: number) => {
  try {
    if (db_json.length > 0) {
      const deleteBooked = db_json.find((user) => user.id_user === id);
      console.log(deleteBooked);
    }
  } catch (error) {
    return error;
  }
});

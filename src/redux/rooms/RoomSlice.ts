import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getRoomIdThunk, getRoomsThunk } from "./RoomThunk";
import { Room } from "../../types/global";
import { RootState } from "../../app/store";

interface Slice {
  status: "idle" | "pending" | "fulfilled" | "rejected";
  data: Room[] | null;
  error: undefined | string;
}

const initialState: Slice = {
  status: "idle",
  data: null,
  error: undefined,
};
export const RoomSlice = createSlice({
  name: "room",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getRoomsThunk.pending, (state, action) => {
        state.status = "pending";
      })
      .addCase(getRoomsThunk.fulfilled, (state, action: PayloadAction<Room[]>) => {
        state.status = "fulfilled";
        state.data = action.payload;
      })
      .addCase(getRoomsThunk.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.error.message;
      });
  },
});

export const getRoomsListData = (state: RootState) => state.room.data;
export const getRoomsListStatus = (state: RootState) => state.room.status;
export const getRoomsListError = (state: RootState) => state.room.error;

export const RoomIDSlice = createSlice({
  name: "roomId",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getRoomIdThunk.pending, (state, action) => {
        state.status = "pending";
      })
      .addCase(getRoomIdThunk.fulfilled, (state, action: PayloadAction<Room[]>) => {
        state.status = "fulfilled";
        state.data = action.payload;
      })
      .addCase(getRoomIdThunk.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.error.message;
      });
  },
});

export const getRoomsId_Data = (state: RootState) => state.roomId.data;

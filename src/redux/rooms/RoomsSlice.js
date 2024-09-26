import { createSlice } from "@reduxjs/toolkit";
import { getRoomIdThunk, getRoomsThunk } from "./RoomsThunk";

export const RoomsListSlice = createSlice({
  name: "rooms",
  initialState: {
    status: "idle",
    data: [],
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getRoomsThunk.pending, (state, action) => {
        state.status = "pending";
      })
      .addCase(getRoomsThunk.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.data = action.payload;
      })
      .addCase(getRoomsThunk.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.error;
      });
  },
});

export const getRoomsListData = (state) => state.rooms.data;
export const getRoomsListStatus = (state) => state.rooms.status;
export const getRoomsListError = (state) => state.rooms.error;

export const RoomIdSlice = createSlice({
  name: "roomId",
  initialState: {
    status: "idle",
    data: null,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getRoomIdThunk.pending, (state, action) => {
        state.status = "pending";
      })
      .addCase(getRoomIdThunk.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.data = action.payload;
      })
      .addCase(getRoomIdThunk.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.error;
      });
  },
});

export const getRoomsId_Data = (state) => state.roomId.data;

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Room } from "../types/type";
import { getRoom_ID_Thunk, getRoomsThunk } from "./roomThunk";

interface State {
  status: "idle" | "pending" | "fulfilled" | "rejected";
  dataList: Room[];
  data: Room | null;
  error: string | null | undefined;
}
const initialState: State = {
  dataList: [],
  data: null,
  status: "idle",
  error: null,
};

export const roomSlice = createSlice({
  name: "room",
  initialState,
  reducers: {
    deleteRoomById: (state, action) => {
      const id = action.payload;
      state.dataList = state.dataList.filter((room) => room.id !== id);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getRoomsThunk.pending, (state, action) => {
        state.status = "pending";
      })
      .addCase(getRoomsThunk.fulfilled, (state, action: PayloadAction<Room[]>) => {
        state.status = "fulfilled";
        state.dataList = action.payload;
      })
      .addCase(getRoomsThunk.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.error.message;
      })
      .addCase(getRoom_ID_Thunk.pending, (state, action) => {
        state.status = "pending";
      })
      .addCase(getRoom_ID_Thunk.fulfilled, (state, action: PayloadAction<Room>) => {
        state.status = "fulfilled";
        state.data = action.payload;
      })
      .addCase(getRoom_ID_Thunk.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.error.message;
      });
  },
});

export const { deleteRoomById } = roomSlice.actions;

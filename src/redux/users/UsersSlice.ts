import { createSlice } from "@reduxjs/toolkit";
import { getUserIdThunk, getUsersThunk } from "./UserThunk";
import { User } from "../../types/global";
import { RootState } from "../../app/store";

interface Slice {
  status: "idle" | "pending" | "fulfilled" | "rejected";
  data: User[] | null;
  error: undefined | string;
}

const initialState: Slice = {
  status: "idle",
  data: null,
  error: undefined,
};

export const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUsersThunk.pending, (state, action) => {
        state.status = "pending";
      })
      .addCase(getUsersThunk.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.data = action.payload;
      })
      .addCase(getUsersThunk.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.error.message;
      });
  },
});

export const getUsersListData = (state: RootState) => state.user.data;
export const getUsersListStatus = (state: RootState) => state.user.status;
export const getUsersListError = (state: RootState) => state.user.error;

export const UserIdSlice = createSlice({
  name: "userId",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUserIdThunk.pending, (state, action) => {
        state.status = "pending";
      })
      .addCase(getUserIdThunk.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.data = action.payload;
      })
      .addCase(getUserIdThunk.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.error.message;
      });
  },
});

export const getUsersId_Data = (state: RootState) => state.userId.data;
export const getUsersId_Status = (state: RootState) => state.userId.status;
export const getUsersId_Error = (state: RootState) => state.userId.error;

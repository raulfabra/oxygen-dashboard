import { createSlice } from "@reduxjs/toolkit";
import { getUserIdThunk, getUsersThunk } from "./UsersThunk";

export const UsersListSlice = createSlice({
  name: "users",
  initialState: {
    status: "idle",
    data: [],
    error: null,
  },
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
        state.error = action.error;
      });
  },
});

export const getUsersListData = (state) => state.users.data;
export const getUsersListStatus = (state) => state.users.status;
export const getUsersListError = (state) => state.users.error;

export const UserIdSlice = createSlice({
  name: "userId",
  initialState: {
    status: "idle",
    data: [],
    error: null,
  },
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
        state.error = action.error;
      });
  },
});

export const getUsersId_Data = (state) => state.userId.data;
export const getUsersId_Status = (state) => state.userId.status;
export const getUsersId_Error = (state) => state.userId.error;

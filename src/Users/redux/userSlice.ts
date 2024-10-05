import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../types/type";
import { getUserThunk } from "./userThunk";

interface State {
  status: "idle" | "pending" | "fulfilled" | "rejected";
  dataList: User[];
  data: User | null;
  error: string | null | undefined;
}
const initialState: State = {
  dataList: [],
  data: null,
  status: "idle",
  error: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    deleteUserById: (state, action) => {
      const id = action.payload;
      state.dataList = state.dataList.filter((user) => user.id !== id);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUserThunk.pending, (state, action) => {
        state.status = "pending";
      })
      .addCase(getUserThunk.fulfilled, (state, action: PayloadAction<User[]>) => {
        state.status = "fulfilled";
        state.dataList = action.payload;
      })
      .addCase(getUserThunk.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.error.message;
      });
  },
});

export const { deleteUserById } = userSlice.actions;

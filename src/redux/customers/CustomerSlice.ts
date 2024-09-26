import { createSlice } from "@reduxjs/toolkit";
import { getCustomersThunk } from "./CustomerThunk";
import { Customer } from "../../types/global";
import { RootState } from "../../app/store";

interface Slice {
  status: "idle" | "pending" | "fulfilled" | "rejected";
  data: Customer[] | null;
  error: undefined | string;
}

const initialState: Slice = {
  status: "idle",
  data: null,
  error: undefined,
};
export const CustomerSlice = createSlice({
  name: "customer",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCustomersThunk.pending, (state, action) => {
        state.status = "pending";
      })
      .addCase(getCustomersThunk.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.data = action.payload;
      })
      .addCase(getCustomersThunk.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.error.message;
      });
  },
});

export const getCustomersListData = (state: RootState) => state.customer.data;
export const getCustomersListStatus = (state: RootState) => state.customer.status;
export const getCustomersListError = (state: RootState) => state.customer.error;

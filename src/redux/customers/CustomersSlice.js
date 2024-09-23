import { createSlice } from "@reduxjs/toolkit";
import { getCustomersThunk } from "./CustomersThunk";

export const CustomersSlice = createSlice({
  name: "customers",
  initialState: {
    status: "idle",
    data: [],
    error: null,
  },
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
        state.error = action.error;
      });
  },
});

export const getCustomersListData = (state) => state.customers.data;
export const getCustomersListStatus = (state) => state.customers.status;
export const getCustomersListError = (state) => state.customers.error;

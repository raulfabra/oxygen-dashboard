import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Customer } from "../types/type";
import { getCustomerThunk } from "./customerThunk";

interface State {
  status: "idle" | "pending" | "fulfilled" | "rejected";
  dataList: Customer[];
  data: Customer | null;
  error: string | null | undefined;
}
const initialState: State = {
  dataList: [],
  data: null,
  status: "idle",
  error: null,
};

export const customerSlice = createSlice({
  name: "customer",
  initialState,
  reducers: {
    deleteCustomerById: (state, action) => {
      const id = action.payload;
      state.dataList = state.dataList.filter((customer) => customer.id !== id);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCustomerThunk.pending, (state, action) => {
        state.status = "pending";
      })
      .addCase(getCustomerThunk.fulfilled, (state, action: PayloadAction<Customer[]>) => {
        state.status = "fulfilled";
        state.dataList = action.payload;
      })
      .addCase(getCustomerThunk.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.error.message;
      });
  },
});

export const { deleteCustomerById } = customerSlice.actions;

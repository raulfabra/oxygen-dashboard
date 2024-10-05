import { createAsyncThunk } from "@reduxjs/toolkit";

export const getCustomerThunk = createAsyncThunk("customer/getAllCustomers", async () => {
  try {
    const request = await fetch("http://localhost:3001/customer");
    const response = await request.json();
    return response;
  } catch (error) {
    return error;
  }
});

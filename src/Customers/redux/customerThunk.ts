import { createAsyncThunk } from "@reduxjs/toolkit";

export const getCustomerThunk = createAsyncThunk("customer/getAllCustomers", async () => {
  try {
    const userStorage = JSON.parse(sessionStorage.getItem("user")!);
    const request = await fetch("http://localhost:3001/customer", {
      headers: {
        Authorization: `Bearer ${userStorage.token}`,
      },
    });
    const response = await request.json();
    return response;
  } catch (error) {
    return error;
  }
});

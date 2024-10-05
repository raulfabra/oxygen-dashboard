import { createAsyncThunk } from "@reduxjs/toolkit";

export const getUserThunk = createAsyncThunk("user/getAllUsers", async () => {
  try {
    const request = await fetch("http://localhost:3001/user");
    const response = await request.json();
    return response;
  } catch (error) {
    return error;
  }
});

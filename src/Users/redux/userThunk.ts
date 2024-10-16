import { createAsyncThunk } from "@reduxjs/toolkit";

export const loginThunk = createAsyncThunk("user/login", async ({ email, password }: any) => {
  try {
    const response = await fetch("http://localhost:3001/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    if (response.ok) {
      const result = await response.json();
      return result;
    } else {
      const errorData = await response.json();
      console.log(errorData);
    }
  } catch (err) {
    console.error("Error en el login:", err);
  }
});

export const getUserThunk = createAsyncThunk("user/getAllUsers", async () => {
  try {
    const userStorage = JSON.parse(sessionStorage.getItem("user")!);

    const request = await fetch("http://localhost:3001/user", {
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

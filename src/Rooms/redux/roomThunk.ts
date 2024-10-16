import { createAsyncThunk } from "@reduxjs/toolkit";

export const getRoomsThunk = createAsyncThunk("room/getAllRooms", async () => {
  try {
    const userStorage = JSON.parse(sessionStorage.getItem("user")!);

    const request = await fetch("http://localhost:3001/room", {
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

export const getRoom_ID_Thunk = createAsyncThunk("room/getRoomID", async (id: number) => {
  try {
    const userStorage = JSON.parse(sessionStorage.getItem("user")!);

    const request = await fetch(`http://localhost:3001/room/${id}`, {
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

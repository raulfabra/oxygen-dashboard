import { createAsyncThunk } from "@reduxjs/toolkit";
import { delay } from "../../utils/utils";
import db_json from "../../json/dataCustomer.json";

export const getCustomersThunk = createAsyncThunk("customers/getCustomersList", async () => {
  try {
    await delay(500);
    if (db_json.length > 0) return db_json;
  } catch (error) {
    return error;
  }
});

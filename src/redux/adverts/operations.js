import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://661e683a98427bbbef0477bc.mockapi.io";

export const fetchCars = createAsyncThunk(
  "cars/fetchAll",

  async ({ page, pageSize }, thunkAPI) => {
    try {
      const data = await axios.get("/adverts", {
        params: {
          limit: pageSize,
          page: page,
        },
      });
      return data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(alert(error.message));
    }
  }
);

export const fetchAllCars = createAsyncThunk(
  "cars/fetchAllcars",
  async (_, thunkAPI) => {
    try {
      const data = await axios.get("/adverts");
      return data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(alert(error.message));
    }
  }
);

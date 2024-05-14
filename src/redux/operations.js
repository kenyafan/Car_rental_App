import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://661e683a98427bbbef0477bc.mockapi.io/";

export const fetchCars = createAsyncThunk(
  "cars/fetchAll",
  async (_, thunkAPI) => {
    const savedCars = thunkAPI.getState().cars.cars;
    if (!savedCars.length) {
      try {
        const { data } = await axios.get("adverts", {
          params: { page: 1, limit: 12 },
        });
        const newData = data.map((item) => {
          return { ...item, favorite: false };
        });
        return newData;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    } else {
      return savedCars;
    }
  }
);

export const fetchNextCarsPage = createAsyncThunk(
  "cars/fetchNextPage",
  async (_, thunkAPI) => {
    const { page } = thunkAPI.getState().cars;
    try {
      const { data } = await axios.get("adverts", {
        params: { page: page + 1, limit: 12 },
      });
      const newData = data.map((item) => {
        return { ...item, favorite: false };
      });
      return newData;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const filterCars = createAsyncThunk(
  "cars/filterCars",
  async (filter, thunkAPI) => {
    const { page } = thunkAPI.getState().cars;
    try {
      const { data } = await axios.get("adverts", {
        params: { page: 1, limit: 12, filter },
      });
      const newData = data.map((item) => {
        return { ...item, favorite: false };
      });
      return newData;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

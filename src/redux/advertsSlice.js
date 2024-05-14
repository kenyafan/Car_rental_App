import { createSlice } from "@reduxjs/toolkit";
import { fetchCars } from "./operations";

const initialState = {
  cars: [],
};

const slice = createSlice({
  name: "cars",
  initialState,
  selectors: {
    selectCars: (state) => state.cars,
  },
  reducers: {
    changeFavorite: (state, { payload }) => {
      const item = state.cars.find((item) => item.id === payload);
      item.favorite = !item.favorite;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCars.fulfilled, (state, { payload }) => {
      state.cars = payload;
    });
  },
});

export const carsReducer = slice.reducer;
export const { changeFavorite } = slice.actions;

export const { selectCars } = slice.selectors;

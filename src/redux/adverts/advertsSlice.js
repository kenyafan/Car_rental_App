import { createSlice } from "@reduxjs/toolkit";
import { fetchCars, fetchAllCars } from "./operations";

const initialState = {
  cars: [],
  carsAmount: null,
  loading: false,
  error: null,
  favoriteCars: [],
  page: null,
  carsRentalPrice: [],
};

export const slice = createSlice({
  name: "cars",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchCars.fulfilled, (state, { payload }) => {
        state.cars.push(...payload);
        state.loading = false;
      })
      .addCase(fetchCars.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCars.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      .addCase(fetchAllCars.fulfilled, (state, { payload }) => {
        state.carsAmount = payload.length;
        payload.map((el) => {
          state.carsRentalPrice.push(Number(el.rentalPrice.slice(1)));
        });
      });
  },
});

export const carsReducer = slice.reducer;

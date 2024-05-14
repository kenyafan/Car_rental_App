import { createSlice } from "@reduxjs/toolkit";
import { fetchCars, fetchNextCarsPage, filterCars } from "./operations";

const initialState = {
  cars: [],
  page: 1,
};

const slice = createSlice({
  name: "cars",
  initialState,
  selectors: {
    selectCars: (state) => state.cars,
    selectPage: (state) => state.page,
  },
  reducers: {
    changeFavorite: (state, { payload }) => {
      const item = state.cars.find((item) => item.id === payload);
      item.favorite = !item.favorite;
    },
    incrementPage: (state) => {
      state.page += 1;
    },
    setFilter: (state, { payload }) => {
      state.filter = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCars.fulfilled, (state, { payload }) => {
        state.cars = payload;
      })
      .addCase(fetchNextCarsPage.fulfilled, (state, { payload }) => {
        state.cars = [...state.cars, ...payload];
        state.page += 1;
      })
      .addCase(filterCars.fulfilled, (state, { payload }) => {
        state.cars = payload;
        state.page = 1;
      });
  },
});

export const carsReducer = slice.reducer;
export const { changeFavorite, setFilter, incrementPage } = slice.actions;

export const { selectCars, selectPage } = slice.selectors;

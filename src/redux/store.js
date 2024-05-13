import { configureStore } from "@reduxjs/toolkit";
import { filterReducer } from "./filters/filtersSlice";
import { carsReducer } from "./adverts/advertsSlice";

export const store = configureStore({
  reducer: {
    filters: filterReducer,
    cars: carsReducer,
  },
});

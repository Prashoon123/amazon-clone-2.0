import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "../slices/basketSlice";
import searchReducer from "../slices/searchSlice";

export const store = configureStore({
  reducer: {
    basket: basketReducer,
    search: searchReducer,
  },
});

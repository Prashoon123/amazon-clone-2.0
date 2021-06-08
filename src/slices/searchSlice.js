import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchString: "",
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    updateString: (state, action) => {
      state.searchString = action.payload;
    },
  },
});

export const { updateString } = searchSlice.actions;

export const searchString = (state) => state.search.searchString;

export default searchSlice.reducer;

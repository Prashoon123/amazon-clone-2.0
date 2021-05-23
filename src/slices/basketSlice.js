import { createSlice } from "@reduxjs/toolkit";
import Cookie from "js-cookie";

const cart = Cookie.getJSON("cart");

const initialState = {
  items: cart || [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      state.items = [...state.items, action.payload];
    },
    removeFromBasket: (state, action) => {
      const index = state.items.findIndex(
        (basketItem) => basketItem.id === action.payload.id
      );

      let newBasket = [...state.items];

      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Can't remove the product (id: ${action.payload.id}) as it is not in the cart.`
        );
      }

      state.items = newBasket;
    },
    emptyBasket: (state, action) => {
      state.items = action.payload;
    },
  },
});

export const { addToBasket, removeFromBasket, emptyBasket } =
  basketSlice.actions;

// Selectors - This is how we pull information from the Global store slice
export const selectItems = (state) => state.basket.items;
export const selectTotal = (state) =>
  state.basket.items.reduce((total, item) => total + item.price, 0);

export default basketSlice.reducer;

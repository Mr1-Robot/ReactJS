import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  items: [],
};

const productsSlice = createSlice({
  name: "products",
  initialState: INITIAL_STATE,
  reducers: {
    addItem: (state, action) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );

      if (existingItem) {
        state.items.quantity += 1;
      } else {
        state.items.push({
          ...action.payload,
          quantity: 1,
          totalPrice: Number(action.payload.price),
        });
      }
    },

    removeItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },

    increaseItemQuantity: (state, action) => {
      const itemToUpdate = state.items.find(
        (item) => item.id.toString() === action.payload.toString()
      );

      if (itemToUpdate) {
        itemToUpdate.quantity += 1;
        itemToUpdate.totalPrice += Number(itemToUpdate.price);
      }
    },

    decreaseItemQuantity: (state, action) => {
      const itemToUpdate = state.items.find(
        (item) => item.id.toString() === action.payload?.toString()
      );

      if (itemToUpdate) {
        if (itemToUpdate.quantity === 1) {
          state.items = state.items.filter(
            (item) => item.id !== itemToUpdate.id
          );
        } else {
          itemToUpdate.quantity -= 1;
          itemToUpdate.totalPrice -= itemToUpdate.price;
        }
      }
    },
  },
});

export const {
  addItem,
  removeItem,
  increaseItemQuantity,
  decreaseItemQuantity,
} = productsSlice.actions;

export default productsSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalQuantity: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const existing = state.items.find((i) => i.id === item.id);

      if (existing) {
        existing.quantity += item.quantity;
      } else {
        state.items.push(item);
      }

      state.totalQuantity += item.quantity;
    },
    removeFromCart: (state, action) => {
      const id = action.payload;
      const existing = state.items.find((i) => i.id === id);

      if (existing) {
        state.totalQuantity -= existing.quantity;
        state.items = state.items.filter((i) => i.id !== id);
      }
    },
    clearCart: (state) => {
      state.items = [];
      state.totalQuantity = 0;
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;

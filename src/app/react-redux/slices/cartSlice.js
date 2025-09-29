import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalQuantity: 0,
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { id, title, price, quantity,image } = action.payload;

      // normalize id to string to avoid 1 !== "1" issue
      const normalizedId = String(id);

      const existing = state.items.find((i) => i.id === normalizedId);

      if (existing) {
        existing.quantity += quantity;
      } else {
        state.items.push({
          id: normalizedId,
          title,
          price,
          quantity,
          image
        });
      }

      state.totalQuantity += quantity;
      state.totalAmount += price * quantity;

      console.log("Cart after add:", state.items);
    },

    decreaseQuantity: (state, action) => {
  const id = String(action.payload);
  const existing = state.items.find((i) => i.id === id);

  if (existing) {
    if (existing.quantity > 1) {
      existing.quantity -= 1;
      state.totalQuantity -= 1;
      state.totalAmount -= existing.price;
    } else {
      // If quantity is 1, remove the item
      state.totalQuantity -= 1;
      state.totalAmount -= existing.price;
      state.items = state.items.filter((i) => i.id !== id);
    }
  }
},






    removeFromCart: (state, action) => {
      const id = String(action.payload);
      const existing = state.items.find((i) => i.id === id);

      if (existing) {
        state.totalQuantity -= existing.quantity;
        state.totalAmount -= existing.price * existing.quantity;
        state.items = state.items.filter((i) => i.id !== id);
      }
    },

    clearCart: (state) => {
      state.items = [];
      state.totalQuantity = 0;
      state.totalAmount = 0;
    },
  },
});

export const { addToCart, removeFromCart, clearCart,decreaseQuantity } = cartSlice.actions;
export default cartSlice.reducer;

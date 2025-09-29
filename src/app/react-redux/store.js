import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice";

// Load from localStorage
const loadState = () => {
  try {
    const serializedState = localStorage.getItem("cartState");
    if (serializedState === null) return undefined;
    return JSON.parse(serializedState);
  } catch (e) {
    console.error("Could not load state", e);
    return undefined;
  }
};

// Save to localStorage
const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state.cart); // save only cart
    localStorage.setItem("cartState", serializedState);
  } catch (e) {
    console.error("Could not save state", e);
  }
};

const preloadedState = {
  cart: loadState() || {
    items: [],
    totalQuantity: 0,
    totalAmount: 0,
  },
};

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
  preloadedState,
});

// Subscribe to save on every change
store.subscribe(() => {
  saveState(store.getState());
});



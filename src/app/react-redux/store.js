import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice";

// Load state from localStorage (SSR-safe)
const loadState = () => {
  if (typeof window === "undefined") return undefined; // SSR: no localStorage
  try {
    const serializedState = localStorage.getItem("cartState");
    if (!serializedState) return undefined;
    return JSON.parse(serializedState);
  } catch (e) {
    console.error("Failed to load state", e);
    return undefined;
  }
};

// Save state to localStorage (SSR-safe)
const saveState = (state) => {
  if (typeof window === "undefined") return; // SSR: skip
  try {
    const serializedState = JSON.stringify(state.cart);
    localStorage.setItem("cartState", serializedState);
  } catch (e) {
    console.error("Failed to save state", e);
  }
};

// Initial state
const preloadedState = {
  cart: {
    items: [],
    totalQuantity: 0,
    totalAmount: 0,
    ...loadState(), // merge persisted cart if exists
  },
};

// Configure store
export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
  preloadedState,
});

// Subscribe to changes (SSR-safe)
store.subscribe(() => saveState(store.getState()));

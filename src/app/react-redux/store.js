const { configureStore } = require("@reduxjs/toolkit");

import cartReducer from "./slices/cartSlice";

export const store = configureStore({
reducer:{
    cart: cartReducer,
}
})
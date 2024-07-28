import { configureStore } from "@reduxjs/toolkit";
import loadingReducer from "./features/loading/loadingSlice";
import cartReducer from "./features/cart/cartSlice";

const store = configureStore({
  reducer: {
    loading: loadingReducer,
    cart: cartReducer,
  },
});

export default store;

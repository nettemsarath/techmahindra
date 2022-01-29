import { configureStore } from "@reduxjs/toolkit";
import ordersReducer from "slices/orders";
import productsReducer from "slices/products";

const store = configureStore({
  reducer: {
    orders: ordersReducer,
    products: productsReducer,
  },
  devTools: true,
});
export default store;

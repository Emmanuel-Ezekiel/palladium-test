import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../features/counter/productSlice";

export default configureStore({
  reducer: {
    product: productReducer,
  },
});

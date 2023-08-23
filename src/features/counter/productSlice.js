import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
  name: "products",
  initialState: {
    products: [

    ]
  },
  reducers: {
    addProduct: (state, action) => {
      state.products.push(action.payload)
    },
  },
});

// Action creators are generated for each case reducer function
export const { addProduct } = productSlice.actions;

// State from the Store
export const selectProducts = (state) => state.product.products;

export default productSlice.reducer;

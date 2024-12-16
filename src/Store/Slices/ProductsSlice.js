import { createSlice } from "@reduxjs/toolkit";

export const ProductsSlice = createSlice({
  name: "Products",
  initialState: {
    products: {},
    filteredProducts: {},
    topSellingProducts: "offers products",
    loadingProductsState: { state: "done", value: false },
    productInfo: {},
  },
  reducers: {
    getProducts: (state, { payload }) => {
      state.products = payload.products;
      state.filteredProducts = payload.filteredProducts;
    },
    changeTopProducts: (state, { payload }) => {
      state.topSellingProducts = payload;
    },
    loadingProducts: (state, { payload }) => {
      state.loadingProductsState.state = payload.state;
      state.loadingProductsState.value = payload.value;
    },
    getProductInfo: (state, { payload }) => {
      state.productInfo = payload;
    },
  },
});

export const {
  getProducts,
  changeTopProducts,
  loadingProducts,
  getProductInfo,
} = ProductsSlice.actions;
export default ProductsSlice.reducer;

import { configureStore } from "@reduxjs/toolkit";
import PortalSlice from "./Slices/PortalSlice";
import ProductsSlice from "./Slices/ProductsSlice";

export const store = configureStore({
  reducer: { PortalSlice, ProductsSlice },
});

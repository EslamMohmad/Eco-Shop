import { createSlice } from "@reduxjs/toolkit";

export const PortalSlice = createSlice({
  name: "Portal",
  initialState: {
    overlayState: false,
    popupMessageState: false,
    cartMenuState: false,
    searchItemsState: false,
    mainMenuState: false,
    productInfoState: false,
  },
  reducers: {
    closeOverlay: (state) => {
      for (let key in state) {
        if (state[key]) state[key] = false;
      }
    },
    openPopupWindow: (state) => {
      state.overlayState = true;
      state.popupMessageState = true;
    },
    closePopupWindow: (state) => {
      state.overlayState = false;
      state.popupMessageState = false;
    },
    toggleCartMenu: (state) => {
      state.overlayState = !state.overlayState;
      state.cartMenuState = !state.cartMenuState;
    },
    toggleSearchItems: (state) => {
      state.overlayState = !state.overlayState;
      state.searchItemsState = !state.searchItemsState;
    },
    toggleMainMenu: (state) => {
      state.overlayState = !state.overlayState;
      state.mainMenuState = !state.mainMenuState;
    },
    toggleProductInfo: (state) => {
      state.overlayState = !state.overlayState;
      state.productInfoState = !state.productInfoState;
    },
  },
});

export const {
  closeOverlay,
  openPopupWindow,
  closePopupWindow,
  toggleCartMenu,
  toggleSearchItems,
  toggleMainMenu,
  toggleProductInfo,
} = PortalSlice.actions;
export default PortalSlice.reducer;

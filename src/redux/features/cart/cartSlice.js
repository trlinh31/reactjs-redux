import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpenModal: false,
  cartItems: [],
};

const cardSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    openModal(state, action) {
      state.isOpenModal = action.payload;
    },
    addToCart(state, action) {
      const existingItem = state.cartItems.find((item) => item.id === action.payload.id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cartItems.push({ ...action.payload, quantity: 1 });
      }
      state.isOpenModal = true;
    },

    removeFromCart(state, action) {
      state.cartItems = state.cartItems.filter((item) => item.id !== action.payload);
    },
  },
});

export const { openModal, addToCart, removeFromCart } = cardSlice.actions;
export default cardSlice.reducer;

export const selectOpenCart = (state) => state.cart.isOpenModal;
export const selectCartItems = (state) => state.cart.cartItems;
export const selectCartTotal = (state) => state.cart.cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

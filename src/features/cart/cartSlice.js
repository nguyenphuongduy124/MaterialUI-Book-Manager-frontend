import { createSlice } from '@reduxjs/toolkit';
// import { removeOneElement } from '../../services/functions';

const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addToCart(state, action) {
      const { id, name, image, price } = action.payload;
      let index = state.findIndex((x) => x.id === id);
      if (index > -1) {
        state[index].quantity += 1;
        return state;
      }
      return [...state, { id, name, image, price, quantity: 1 }];
    },
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;

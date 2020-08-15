import { createSlice } from '@reduxjs/toolkit';
import { removeOneElement } from '../../services/functions';

const productsSlice = createSlice({
  name: 'products',
  initialState: [],
  reducers: {
    setProducts(state, action) {
      if (action.payload.length > 0) {
        return action.payload;
      } else {
        return state;
      }
    },
    removeProduct(state, action) {
      const { id } = action.payload;
      return removeOneElement(state, id); // remove a element in arr, then return arr
    },
    addProduct(state, action) {
      return [...state, action.payload];
    },
    updateProduct(state, action) {
      const { id, data } = action.payload;
      let index = state.findIndex((x) => x.id === id);
      if (index > -1) {
        state[index] = data;
        return state;
      }
      return state;
    },
  },
});

export const {
  setProducts,
  removeProduct,
  addProduct,
  updateProduct,
} = productsSlice.actions;
export default productsSlice.reducer;

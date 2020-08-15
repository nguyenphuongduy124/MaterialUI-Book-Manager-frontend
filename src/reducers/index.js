import { combineReducers } from 'redux';
import loadingReducer from '../features/loading/loadingSlice.js';
import toastifyReducer from '../features/toastify/toastifySlice.js';
import productsSlice from '../features/products/productsSlice.js';
import cartSlice from '../features/cart/cartSlice.js';
const rootReducer = combineReducers({
  loading: loadingReducer,
  toastify: toastifyReducer,
  products: productsSlice,
  cart: cartSlice,
});

export default rootReducer;

import { createSlice } from '@reduxjs/toolkit';
import storeItems from '../storeItems'

const initialState = {
  cartItems: storeItems,
  quantity: 2,
  total: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
});



export default cartSlice.reducer;

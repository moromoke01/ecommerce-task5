// import { configureStore } from "@reduxjs/toolkit"; store
// import authSlice from "./AuthSlice";


// export const store = configureStore({
//     reduce:{
//         auth: authSlice
//     }
// })

// src/store.js

import { configureStore } from '@reduxjs/toolkit';
import authReducer from './AuthSlice';
import wishlistReducer from '../Pages/Wishlist//WishlistSlice';
import cartReducer from '../Pages/CartPage/CartSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    wishlist: wishlistReducer,
    cart: cartReducer
  },
});






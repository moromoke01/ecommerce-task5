// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import { db } from '../../firebaseConfig';
// import { collection, getDocs, updateDoc, doc, deleteDoc, query, where } from 'firebase/firestore';

// export const fetchCartItems = createAsyncThunk('cart/fetchCartItems', async (userId) => {
//   const q = query(collection(db, 'cartItems'), where('userId', '==', userId));
//   const querySnapshot = await getDocs(q);
//   let items = [];
//   querySnapshot.forEach((doc) => {
//     items.push({ id: doc.id, ...doc.data() });
//   });
//   return items;
// });

// const cartSlice = createSlice({
//   name: 'cart',
//   initialState: {
//     cartItems: [],
//     status: 'idle',
//     error: null,
//   },
//   reducers: {
//     addToCart: (state, action) => {
//       state.cartItems.push(action.payload.item);
//     },
//     removeFromCart: (state, action) => {
//       const { itemId } = action.payload;
//       state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
//     },
//     updateQuantity: (state, action) => {
//       const { itemId, quantity } = action.payload;
//       const item = state.cartItems.find((item) => item.id === itemId);
//       if (item) {
//         item.quantity = quantity;
//       }
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchCartItems.pending, (state) => {
//         state.status = 'loading';
//       })
//       .addCase(fetchCartItems.fulfilled, (state, action) => {
//         state.status = 'succeeded';
//         state.cartItems = action.payload;
//       })
//       .addCase(fetchCartItems.rejected, (state, action) => {
//         state.status = 'failed';
//         state.error = action.error.message;
//       });
//   },
// });

// export const { addToCart, removeFromCart, updateQuantity } = cartSlice.actions;

// export default cartSlice.reducer;








import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { db } from '../../firebaseConfig';
import { collection, getDocs, updateDoc, doc, deleteDoc, query, where } from 'firebase/firestore';

// Helper function to get cart items from localStorage
const getCartItemsFromLocalStorage = () => {
  const savedCartItems = localStorage.getItem('cartItems');
  return savedCartItems ? JSON.parse(savedCartItems) : [];
};

// Async thunk to fetch cart items from Firestore or localStorage
export const fetchCartItems = createAsyncThunk('cart/fetchCartItems', async (userId) => {
  const localItems = getCartItemsFromLocalStorage();
  if (localItems.length > 0) {
    return localItems;
  } else {
    const q = query(collection(db, 'cartItems'), where('userId', '==', userId));
    const querySnapshot = await getDocs(q);
    let items = [];
    querySnapshot.forEach((doc) => {
      items.push({ id: doc.id, ...doc.data() });
    });
    return items;
  }
});

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartItems: [],
    status: 'idle',
    error: null,
  },
  reducers: {
    addToCart: (state, action) => {
      state.cartItems.push(action.payload.item);
      localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
    },
    removeFromCart: (state, action) => {
      const { itemId } = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
      localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
    },
    updateQuantity: (state, action) => {
      const { itemId, quantity } = action.payload;
      const item = state.cartItems.find((item) => item.id === itemId);
      if (item) {
        item.quantity = quantity;
      }
      localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCartItems.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCartItems.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.cartItems = action.payload;
        localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
      })
      .addCase(fetchCartItems.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { addToCart, removeFromCart, updateQuantity } = cartSlice.actions;

export default cartSlice.reducer;






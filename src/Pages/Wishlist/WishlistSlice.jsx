import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { db } from '../../firebaseConfig';
import { collection, getDocs, query, where } from 'firebase/firestore';

// Helper function to get wishlist items from localStorage
const getWishlistItemsFromLocalStorage = () => {
  const savedWishlistItems = localStorage.getItem('wishlistItems');
  return savedWishlistItems ? JSON.parse(savedWishlistItems) : [];
};

// Async thunk to fetch wishlist items from Firestore or localStorage
export const fetchWishlistItems = createAsyncThunk('wishlist/fetchWishlistItems', async (userId) => {
  const localItems = getWishlistItemsFromLocalStorage();
  if (localItems.length > 0) {
    return localItems;
  } else {
    const q = query(collection(db, 'wishlistItems'), where('userId', '==', userId));
    const querySnapshot = await getDocs(q);
    let items = [];
    querySnapshot.forEach((doc) => {
      items.push({ id: doc.id, ...doc.data() });
    });
    return items;
  }
});

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState: {
    wishlistItems: [],
    status: 'idle',
    error: null,
  },
  reducers: {
    addToWishlist: (state, action) => {
      state.wishlistItems.push(action.payload.item);
      localStorage.setItem('wishlistItems', JSON.stringify(state.wishlistItems));
    },
    removeFromWishlist: (state, action) => {
      const { itemId } = action.payload;
      state.wishlistItems = state.wishlistItems.filter((item) => item.id !== itemId);
      localStorage.setItem('wishlistItems', JSON.stringify(state.wishlistItems));
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchWishlistItems.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchWishlistItems.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.wishlistItems = action.payload;
        localStorage.setItem('wishlistItems', JSON.stringify(state.wishlistItems));
      })
      .addCase(fetchWishlistItems.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions;

export default wishlistSlice.reducer;

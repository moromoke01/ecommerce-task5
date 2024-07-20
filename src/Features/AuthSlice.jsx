//  import {auth} from "../firebaseConfig"
// import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
// import { createUserWithEmailAndPassword, 
//          signInWithEmailAndPassword,
//          signOut,
//          onAuthStateChanged
// } from 'firebase/auth';

// export const signup = createAsyncThunk("auth/signup",
//     async ({email, password}) =>{
//         await createUserWithEmailAndPassword(auth, email, password)
//     }
// );

// export const login = createAsyncThunk('auth/login',
//     async({email, password}) =>{
//         const res = await signInWithEmailAndPassword(auth, email, password);
//         return res.user;
//     }
// );

// export const logout = createAsyncThunk("auth/logout",
//     async() =>{
//         await signOut(auth);
//     }
// );

// export const listenAuthState = createAsyncThunk(
//     'auth/listenAuthState', async (_, {dispatch})=>{
//         onAuthStateChanged(auth, (user)=>{
//             if(user){
//                 dispatch(setUser(user));
//                 localStorage.setItem('user', JSON.stringify(user))
//             }else{
//                 dispatch(clearUser);
//                 localStorage.removeItem('user')
//             }
//         })
//     })

//     const authSlice = createSlice({
//         name: 'auth',
//         initialState:{
//             user: null,
//             // user: JSON.parse(localStorage.getItem('user')) || null,
//             status: 'idle',
//             error: null
//         },

//         reducers: {
//             setUser: (state, action) =>{
//                 state.user = action.payload
//             },
//             clearUser:(state) =>{
//                 state.user = null
//             }
//         },
//         extraReducers: (builder) =>{
//             builder
//             //signup
//             .addCase(signup.pending, (state) =>{
//                 state.status = 'loading'
//             })
//             .addCase(signup.fulfilled, (state)=>{
//                 state.status = 'succeeded'
//             })
//             .addCase(signup.rejected, (state, action)=>{
//                 state.status = 'failed'
//                 state.error = action.error.message
//             })

//             //login
//                 .addCase(login.pending, (state) =>{
//                     state.status = 'loading'
//                 })
//                 .addCase(login.fulfilled, (state, action)=>{
//                     state.status = 'succeeded'
//                     state.user = action.payload;
//                 })
//                 .addCase(login.rejected, (state, action)=>{
//                     state.status = 'failed'
//                     state.error = action.error.message     
//             })

//             //logout
//             .addCase(logout.fulfilled, (state)=>{
//                 state.user = null
//             })

//             //listenAuthState
//             .addCase(listenAuthState.fulfilled, (state, action)=>{
//                 state.status = 'succeeded'
//                 state.user = action.payload;
//             })
//         }
//     })

//     export const {setUser, clearUser} = authSlice.actions;
//     export default authSlice.reducer



// version 2 working perfectly
// import { auth } from "../firebaseConfig";
// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import { 
//     createUserWithEmailAndPassword, 
//     signInWithEmailAndPassword,
//     signOut,
//     onAuthStateChanged 
// } from 'firebase/auth';

// // Thunks for asynchronous actions
// export const signup = createAsyncThunk("auth/signup",
//     async ({ email, password }, { rejectWithValue }) => {
//         try {
//             const userCredential = await createUserWithEmailAndPassword(auth, email, password);
//             return userCredential.user;
//         } catch (error) {
//             return rejectWithValue(error.message);
//         }
//     }
// );

// export const login = createAsyncThunk("auth/login",
//     async ({ email, password }, { rejectWithValue }) => {
//         try {
//             const userCredential = await signInWithEmailAndPassword(auth, email, password);
//             return userCredential.user;
//         } catch (error) {
//             return rejectWithValue(error.message);
//         }
//     }
// );

// export const logout = createAsyncThunk("auth/logout",
//     async (_, { rejectWithValue }) => {
//         try {
//             await signOut(auth);
//         } catch (error) {
//             return rejectWithValue(error.message);
//         }
//     }
// );

// export const listenAuthState = createAsyncThunk(
//     "auth/listenAuthState", async (_, { dispatch }) => {
//         onAuthStateChanged(auth, (user) => {
//             if (user) {
//                 dispatch(setUser(user));
//                 localStorage.setItem("user", JSON.stringify(user));
//             } else {
//                 dispatch(clearUser());
//                 localStorage.removeItem("user");
//             }
//         });
//     }
// );

// const authSlice = createSlice({
//     name: "auth",
//     initialState: {
//         user: JSON.parse(localStorage.getItem("user")) || null,
//         status: "idle",
//         error: null,
//     },
//     reducers: {
//         setUser: (state, action) => {
//             state.user = action.payload;
//         },
//         clearUser: (state) => {
//             state.user = null;
//         }
//     },
//     extraReducers: (builder) => {
//         builder
//             // Signup
//             .addCase(signup.pending, (state) => {
//                 state.status = "loading";
//             })
//             .addCase(signup.fulfilled, (state, action) => {
//                 state.status = "succeeded";
//                 state.user = action.payload;
//             })
//             .addCase(signup.rejected, (state, action) => {
//                 state.status = "failed";
//                 state.error = action.payload;
//             })

//             // Login
//             .addCase(login.pending, (state) => {
//                 state.status = "loading";
//             })
//             .addCase(login.fulfilled, (state, action) => {
//                 state.status = "succeeded";
//                 state.user = action.payload;
//             })
//             .addCase(login.rejected, (state, action) => {
//                 state.status = "failed";
//                 state.error = action.payload;
//             })

//             // Logout
//             .addCase(logout.fulfilled, (state) => {
//                 state.user = null;
//             })

//             // Listen to Auth State Changes
//             .addCase(listenAuthState.fulfilled, (state, action) => {
//                 state.status = "succeeded";
//                 state.user = action.payload;
//             });
//     }
// });

// export const { setUser, clearUser } = authSlice.actions;
// export default authSlice.reducer;




//version 3, making code serializable

import { auth } from "../firebaseConfig";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth';

export const signup = createAsyncThunk("auth/signup", async ({ email, password }) => {
  await createUserWithEmailAndPassword(auth, email, password);
});

export const login = createAsyncThunk('auth/login', async ({ email, password }) => {
  const res = await signInWithEmailAndPassword(auth, email, password);
  const { uid, email: userEmail, displayName } = res.user;
  return { uid, email: userEmail, displayName }; // Only return serializable data
});

export const logout = createAsyncThunk("auth/logout", async () => {
  await signOut(auth);
});

export const listenAuthState = createAsyncThunk('auth/listenAuthState', async (_, { dispatch }) => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const { uid, email, displayName } = user;
      dispatch(setUser({ uid, email, displayName })); // Only dispatch serializable data
      localStorage.setItem('user', JSON.stringify({ uid, email, displayName }));
    } else {
      dispatch(clearUser());
      localStorage.removeItem('user');
    }
  });
});

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    status: 'idle',
    error: null
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    clearUser: (state) => {
      state.user = null;
    }
  },
  extraReducers: (builder) => {
    builder
      // signup
      .addCase(signup.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(signup.fulfilled, (state) => {
        state.status = 'succeeded';
      })
      .addCase(signup.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })

      // login
      .addCase(login.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(login.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.user = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })

      // logout
      .addCase(logout.fulfilled, (state) => {
        state.user = null;
      })

      // listenAuthState
      .addCase(listenAuthState.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.user = action.payload;
      });
  }
});

export const { setUser, clearUser } = authSlice.actions;
export default authSlice.reducer;

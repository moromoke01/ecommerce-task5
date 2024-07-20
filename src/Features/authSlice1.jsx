import {createSlice} from '@reduxjs/toolkit'


const initialState = {
 isloggedIn: false,
 name: null,
 email: null,
 password: null,
 userId: null

}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        SET_ACTIVE_USER: (state, action) => {
            
        }
    }
})

export const {} =authSlice.actions
export default authSlice.reducer
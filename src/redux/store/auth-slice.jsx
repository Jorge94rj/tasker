import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    token: '',
    uid: '',
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setCredentials(state, action) {
            return {...state, ...action.payload}
        }
    }
})

export const { 
    setCredentials,
} = authSlice.actions

export default authSlice.reducer
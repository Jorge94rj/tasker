import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    username: '',
    password: '',
}

const formLoginSlice = createSlice({
    name: 'formLogin',
    initialState,
    reducers: {
        updateLoginForm(state, action) {
            return {...state, ...action.payload}
        },
        clearLoginForm() {
            return initialState
        }
    }
})

export const { 
    updateLoginForm,
    clearLoginForm
} = formLoginSlice.actions

export default formLoginSlice.reducer
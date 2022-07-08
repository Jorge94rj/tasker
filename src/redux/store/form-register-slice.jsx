import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    username: '',
    password: '',
    confirmPassword: ''
}

const formRegisterSlice = createSlice({
    name: 'formRegister',
    initialState,
    reducers: {
        updateRegisterForm(state, action) {
            return {...state, ...action.payload}
        },
        clearRegisterForm() {
            return initialState
        }
    }
})

export const {
    updateRegisterForm,
    clearRegisterForm
} = formRegisterSlice.actions

export default formRegisterSlice.reducer
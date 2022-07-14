import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
    name: 'ui',
    initialState: {
        loading: false
    },
    reducers: {
        load: (state, action) => {
            return {...state, ...action.payload}
        },
    }
})

export const { actions, reducer } = uiSlice

export const {
    load
} = actions

export default reducer
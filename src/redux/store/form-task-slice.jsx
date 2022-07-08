import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: '',
    priority: '',
    status: '',
    description: '',
    note: '',
    uid: '',
    controls: {
        name: {
            touched: false
        },
        priority: {
            touched: false
        },
        status: {
            touched: false
        },
        description: {
            touched: false
        },
    }
}

const formTaskSlice = createSlice({
    name: 'formTask',
    initialState,
    reducers: {
        updateTaskForm: (state, action) => (
            {...state, ...action.payload}
        ),
        updateControlEvts: (state, action) => {
            const { name } = action.payload
            state.controls[name].touched = true
        },
        clearTaskForm() {
            return initialState
        }
    }
})

export const { 
    updateTaskForm,
    updateControlEvts,
    clearTaskForm
} = formTaskSlice.actions

export default formTaskSlice.reducer
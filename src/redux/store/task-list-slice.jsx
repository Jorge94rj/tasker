import { createSlice } from "@reduxjs/toolkit";

const taskListSlice = createSlice({
    name: 'task',
    initialState: [],
    reducers: {
        pushTask: (state, action) => {
            const { status } = action.payload
            state[status - 1].data.push(action.payload)
            return state
        },
        updateTaskList: (_state, action) => action.payload,
        removeTask: (state, action) => {
            const { id, status } = action.payload
            const idx = status - 1
            const filtered = state[idx].data.filter(t => t.id !== id)
            state[idx].data = filtered
            return state
        }
    }
})

export const { actions, reducer } = taskListSlice

export const {
    pushTask,
    updateTaskList,
    removeTask
} = actions

export default reducer
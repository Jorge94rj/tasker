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
        changeStatusFromList: (state, action) => {
            const { task, values } = action.payload
            const { oldVal, newVal } = values
            const currentListIdx = state[oldVal - 1]
            currentListIdx.data = currentListIdx.data.filter(t => t.id !== task.id)
            state[newVal - 1].data.push(task)
            return state
        },
        updateTaskFromList: (state, action) => {
            const { id, status } = action.payload
            const listIdx = state[status -1]
            const taskIdx = listIdx.data.findIndex(t => t.id === id)
            listIdx.data[taskIdx] = action.payload
            console.log(taskIdx)
            return state
        },
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
    updateTaskFromList,
    changeStatusFromList,
    removeTask
} = actions

export default reducer
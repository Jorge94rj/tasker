import { createSlice } from "@reduxjs/toolkit";
import { addTask, updateTask, removeTask } from "../actions/task-action";

const taskSlice = createSlice({
    name: 'task',
    initialState: [],
    reducers: {
        addTask,
        updateTask,
        removeTask
    }
})

export const { actions, reducer } = taskSlice

export default reducer
import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth-slice";
import formLoginSlice from "./form-login-slice";
import formRegisterSlice from "./form-register-slice";
import formTaskSlice from "./form-task-slice";
import taskListSlice from './task-list-slice'

const store = configureStore({
    reducer: {
        auth: authSlice,
        taskList: taskListSlice,
        formTask: formTaskSlice,
        formLogin: formLoginSlice,
        formRegister: formRegisterSlice
    }
})

export default store
import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from "./CounterSlice";
import TodoSlice from "./TodoSlice";
export default configureStore({
    reducer:{
        counter:CounterReducer,
        todolist:TodoSlice
    }
})
import {createSlice} from '@reduxjs/toolkit';

const todolist= createSlice({
    name:'todolist',
    initialState:[],
    reducers:{
        addTodo: (state, action) => {
            state.push(action.payload)
        },
        deleteTodo: (state, action) => {
            state.splice(action.payload, 1)
        } 
    }
});

export const {addTodo,deleteTodo}=todolist.actions;

export default todolist.reducer;
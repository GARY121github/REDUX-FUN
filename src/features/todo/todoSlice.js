import { createSlice , nanoid } from "@reduxjs/toolkit";

const initialState = {
    Todo: [
    ]
}

export const todoSlice = createSlice({
    name : 'todo',
    initialState,
    reducers: {
        // ADD NEW TODO
        addTodo : (state , actions) => {
            console.log("add todo" ,actions);
            console.log("toodooo" , actions.payload);
            const newTodo = {
                id : nanoid(),
                todo : actions.payload
            }
            state.Todo.push(newTodo);
        },
        // DELETE TODO
        deleteTodo : (state , actions) => {
            const newTodo = state.Todo.filter(todo => todo.id !== actions.payload);
            state.Todo = newTodo;
        }
    }
});

export const { addTodo , updateTodo , deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;
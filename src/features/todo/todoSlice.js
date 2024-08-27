import { createSlice,nanoid } from "@reduxjs/toolkit";

const initialState={
    todos:[{id:0, text:"Add todo"}]
}
// function sayHello(){
//     console.log("Hello World");
// }

export const todoSlice = createSlice({
    name:'todo',
    initialState,
    reducers:{
        addTodo: (state,action)=>{
            const todo = {

                    id:nanoid(), 
                    text:action.payload
            }
            state.todos.push(todo)
        },

        removeTodo: (state,action)=>{
            state.todos = state.todos.filter((todo)=>todo.id!== action.payload)
        },

        editTodo: (state,action)=>{
            const { id, text } = action.payload;
            const existingTodo = state.todos.find(todo => todo.id === id);
            // existingTodo && existingTodo.text = text;
            
            if (existingTodo) {
                existingTodo.text = text;
            }
        }
    }
});
    

export const {addTodo,removeTodo,editTodo} = todoSlice.actions //exporting individual reducers
export default todoSlice.reducer //exporting main source of all reducers
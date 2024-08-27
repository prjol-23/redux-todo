import { configureStore } from "@reduxjs/toolkit";
import todoReducer from '../features/todo/todoSlice'; //importing reducer

export const store = configureStore({
    reducer:todoReducer
})
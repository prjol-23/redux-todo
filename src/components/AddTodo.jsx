import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice"; //importing reducer
function AddTodo() {
  const [input, setInput] = useState("");

  const dispatch = useDispatch();
  



  const addTodoHandler = (e) => {
    e.preventDefault();
    if (input.trim()) {
      dispatch(addTodo(input));
      setInput(''); // Clear the form input after submission
    }
  };

  return (
    <form onSubmit={addTodoHandler}>
      <input
        type="text"
        placeholder="Add todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button
        style={{
          marginLeft: "15px",
          backgroundColor: "blue",
          maxWidth: "5rem",
          
          cursor: "pointer",
        }}
        type="submit"
        value="Add"
        onClick={addTodoHandler}
      >Add</button>
    </form>
  );
}

export default AddTodo;

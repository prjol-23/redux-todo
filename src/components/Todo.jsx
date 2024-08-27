import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { editTodo, removeTodo } from "../features/todo/todoSlice";

function Todo() {
  const [editInput, setEditInput] = useState("");
  const [editingId, setEditingId] = useState(null);
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleEditTodo = (id) => {
    setEditingId(id);
    const todo = todos.find((todo) => todo.id === id);
    setEditInput(todo.text);
  };

  const handleSaveEdit = (id) => {
    dispatch(editTodo({ id, text: editInput }));
    setEditingId(null);
    setEditInput("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editInput.trim()) {
      dispatch(addTodo(editInput));
    }
  };

  return (
    <ol type="1">
      {todos.map((todo) => (
        <li style={{ marginBottom: "15px" }} key={todo.id}>
          {editingId === todo.id ? (
            <>
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  value={editInput}
                  onChange={(e) => setEditInput(e.target.value)}
                />
                <button
                  style={{
                    backgroundColor: "green",
                    marginTop: "15px",
                    marginLeft: "20rem",
                  }}
                  onClick={() => handleSaveEdit(todo.id)}
                >
                  Save
                </button>
                <button
                  style={{ backgroundColor: "grey", marginLeft: "5px" }}
                  onClick={() => handleSaveEdit(todo.id)}
                >
                  Back
                </button>
              </form>
            </>
          ) : (
            <>
              {todo.text}
              <button
                style={{
                  backgroundColor: "grey",
                  marginTop: "15px",
                  marginLeft: "20rem",
                }}
                onClick={() => handleEditTodo(todo.id)}
              >
                Edit
              </button>

              <button
                style={{ backgroundColor: "red", marginLeft: "5px" }}
                onClick={() => dispatch(removeTodo(todo.id))}
              >
                Remove
              </button>
            </>
          )}
        </li>
      ))}
    </ol>
  );
}

export default Todo;

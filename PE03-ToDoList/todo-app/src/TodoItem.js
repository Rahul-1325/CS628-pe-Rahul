import React from "react";

const TodoItem = ({ todo, index, deleteTask }) => {
  return (
    <div className="todo-item">
      <span>{todo}</span>
      <button className="delete-btn" onClick={() => deleteTask(index)}>Delete</button>
    </div>
  );
};

export default TodoItem;

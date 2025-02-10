import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, deleteTask }) => {
  return (
    <div>
      {todos.map((todo, index) => (
        <TodoItem key={index} index={index} todo={todo} deleteTask={deleteTask} />
      ))}
    </div>
  );
};

export default TodoList;

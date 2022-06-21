import React from "react";

const ToDoList = ({ todos }) => {
  return (
    <div className="todo-list">
      <ul>
        {todos.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;

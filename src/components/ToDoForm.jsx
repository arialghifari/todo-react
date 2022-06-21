import React from "react";

const ToDoForm = ({ todo, handleChange, handleClick }) => {
  return (
    <div className="todo-form">
      <p>~ Today I need to ~</p>
      <span>
        <input
          value={todo}
          onChange={(e) => handleChange(e.key === "Enter", e.target.value)}
          onKeyPress={(e) => handleChange(e.key === "Enter", e.target.value)}
        />
        <button onClick={() => handleClick(todo)}>Submit</button>
      </span>
    </div>
  );
};

export default ToDoForm;

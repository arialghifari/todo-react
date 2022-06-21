import React, { useState } from "react";

import ToDoForm from "../components/ToDoForm";
import ToDoList from "../components/ToDoList";

const ToDo = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState(["Nyanyi", "Futsal", "Makan"]);

  const handleChange = (todo) => {
    setTodo(todo);
  };

  const handleClick = (todo) => {
    setTodos([...todos, todo]);
    setTodo("");
  };

  return (
    <div className="todo">
      <h2 className="title">To-Do List</h2>
      <ToDoForm
        todo={todo}
        handleChange={handleChange}
        handleClick={handleClick}
      />
      <ToDoList todos={todos} />
    </div>
  );
};

export default ToDo;

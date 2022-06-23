import React, { useState } from "react";

import ToDoForm from "../components/ToDoForm";
import ToDoList from "../components/ToDoList";

const ToDo = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([
    { id: 0, task: "Nyanyi", isCompleted: false },
    { id: 1, task: "Futsal", isCompleted: true },
  ]);

  const handleChange = (key, todo) => {
    setTodo(todo);

    if (key === "Enter") handleClick(todo);
  };

  const handleClick = (todo) => {
    const newTodo = { id: todos.length, task: todo, isCompleted: false };
    setTodos([...todos, newTodo]);
    setTodo("");
  };

  const handleCheckbox = (id) => {
    const checkboxChanged = todos.map((item) => {
      if (item.id === id) item.isCompleted = !item.isCompleted;

      return item;
    });

    setTodos(checkboxChanged);
  };

  return (
    <div className="todo">
      <h2 className="title">To-Do List</h2>
      <ToDoForm
        todo={todo}
        handleChange={handleChange}
        handleClick={handleClick}
      />
      <ToDoList todos={todos} handleCheckbox={handleCheckbox} />
    </div>
  );
};

export default ToDo;

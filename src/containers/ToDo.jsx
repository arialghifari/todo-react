import React, { useState } from "react";

import { Button } from "@mui/material";

import ToDoForm from "../components/ToDoForm";
import ToDoList from "../components/ToDoList";

const ToDo = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([
    { id: 0, task: "Gitar", isCompleted: false },
    { id: 1, task: "Futsal", isCompleted: true },
  ]);

  const handleChange = (key, todo) => {
    setTodo(todo);

    if (key === "Enter") handleClick(todo);
  };

  const handleClick = (todo) => {
    const newTodo = {
      id: todos.length > 0 ? todos[todos.length - 1].id + 1 : 0,
      task: todo,
      isCompleted: false,
    };

    setTodos([...todos, newTodo]);
    setTodo("");
  };

  const handleCheckbox = (id) => {
    const newTodo = [...todos];
    const i = todos.findIndex((todo) => todo.id === id);

    newTodo[i].isCompleted = !newTodo[i].isCompleted;
    setTodos(newTodo);
  };

  const handleRemove = () => {
    const newTodo = todos.filter((todo) => !todo.isCompleted);

    setTodos(newTodo);
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
      {todos.length > 0 && (
        <Button
          onClick={handleRemove}
          variant="outlined"
          fullWidth
          color="error"
        >
          Remove Completed
        </Button>
      )}
    </div>
  );
};

export default ToDo;

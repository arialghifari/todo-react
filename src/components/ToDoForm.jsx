import { TextField, Button } from "@mui/material";
import React from "react";

const ToDoForm = ({ todo, handleChange, handleClick }) => {
  return (
    <div className="todo-form">
      <p>~ Today I need to ~</p>
      <span>
        <TextField
          fullWidth
          label="To Do"
          variant="outlined"
          value={todo}
          onChange={(e) => handleChange(e.key, e.target.value)}
          onKeyPress={(e) => handleChange(e.key, e.target.value)}
        />
        <Button variant="contained" onClick={() => handleClick(todo)}>
          Submit
        </Button>
      </span>
    </div>
  );
};

export default ToDoForm;

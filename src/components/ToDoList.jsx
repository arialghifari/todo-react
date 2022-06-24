import React from "react";

import {
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Checkbox,
} from "@mui/material";

const ToDoList = ({ todos, handleCheckbox }) => {
  return (
    <div className="todo-list">
      <List sx={{ marginTop: "1rem" }}>
        {todos.map((todo) => (
          <ListItem key={todo.id} disablePadding>
            <ListItemButton onClick={() => handleCheckbox(todo.id)}>
              <Checkbox checked={todo.isCompleted} disableRipple />
              <ListItemText
                primary={todo.task}
                className={todo.isCompleted ? "done" : null}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default ToDoList;

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
        {todos.map((item, id) => (
          <ListItem key={item.id} disablePadding>
            <ListItemButton onClick={() => handleCheckbox(id)}>
              <Checkbox checked={item.isCompleted} />
              <ListItemText
                primary={item.task}
                className={item.isCompleted ? "done" : null}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default ToDoList;

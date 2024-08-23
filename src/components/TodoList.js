import React from 'react';
import { List, ListItem, ListItemText, ListItemSecondaryAction, IconButton, Checkbox } from '@mui/material';
import { Delete, Edit } from '@mui/icons-material';

const TodoList = ({ todos, onUpdateTodo, onDeleteTodo }) => {
  const sortedTodos = [...todos].sort((a, b) => a.title.localeCompare(b.title));

  return (
    <List>
      {sortedTodos.map((todo) => (
        <ListItem key={todo.id}>
          <Checkbox
            checked={todo.completed}
            onChange={() => onUpdateTodo(todo.id, { completed: !todo.completed })}
          />
          <ListItemText primary={todo.title} />
          <ListItemSecondaryAction>
            <IconButton edge="end" aria-label="edit" onClick={() => onUpdateTodo(todo.id, { title: prompt('Edit todo:', todo.title) })}>
              <Edit />
            </IconButton>
            <IconButton edge="end" aria-label="delete" onClick={() => onDeleteTodo(todo.id)}>
              <Delete />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      ))}
    </List>
  );
};

export default TodoList;
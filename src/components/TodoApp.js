import React, { useState, useEffect } from 'react';
import { Typography } from '@mui/material';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import { fetchTodos, addTodo, updateTodo, deleteTodo } from '../services/todoService';

const TodoApp = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetchTodos().then(setTodos);
  }, []);

  const handleAddTodo = async (title) => {
    const newTodo = await addTodo(title);
    setTodos([...todos, newTodo]);
  };

  const handleUpdateTodo = async (id, updates) => {
    const updatedTodo = await updateTodo(id, updates);
    setTodos(todos.map(todo => todo.id === id ? updatedTodo : todo));
  };

  const handleDeleteTodo = async (id) => {
    await deleteTodo(id);
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <>
      <Typography variant="h4" align="center" color='blue' component="h1" gutterBottom>
        Todo Task Manager
      </Typography>
      <TodoForm onAddTodo={handleAddTodo} />
      <TodoList
        todos={todos}
        onUpdateTodo={handleUpdateTodo}
        onDeleteTodo={handleDeleteTodo}
      />
    </>
  );
};

export default TodoApp;
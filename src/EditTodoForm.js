import React from 'react';
import useInputState from './hooks/useInputState';
import { TextField } from '@mui/material';

export default function EditTodoForm({ id, task, editTodo, toggleEditForm }) {
    const [value, handleChange, reset] = useInputState(task);
  return (
      <form onSubmit={(e) => {
          e.preventDefault();
          editTodo(id, value);
          reset();
          toggleEditForm();
      }}
      style={{ width: "100%" }}
      >
    <TextField 
    margin="normal" 
    value={value} 
    onChange={handleChange} 
    fullWidth 
    autoFocus
    />
    </form>
  );
}

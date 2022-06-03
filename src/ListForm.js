import React from 'react';
import useInputState from './hooks/useInputState';
import { TextField } from '@mui/material';
import { Paper } from '@mui/material';

export default function ListForm({addTodo}) {
    const [value, handleChange, reset] = useInputState("");
  return (
    <Paper style={{ margin: "1 rem 0", padding: "0 1rem" }} >
        <form onSubmit={e=> {
            e.preventDefault();
            addTodo(value);
            reset();
        }}>
        <TextField  
        value={value} 
        onChange={handleChange} 
        margin='normal' 
        style={{ marginBottom: "1rem" }} 
        label="Add New Item" 
        fullWidth />
        </form>
    </Paper>
  )
}

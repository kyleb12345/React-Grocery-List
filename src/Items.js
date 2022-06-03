import React from 'react'
import { ListItem } from '@mui/material';
import { ListItemText } from '@mui/material';
import { Checkbox } from '@mui/material';
import { ListItemSecondaryAction } from '@mui/material';
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';


export default function Items({task, completed, removeTodo, toggleTodo, id}) {
  return (
    <ListItem>
      <Checkbox 
      tabIndex={-1} 
      checked={completed} 
      onClick={() => toggleTodo(id)} 
      />
                <ListItemText style={{textDecoration: completed ? "line-through" : "none" }}>
                {task}
                </ListItemText>
                <ListItemSecondaryAction>
                  <IconButton aria-label="Delete" onClick={() => removeTodo(id)}>
                    <DeleteIcon />
                  </IconButton>
                  <IconButton aria-label="Edit">
                    <EditIcon />
                  </IconButton>
                </ListItemSecondaryAction>
            </ListItem>
  )
}


import React from 'react';
import { Paper } from '@mui/material';
import { List } from '@mui/material';
import { Divider } from '@mui/material';
import Items from './Items'


export default function GroceryList({todos, removeTodo, toggleTodo}) {
  return (
    <Paper>
        <List>
        {todos.map(todo =>(
            <>
                    <Items 
                    id={todo.id}
                    task={todo.task} 
                    key={todo.id} 
                    completed={todo.completed} 
                    removeTodo={removeTodo}
                    toggleTodo={toggleTodo}
                    />
            <Divider />
            </>
        ))}
        </List>
    </Paper>
  )
}

import React, { useState } from 'react';
import ListForm from './ListForm';
import GroceryList from './GroceryList';
import { Typography } from '@mui/material';
import { Paper } from '@mui/material';
import { AppBar } from '@mui/material';
import { Toolbar } from '@mui/material';
import { Grid } from '@mui/material';
import { v4 as uuidv4 } from 'uuid';

export default function TodoApp() {
    const initialList = [
        { id: 1, task: "Buy Milk", completed: false},
        { id: 2, task: "Buy Cheese", completed: false},
        { id: 3, task: "Buy Yogurt", completed: false},
        { id: 4, task: "Buy all dairy products", completed: false}
    ];

    const [todos, setTodos] = useState(initialList);
    const addTodo = newTodoText => {
        setTodos([...todos, {id: uuidv4(), task: newTodoText, completed: false}]);
    };

    const removeTodo = todoId => {
        const updatedTodos = todos.filter(todo => todo.id !== todoId);
        setTodos(updatedTodos);
    }

    const toggleTodo = todoId => {
        const updatedTodos = todos.map(todo => 
            todo.id === todoId ? {...todo, completed: !todo.completed} : todo
            );
            setTodos(updatedTodos);
    };

  return (
    <Paper style={{
        padding: 0,
        margin: 0,
        height: "100vh",
        backgroundColor: "#fafafa"
    }}
    elevation={0}
    >
        <AppBar color='primary' position='static' style={{ height: "64px "}}>
            <Toolbar>
                <Typography color='inherit'>Grocery List</Typography>
            </Toolbar>
        </AppBar>
        <Grid container style={{ marginTop: "1rem" }} justifyContent="center">
            <Grid item xs={11} md={8} lg={4}>
        <ListForm addTodo={addTodo}/>
        <GroceryList todos={todos} removeTodo={removeTodo} toggleTodo={toggleTodo} />
        </Grid>
        </Grid>
    </Paper>
  );
}


// todoApp -> todoForm -> todoList / todoItem (id, content, completed)


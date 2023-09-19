import React from 'react';
import { IconButton } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import { deleteTodo } from '../services';
import {useTodoStore} from './TodoApp';
import {TodoI, TodoStore} from '../types/Todo';

// Component takes in a prop called 'todo' that is of type 'TodoI'
const DeleteButton = (props: { todo: TodoI }) => {

    const todos = useTodoStore((state: TodoStore) => state.todos)
    const setTodos = useTodoStore((state: TodoStore) => state.setTodos)

    // Function to handle clicking on the delete button
	const onClickDelete = async () => {
        // If this TodoItem doesn't have an id, throw an error
        if (!props.todo.id) throw "Nothing to delete";

        // Call deleteTodo() and wait until we recieve response
        const response = await deleteTodo(props.todo.id);
        
        // If response is OK (status == 200), use setTodos to update the state of the todos
        if (response.status == 200) {
            // Use filter to create a new array that contains a subset of the array that doesn't have this todoItem's id
            // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
            // (all javascript is valid typescript)
            setTodos(todos.filter((todoItem) => todoItem.id !== props.todo.id));
        }
	};

    return (
        <IconButton
            // onClick (event triggers when button is clicked) is set to the onClickDelete() function
            onClick={onClickDelete} color="error" aria-label="delete">
            <ClearIcon />
        </IconButton>
    )
}

export default DeleteButton;
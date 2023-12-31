import React, { KeyboardEvent, useState, ChangeEventHandler } from 'react';
import { Box, TextField } from '@mui/material';
import { addTodo } from '../services'
import {useTodoStore} from './TodoApp';
import {TodoI, TodoStore} from '../types/Todo';

const TodoInput = () => {
    // Create a state for the input's value and initalizes it as ""
    const [inputValue, setInputValue] = useState("");
    const todos = useTodoStore((state: TodoStore) => state.todos)
    const setTodos = useTodoStore((state: TodoStore) => state.setTodos)

    // Function to handle the event when the input value changes
	const onChange: ChangeEventHandler<HTMLInputElement> = ({
        // Extracts 'value' from 'target'
		target: { value },
	}) => {
        // When it changes, use setInputValue() to set inputValue to value
		setInputValue(value);
	};

    // Function to add a todo
	const addItem = async () => {
		try {
            // Calls addTodo and provides a TodoI object with
            // taskName set to inputValue
            // completed set to false
            const { todo } = await addTodo({
                taskName: inputValue,
	            completed: false
            } as TodoI)

            // setTodos to all the previous todos with the new todo added to the end
			setTodos([...todos, todo]);
            // setInputValue() to "" to make the text input blank
			setInputValue("");
		} catch (e) {}
	};

    // Function to handle the event when a key press occurs
    const onKeyPress = (e: KeyboardEvent<HTMLImageElement>) => {
        // If that key is 'Enter'
        if (e.key === 'Enter') {
            e.preventDefault();
            // Call addItem()
            addItem()
        }
    }

    return (
        <Box>
            <TextField
                id="outlined-basic"
                label="Add a task"
                variant="outlined"
                // onChange event call the onChange() function
                onChange={onChange}
                // value of TextField is set to inputValue
                value={inputValue}
                sx={{ display: 'flex', width: '100%'}}
                // onKeyDown event call the onKeyPress() function
                onKeyDown={onKeyPress}
            />
        </Box>
    )
}

export default TodoInput;
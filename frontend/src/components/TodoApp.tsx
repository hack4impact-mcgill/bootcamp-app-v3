import { Container, Typography } from '@mui/material';
import TodoInput from "./TodoInput";
import TodoDisplay from "./TodoDisplay";
import { create } from 'zustand';
import {TodoI, TodoStore} from '../types/Todo';
import { useEffect } from 'react';
import {getTodos} from '../services';

export const useTodoStore = create<TodoStore>((set) => ({
    todos: [],
    setTodos: (updatedTodos: TodoI[]) => set(() => ({ todos: updatedTodos})),
}))

const TodoApp = () => {
    const setTodos = useTodoStore((state: TodoStore) => state.setTodos)

    useEffect(() => {
		// Create an async function to getTodos() and once the promise resolves, use setTodos()
		const fetchTodos = async () => {
			const {todos} = await getTodos();
			setTodos(todos)
		}
		
		fetchTodos()
	}, []);

    return (
        <Container maxWidth="md" >
            <Typography variant="h4" sx={{fontWeight: '600', color: '#0069CA', margin: '24px 0px 48px 0px'}}> Todo App </Typography>						
            <TodoInput/>
            <TodoDisplay/>
        </Container>
    )
}

export default TodoApp;
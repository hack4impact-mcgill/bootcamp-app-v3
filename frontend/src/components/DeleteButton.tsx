import {TodoI, TodoStore} from '../types/Todo';
import {useTodoStore} from './TodoApp';
import ClearIcon from '@mui/icons-material/Clear';
import { IconButton } from '@mui/material';
import {deleteTodo} from '../services';

const DeleteButton = (props: {todo: TodoI}) => {
    const todos = useTodoStore((state: TodoStore) => state.todos)
    const setTodos = useTodoStore((state: TodoStore) => state.setTodos)

    const onClickDelete = async () => {
        if (!props.todo.id) throw "Nothing to delete";
        const response = await deleteTodo(props.todo.id)
        if (response.status == 200) {
            setTodos(todos.filter((todoItem) => todoItem.id !== props.todo.id))
        }
    }

    return (
        <IconButton
            onClick={onClickDelete}
            color={"error"}
        >
            <ClearIcon/>
        </IconButton>
    )
}
export default DeleteButton;
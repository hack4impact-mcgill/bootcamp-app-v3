export interface TodoStore {
    todos: TodoI[]
    setTodos: (todos: TodoI[]) => void
}  

// Create an interface for Todo objects
export interface TodoI {
	// ? makes the property optional
	id?: number;
	taskName: string;
	completed: boolean
};
import { createContext, useState } from 'react';

// context
export const TodoContext = createContext()

// component provider
export default function TodoProvider({ children }) {
    
    // state, empty array
    const [todos, setTodos] = useState([])

    // functions

    // Adds a new todo item to the list.
    const addTodo = (text) => {

    };

    // Toggles the completed status of a todo item.
    const toggleTodo = (id) => {

    };

    // Removes a todo item from the list.
    const deleteTodo = (id) => {

    };

    // Edits the text of an existing todo item.
    const editTodo = (id) => {

    };

    // Removes all completed todos.
    const clearCompleted = () => {

    };

    return(
        <TodoContext.Provider value={{ todos, setTodos, addTodo, toggleTodo, deleteTodo, editTodo, clearCompleted }}>
            { children }
        </TodoContext.Provider>
    )
}
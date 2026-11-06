import { createContext, useState, useEffect, useCallback } from 'react';

// context
export const TodoContext = createContext()

// component provider
export default function TodoProvider({ children }) {

    // State: An array of todo items. 
    const [todos, setTodos] = useState(() => {
        const savedTodos = localStorage.getItem("todos")
        return savedTodos ? JSON.parse(savedTodos) : []
    })

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos))
    }, [todos])

    // functions

    // Adds a new todo item to the list.
    const addTodo = useCallback((text) => {

        const newTodo = {
            id: Date.now(), // A unique identifier (string or number).
            text: text, // The content of the todo (string).
            completed: false // A boolean indicating if the todo is completed.
        };

        setTodos([...todos, newTodo]);

    }, []);

    // Toggles the completed status of a todo item.
    const toggleTodo = useCallback((id) => {

        setTodos(prevTodos =>
            prevTodos.map(todo => 
            todo.id === id ? { ...todo, completed: !todo.completed } : todo)
              
        )}, [])
        


    // Removes a todo item from the list.
    const deleteTodo = useCallback((id) => {

        setTodos(prevTodos =>
            prevTodos.filter(todo => todo.id !== id))
    }, []);

    // Edits the text of an existing todo item.
    const editTodo = useCallback((id, newText) => {

        setTodos(prevTodos =>
            prevTodos.map(todo =>
                todo.id === id ? { ...todo, text: newText } : todo)

        )}, [])

// Removes all completed todos.
const clearCompleted = useCallback(() => {

    setTodos(prevTodos =>
        prevTodos.filter(todo => !todo.completed)
    )
}, []);

return (
    <TodoContext.Provider value={{ todos, setTodos, addTodo, toggleTodo, deleteTodo, editTodo, clearCompleted }}>
        {children}
    </TodoContext.Provider>
)
}
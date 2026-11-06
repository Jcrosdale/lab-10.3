import { createContext, useState, useEffect } from 'react';

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
    const addTodo = (text) => {

        const newTodo = {
            id: Date.now(), // A unique identifier (string or number).
            text: text, // The content of the todo (string).
            completed: false // A boolean indicating if the todo is completed.
        };

        setTodos([...todos, newTodo]);

    };

    // Toggles the completed status of a todo item.
    const toggleTodo = (id) => {

        setTodos(todos.map(todo => {
            if (todo.id === id) {
                return {
                    ...todo,
                    completed: !todo.completed
                }
            } else {
                return todo
            }
        })
        )

    };

    // Removes a todo item from the list.
    const deleteTodo = (id) => {

        setTodos(todos.filter(todo => todo.id !== id))
    };

    // Edits the text of an existing todo item.
    const editTodo = (id, newText) => {

        setTodos(todos.map(todo => {
            if (todo.id === id) {
                return {
                    ...todo,
                    text: newText
                }
            } else {
                return todo
            }

            
        }))
    };

    // Removes all completed todos.
    const clearCompleted = () => {

        setTodos(todos.filter(todo => !todo.completed))

    };

    return (
        <TodoContext.Provider value={{ todos, setTodos, addTodo, toggleTodo, deleteTodo, editTodo, clearCompleted }}>
            {children}
        </TodoContext.Provider>
    )
}
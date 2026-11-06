// TodoInput: An input field to add new todos.

// Imports
import { useContext, useState } from 'react'
import { TodoContext } from '../context/TodoContext'

export default function TodoInput() {

    // Calling useContext hook
    const [ input, setInput ] = useState('')
    const { addTodo } = useContext(TodoContext)

    // Helper function to set input
    function handleInput(e) {
        setInput(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault()
        addTodo(input)
        setInput('')

    }

    return (
        <form onSubmit={handleSubmit}>
            <input type='text' value={input} onChange={handleInput} />
            <button type='submit'>Add Todo</button>
        </form>
    )
}

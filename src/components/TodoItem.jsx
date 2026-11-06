// TodoItem: Represents a single todo item, allowing interaction (toggle, delete, edit).

// Imports
import { useContext, useState } from "react"
import { TodoContext } from "../context/TodoContext"

export default function TodoItem({ todo }) {

    // Component access to toggleTodo function
    const { toggleTodo, deleteTodo, editTodo } = useContext(TodoContext)
    const [editText, setEditText] = useState(todo.text)
    const [isEditing, setIsEditing] = useState(false)

    // handler function
    function handleToggle() {
        toggleTodo(todo.id)
    }

    function handleDelete() {
        deleteTodo(todo.id)
    }

    function handleEditInput(e) {
        setEditText(e.target.value)
    }

    function handleEdit() {
        editTodo(todo.id, editText)
        setIsEditing(false)
    }

    return (
        <section className='todo'>
            {isEditing ? (
                <>
                    <input type='text' value={editText} onChange={handleEditInput} />
                    <button onClick={handleEdit}>Save</button>
                </>
            ) : (
                <>
                
                    <span>{todo.text}</span>
                    <button onClick={() => setIsEditing(true)}>Edit</button>
                </>
            )}
            <input type='checkbox' name='todo'onChange={handleToggle} checked={todo.completed} />
            <button onClick={handleDelete}>Delete</button>
            
        </section>
    )
}


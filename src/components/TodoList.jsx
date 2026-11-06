// TodoList: Displays the list of todo items.

// Imports
import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";
import TodoItem from "./TodoItem";

export default function TodoList() {
    const { todos } = useContext(TodoContext)
    
    const todoItems = todos.map(todo => {
        return <TodoItem key={todo.id} todo={todo} />
})

    return (
        <>
            <h1>Todo List</h1>
            {todoItems}
        </>
    )
}
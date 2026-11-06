// TodoList: Displays the list of todo items.

// Imports
import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";
import TodoItem from "./TodoItem";
import { FilterContext } from "../context/FilterContext";

export default function TodoList() {
    const { todos } = useContext(TodoContext)
    const { filter } = useContext(FilterContext)

    const filteredTodos = todos.filter(todo => {
        if (filter === "active") {
            return !todo.completed
        }

        if (filter === "completed") {
            return todo.completed
        }

        return true
    })

    const todoItems = filteredTodos.map(todo => {
        return <TodoItem key={todo.id} todo={todo} />
    })

    return (
        <>
            <h1>Todo List</h1>
            {todoItems}
        </>
    )
}
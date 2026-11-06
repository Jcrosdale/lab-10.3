import { createContext, useState } from 'react';

// context
export const TodoContext = createContext()

// component provider
export default function TodoProvider({ children }) {
    
    // state, empty array
    const [todo, setTodo] = useState([])

    return(
        <TodoContext.Provider value={{ todo, setTodo }}>
            { children }
        </TodoContext.Provider>
    )
}
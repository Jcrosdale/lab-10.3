import './App.css'
import { useState, useEffect } from 'react';

import TodoProvider from './context/TodoContext';
import FilterProvider from './context/FilterContext';
import ThemeProvider from './context/ThemeContext';

import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import FilterButtons from './components/FilterButtons';
import ThemeToggleButton from './components/ThemeToggleButton';

export default function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light"

  })

  useEffect(() => {
    localStorage.setItem("theme", theme)
  }, [theme])
  return (
    <TodoProvider>
      <FilterProvider>
        <ThemeProvider theme={theme} setTheme={setTheme}>
          <div className={theme}>
            <TodoInput />
            <FilterButtons />
            <ThemeToggleButton />
            <TodoList />
          </div>
        </ThemeProvider>
      </FilterProvider>
    </TodoProvider>
  )
}
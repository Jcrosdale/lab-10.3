import './App.css'
import TodoProvider from './context/TodoContext';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import FilterProvider from './context/FilterContext';

export default function App() {

  return (
    <TodoProvider>
      <FilterProvider>
        <TodoInput />
        <TodoList />
      </FilterProvider>
    </TodoProvider>
  )
}
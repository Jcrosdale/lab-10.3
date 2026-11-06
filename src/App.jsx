import './App.css'
import TodoProvider from './context/TodoContext';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import FilterProvider from './context/FilterContext';
import FilterButtons from './components/FilterButtons';

export default function App() {

  return (
    <TodoProvider>
      <FilterProvider>
        <TodoInput />
        <FilterButtons />
        <TodoList />
      </FilterProvider>
    </TodoProvider>
  )
}
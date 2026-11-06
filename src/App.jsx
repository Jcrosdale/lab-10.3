import './App.css'
import TodoProvider from './context/TodoContext';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

export default function App() {

  return(
    <TodoProvider>
      <TodoInput />
      <TodoList />
    </TodoProvider>
  )
}
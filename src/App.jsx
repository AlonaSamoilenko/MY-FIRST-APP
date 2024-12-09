import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TodoList from './TodoList.jsx'
import AddTodoForm from './AddTodoForm.jsx'

function App() {
  const [count, setCount] = useState(0);
  const [todoList, setTodoList] = useState([]);

  function addTodo(newTodo){
    setTodoList([...todoList, newTodo]);
  }

  return (
    <div>
    <h1> Todo List </h1>
    <AddTodoForm onAddTodo={addTodo} />
    <TodoList todoList={todoList}/>
    </div>
  );
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const todoList = [
  {id: 1, title: 'Read a book'},
  {id: 2, title: 'Do homework'},
  {id: 3, title: 'Complete assignment'},
]
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <ul>
      { todoList.map((item) => (<li key={item.id}>{item.title}</li>)) }
    </ul>
    </>
  );
}

export default App

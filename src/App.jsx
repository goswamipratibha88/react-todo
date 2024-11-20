import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TodoList from './TodoList.jsx'
import AddTodoForm from './AddTodoForm.jsx'


function App() {
  //const [count, setCount] = useState(0)

  const [newTodo, setNewTodo] = useState('');
  const todos = [
    { id: 1, title: 'Complete assignment' },
    { id: 2, title: 'Read next chapter' },
    { id: 3, title: 'Attend Session' },
  ];

  return (

    <div>
      <h1>Todo List</h1>
      <AddTodoForm onAddTodo={setNewTodo} />
      <p>New Todo: {newTodo}</p>
      <TodoList todos={todos}></TodoList>
    </div>


  )
}

export default App

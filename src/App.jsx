import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TodoList from './TodoList.jsx'
import AddTodoForm from './AddTodoForm.jsx'


function App() {
  //const [count, setCount] = useState(0)

  const [newTodo, setNewTodo] = useState('');

  const [todoList, setTodoList] = useState([
    { id: 1, title: 'Complete assignment' },
    { id: 2, title: 'Read next chapter' },
    { id: 3, title: 'Attend Session' },

  ]);

  const addNewTodo = (todo) => {
    console.log(todo);
    setTodoList([
      ...todoList,

      { id: todoList.length + 1, title: todo }

    ])
  }

  return (

    <div>
      <h1>Todo List</h1>
      <AddTodoForm onAddTodo={addNewTodo} />
      <p>New Todo: {newTodo}</p>
      <hr />
      <TodoList todos={todoList}></TodoList>
    </div>


  )
}

export default App

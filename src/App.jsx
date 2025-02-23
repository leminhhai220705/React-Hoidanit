import './components/todo/todo.css'
import TodoData from './components/todo/TodoData'
import reactLogo from './assets/react.svg'
import TodoNew from './components/todo/TodoNew'
import { useState } from 'react'

const App = () => {
  const [todoList, setTodoList] = useState([])



  const addNewTodo = (name) => {

    const randomIntFromInterval = (min, max) => {
      return Math.floor(Math.random() * ((max - min) + 1) + min)
    }

    const newTodo = {
      id: randomIntFromInterval(1, 1000000),
      name: name,
    }

    setTodoList([...todoList, newTodo])
  }

  return (
    <div className="todo-container">
      <div className="todo-title">Todo List</div>
      <TodoNew
        addNewTodo={addNewTodo}
      />

      {todoList.length > 0 ?
        <TodoData
          todoList={todoList}
        />
        :
        <div className='todo-image'>
          <img className='logo' src={reactLogo} alt="" />
        </div>}
    </div>
  )
}

export default App

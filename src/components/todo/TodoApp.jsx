import './todo.css'
import TodoData from './TodoData'
import reactLogo from '../../assets/react.svg'
import TodoNew from './TodoNew'
import { useState } from 'react'

const TodoApp = () => {

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

    const deleteTodo = (id) => {
        const newTodo = todoList.filter(item => item.id !== id)
        setTodoList(newTodo)

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
                    deleteTodo={deleteTodo}
                />
                :
                <div className='todo-image'>
                    <img className='logo' src={reactLogo} alt="" />
                </div>}
        </div>
    )
}

export default TodoApp;
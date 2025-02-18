import './components/todo/todo.css'
import TodoData from './components/todo/TodoData'
import reactLogo from './assets/react.svg'
import TodoNew from './components/todo/TodoNew'

const App = () => {

  const hoidanit = "Eric ManCity";
  const age = 25;
  const data = {
    address: "Hanoi",
    country: "Vietnam",
  }

  const addNewTodo = (name) => {
    alert(`call me ${name}`);
  }

  return (
    <div className="todo-container">
      <div className="todo-title">Todo List</div>
      <TodoNew
        addNewTodo={addNewTodo}
      />
      <TodoData
        name={hoidanit}
        age={age}
        data={data}
      />
      <div className='todo-image'>
        <img className='logo' src={reactLogo} alt="" />
      </div>
    </div>
  )
}

export default App

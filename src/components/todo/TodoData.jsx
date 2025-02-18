const TodoData = (props) => {
    // props la mot object 
    // const props = {
    //     name: "Eric", 
    //     age: 25, 
    //     data: {},
    // }
    const { name, age, data, todoList } = props

    // console.log(todoList);




    return (
        <div className='todo-data'>
            {todoList.map((item, index) => {
                console.log(item, index);
                return (
                    <div className="todo-item">
                        <div> {item.name}</div>
                        <button>Delete</button>
                    </div>

                )
            })}
            <div>
                {JSON.stringify(props.todoList)}
            </div>
        </div>
    )
}

export default TodoData;
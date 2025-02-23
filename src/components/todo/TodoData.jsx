const TodoData = (props) => {
    // props la mot object 
    // const props = {
    //     name: "Eric", 
    //     age: 25, 
    //     data: {},
    // }
    const { deleteTodo, todoList } = props

    // console.log(todoList);


    const handleClick = (id) => {
        deleteTodo(id)
    }

    return (
        <div className='todo-data'>
            {todoList.map((item, index) => {
                return (
                    <div className="todo-item" key={item.id}> {/* add key */}
                        <div> {item.name}</div>
                        <button

                            onClick={() => { handleClick(item.id) }}

                            style={{
                                cursor: 'pointer',
                            }}
                        >Delete</button>
                    </div>

                )
            })}

        </div>
    )
}

export default TodoData;
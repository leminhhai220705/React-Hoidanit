const TodoData = (props) => {

    // props la mot object 
    // const props = {
    //     name: "Eric", 
    //     age: 25, 
    //     data: {},
    // }

    const { name, age, data } = props
    console.log("check props: ", props);

    return (
        <div className='todo-data'>
            <div>My name is the {name}</div>
            <div>Learning React</div>
            <div>Watching Youtube</div>
        </div>
    )
}

export default TodoData;
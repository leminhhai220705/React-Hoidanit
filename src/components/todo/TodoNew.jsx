const TodoNew = (props) => {

    const { addNewTodo } = props;

    // addNewTodo("ERIC");
    return (
        <div className='todo-new'>
            <input style={
                {
                    height: '27px',
                    width: '22%'
                }
            } type="text" />
            <button className='button'>Add</button>
        </div>
    )
}

export default TodoNew;
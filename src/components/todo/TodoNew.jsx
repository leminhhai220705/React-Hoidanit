const TodoNew = (props) => {

    const { addNewTodo } = props;

    // addNewTodo("ERIC");

    const handleClick = () => {
        alert("click me")
    }

    const handleChange = (name) => {
        console.log(name)
    }

    return (
        <div className='todo-new'>
            <input style={
                {
                    height: '27px',
                    width: '22%'
                }
            } type="text"
                onChange={(e) => {
                    handleChange(e.target.value)
                }}
            />
            <button className='button'
                onClick={handleClick}
            >Add</button>
        </div>
    )
}

export default TodoNew;
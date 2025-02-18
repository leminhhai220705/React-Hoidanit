import { useState } from "react";

const TodoNew = (props) => {

    // useState hook (getter/setter): 
    // const valueInput = "eric";
    const [valueInput, setValueInput] = useState("eric")

    const { addNewTodo } = props;

    // addNewTodo("ERIC");

    const handleClick = () => {
        console.log(valueInput)
    }

    const handleChange = (name) => {
        setValueInput(name)
    }

    return (
        <div className='todo-new'>
            <input style={
                {
                    height: '27px',
                    width: '22%'
                }
            } type="text"
                onChange={(e) => { handleChange(e.target.value) }}
            />
            <button className='button'
                onClick={handleClick}
            >Add</button>

            <div>
                My text input is = {valueInput}
            </div>
        </div>
    )
}

export default TodoNew;
import { useState } from "react";

const TodoNew = (props) => {

    // useState hook (getter/setter): 
    // const valueInput = "eric";
    const [valueInput, setValueInput] = useState("")

    const { addNewTodo } = props;


    // addNewTodo("ERIC");

    const handleClick = () => {
        // if (!valueInput) {
        //     alert("Please enter the value")
        //     return;
        // }
        addNewTodo(valueInput)
        setValueInput("");
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
                value={valueInput}
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
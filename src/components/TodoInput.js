import React from "react";
import "../style.css"

const TodoInput = ({ createTodoItem }) => {
    const [value, setValue] = React.useState("")
    const handleSubmit = e => {
        e.preventDefault();
        if (value === "") {
            return console.log("Add a task")
        }
        createTodoItem(value)
        setValue("")
    }
    return (
        
        <form onSubmit={handleSubmit}>
            <div class="ui action input">
            <input
                type="text"
                placeholder="Create a task"
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
            <button class= "ui active button" onClick={handleSubmit}>Create</button>
            </div>
        </form>
   
    )
}

export default TodoInput;


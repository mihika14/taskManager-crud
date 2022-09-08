import React from "react"
import '../style.css'

const TodoItem = ({ item, index, deleteTodoItem, completeTodoItem }) => {
    <TodoItem
        key={index}
        index={index}
        item={item}
        deleteTodoItem={deleteTodoItem}
        completeTodoItem={completeTodoItem}

    />

  

    return (
        <table className="ui single line table">
            <thead>
                <tr><th>Tasks</th>
                    <th>Status</th>
                </tr></thead>
            <tbody><tr>
                <td style={{ textDecoration: item.complete ? "line-through" : "" }}>{item.todo}</td>
                <td>
                    <button className="ui button active" onClick={() => completeTodoItem(index)}>Complete</button>
                    <button className="ui button active" onClick={() => deleteTodoItem(index)}>delete</button>
                </td>
            </tr>
            </tbody>

        </table>

    )
};
export default TodoItem;

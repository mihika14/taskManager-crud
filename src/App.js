import React from "react";
import TodoItem from "./components/TodoItem";
import TodoInput from "./components/TodoInput";

function App() {
    const [todoItems, setTodoItems] = React.useState(
        [{
            todo: 'Make Breakfast......',
            complete: false
           
        },
        {
            todo: 'WebDev-Frontend',
            complete: false
            
        },
        {
            todo: 'Make Dinner........',
            complete: false
           
        }])

    const createTodoItem = (todo) => {
        const newTodoItems = [...todoItems, { todo, complete: false }];
        setTodoItems(newTodoItems);
    };

    const deleteTodoItem = (index) => {
        const newTodoItems = [...todoItems]
        newTodoItems.splice(index, 1)
        setTodoItems(newTodoItems)
    }

    const completeTodoItem = (index) => {
        const newTodoItems = [...todoItems];
        newTodoItems[index].complete === false
            ? (newTodoItems[index].complete = true)
            : (newTodoItems[index].complete = false);
        setTodoItems(newTodoItems)
    };

    const updateTodoItem = (index) => {
        const newTodoItems = [...todoItems];
        const item = newTodoItems[index];
        let newItem = prompt(`Update ${item.todo}?`, item.todo);
        let todoObj = { todo: newItem, complete: false };
        newTodoItems.splice(index, 1, todoObj);
        if (newItem === null || newItem === "") {
            return;
        } else {
            item.todo = newItem;
        }
        setTodoItems(newTodoItems);
    };

    return (
        <div className="ui center aligned container">
            <h1>TASK MANAGER</h1>
           {/* <h1 className="ui text container">TASK MANAGER</h1> */}
           <br />
            <TodoInput createTodoItem={createTodoItem} />
            {todoItems.map((item, index) => (
                <TodoItem
                    key={index}
                    index={index}
                    item={item}
                    deleteTodoItem={deleteTodoItem}
                    completeTodoItem={completeTodoItem}
                    updateTodoItem={updateTodoItem} />
            ))}
        </div>
    );
}

export default App;
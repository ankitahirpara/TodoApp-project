import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import "./app.css";
import { useState } from "react";
import WelcomeMessage from "./components/WelcomeMessage";

function App() {
  const [todoItems, settodoItems] = useState([]);
  const handleNewItem = (itemName, itemDuedate) => {
    const newTodoItem = [
      ...todoItems,
      {
        name: itemName,
        date: itemDuedate,
      },
    ];
    settodoItems(newTodoItem);
  };

  const handleDeleteItem = (TodoItemName) => {
    const newTodoItem =todoItems.filter(item =>item.name!==TodoItemName)
    settodoItems(newTodoItem);
  };
  return (
    <center className="todo-container">
      <AppName />
      <AddTodo onNewItem={handleNewItem}  />
      <WelcomeMessage todoItems={todoItems}/>
      <div className="items-container">
        <TodoItems todoItems={todoItems} deleteItem={handleDeleteItem}/>
      </div>
    </center>
  );
}
export default App;

import TodoItem from "./TodoItem"; //

function TodoItems({ todoItems ,deleteItem}) {
  return (
    <div>
      {todoItems.map((item) => (
        <TodoItem key={item.name} todoDate={item.date} todoName={item.name} deleteItem={deleteItem}></TodoItem>
      ))}
    </div>
  );
}
export default TodoItems;

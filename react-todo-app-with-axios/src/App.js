import "./App.css";
import { useState, useEffect } from "react";
import TodoListItem from "./TodoListItem";

function App() {
  const [todoName, setTodoName] = useState("");
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    const savedTodos = localStorage.getItem("todos");

    if (savedTodos) {
      setTodoList(JSON.parse(savedTodos));
    }
  }, []);

  const generateUniqueId = () => {
    const timestamp = Date.now().toString(36);
    const random = Math.random().toString(36).substring(2, 8);
    return `${timestamp}-${random}`;
  };

  const _handleChangeInputValue = (input) => {
    setTodoName(input.target.value);
  };

  const _handleAddTodo = (event) => {
    event.preventDefault();
    if (todoName.trim() === "") return;

    const id = generateUniqueId();
    const newTodo = { name: todoName, id };
    const updatedTodoList = [...todoList, newTodo];

    setTodoList(updatedTodoList);
    localStorage.setItem("todos", JSON.stringify(updatedTodoList));
    setTodoName("");
  };

  const _handleUpdateTodo = (todoId, newValue) => {
    const updatedTodoList = todoList.map((item) =>
      item.id === todoId ? { ...item, name: newValue } : item
    );
    setTodoList(updatedTodoList);

    localStorage.setItem("todos", JSON.stringify(updatedTodoList));
  };

  const _handleDeleteTodo = (todoId) => {
    const updatedTodoList = todoList.filter((item) => item.id !== todoId);
    setTodoList(updatedTodoList);

    localStorage.setItem("todos", JSON.stringify(updatedTodoList));
  };

  return (
    <div className="App">
      <h1>Todo App</h1>

      <form onSubmit={_handleAddTodo}>
        <input
          type="text"
          name="name"
          value={todoName}
          onChange={_handleChangeInputValue}
        />
        <button>Add todo</button>
      </form>

      <div className="todo-list">
        <ul>
          {todoList.map((item) => (
            <TodoListItem
              key={item.id}
              todo={item}
              onDelete={_handleDeleteTodo}
              onUpdate={_handleUpdateTodo}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;

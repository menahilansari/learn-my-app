import "./App.css";
import { useState, useEffect } from "react";
import TodoListItem from "./TodoListItem";

function App() {
  const [todoName, setTodoName] = useState("");
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/todos/user/33")
      .then((res) => res.json())
      .then((result) => {
        const todos = result.todos;
        setTodoList(todos);
      });
  }, []);

  const _handleChangeInputValue = (input) => {
    setTodoName(input.target.value);
  };

  const _handleAddTodo = (event) => {
    event.preventDefault();
    if (todoName.trim() === "") return;

    fetch("https://dummyjson.com/todos/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        todo: todoName,
        completed: false,
        userId: 33,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        const updatedTodoList = [...todoList, result];
        setTodoList(updatedTodoList);
        setTodoName("");
      });
  };

  const _handleUpdateTodo = (todoId, newValue) => {
    fetch(`https://dummyjson.com/todos/${todoId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        todo: newValue,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        const updatedTodoList = todoList.map((item) =>
          item.id === todoId ? { ...item, todo: newValue } : item
        );
        setTodoList(updatedTodoList);
      });
  };

  const _handleDeleteTodo = (todoId) => {
    fetch(`https://dummyjson.com/todos/${todoId}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((result) => {
        const updatedTodoList = todoList.filter((item) => item.id !== todoId);
        setTodoList(updatedTodoList);
      });
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

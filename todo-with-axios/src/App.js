import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import TodoListItem from "./TodoListItem";

function App() {
  const [todoName, setTodoName] = useState("");
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/todos/user/33")
      .then((res) => setTodoList(res.data.todos))
      .catch((err) => console.error(err));
  }, []);

  const _handleChangeInputValue = (input) => {
    setTodoName(input.target.value);
  };

  const _handleAddTodo = async (event) => {
    event.preventDefault();
    if (todoName.trim() === "") return;

    try {
      const response = await axios.post("https://dummyjson.com/todos/add", {
        todo: todoName,
        completed: false,
        userId: 33,
      });
      setTodoList([...todoList, response.data]);
      setTodoName("");
    } catch (error) {
      console.error("Add todo failed:", error);
    }
  };

  const _handleUpdateTodo = async (todoId, newValue) => {
    try {
      await axios.put(`https://dummyjson.com/todos/${todoId}`, {
        todo: newValue,
      });
      const updated = todoList.map((item) =>
        item.id === todoId ? { ...item, todo: newValue } : item
      );
      setTodoList(updated);
    } catch (error) {
      console.error("Update failed:", error);
    }
  };

  const _handleDeleteTodo = async (todoId) => {
    try {
      await axios.delete(`https://dummyjson.com/todos/${todoId}`);
      const updated = todoList.filter((item) => item.id !== todoId);
      setTodoList(updated);
    } catch (error) {
      console.error("Delete failed:", error);
    }
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

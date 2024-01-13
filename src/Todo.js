import React, { useState } from "react";

const Todo = () => {
  const [todoItem, setTodoItem] = useState("");
  const [age, setAge] = useState("");
  const [todoList, setTodoList] = useState([]);

  const handleNameChange = (e) => {
    setTodoItem(e.target.value);
  };
  const handleAgeChange = (e) => {
    setAge(e.target.value);
  };
  const addTodoHandler = () => {
    setTodoList((prevState) => {
      return [
        ...prevState,
        { age: age, name: todoItem, id: Math.random().toString() },
      ];
    });
  };
  const deleteHandler = (todoid) => {
    const deleteE = todoList.filter((todo) => todo.id !== todoid);
    setTodoList(deleteE);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setTodoItem("");
    setAge("");
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          placeholder="name..."
          className="input"
          type="text"
          value={todoItem}
          onChange={handleNameChange}
        />
        <label htmlFor="age">Age:</label>
        <input
          id="age"
          placeholder="age.."
          className="input"
          type="number"
          value={age}
          onChange={handleAgeChange}
        />
        <button onClick={addTodoHandler}>ADD</button>
        <ul>
          {todoList.map((todo) => (
            <li key={todo.id}>
              {todo.name} {todo.age}(years old){" "}
              <span>
                <button onClick={() => deleteHandler(todo.id)}>Delete</button>
              </span>
            </li>
          ))}
        </ul>
      </form>
    </div>
  );
};
export default Todo;

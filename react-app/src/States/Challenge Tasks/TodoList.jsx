import React, { useState } from "react";

const TodoList = () => {
  // States
  const [item, setItem] = useState([]);
  const [inputVal, setInputVal] = useState("");

  // Event hander
  const handleChange = (event) => {
    setInputVal(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputVal.trim()) {
      setItem([...item, inputVal]);
      setInputVal("");
    }
  };

  return (
    <div>
      <h1 style={{ fontFamily: "Impact" }}>TODO LIST TASK</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your task"
          value={inputVal}
          onChange={handleChange}
        />
        <button>Add Item</button>
      </form>
      <ul>
        {item.map((i) => (
          <li key={Math.random()}>{i}</li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;

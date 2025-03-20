import React, { useEffect, useState } from "react";

const StateWithCallbackFunctionExample2 = () => {
  // State
  const [name, setName] = useState(() => {
    let savedName = localStorage.getItem("name");
    return savedName ? JSON.parse(savedName) : "";
  });

  // useEffect() Hook
  useEffect(() => {
    localStorage.setItem("name", JSON.stringify(name));
  }, [name]);

  // Event handlers
  const handleChange = (event) => {
    setName(event.target.value);
  };

  const clearName = () => {
    setName("");
  };

  return (
    <div>
      <p>Your Name: {name}</p>
      <input
        type="text"
        value={name}
        placeholder="Enter your name"
        onChange={handleChange}
      />
      <button onClick={clearName}>Clear Name</button>
    </div>
  );
};

export default StateWithCallbackFunctionExample2;

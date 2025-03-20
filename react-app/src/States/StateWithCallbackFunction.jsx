import React, { useState } from "react";

const StateWithCallbackFunction = () => {
  // State
  const [count, setCount] = useState(() => {
    let initialCount = 0;
    return initialCount;
  });

  // Event handler
  const increment = () => {
    setCount((prevCount) => {
      return prevCount + 1;
    });
  };

  return (
    <div>
      <p>count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

export default StateWithCallbackFunction;
